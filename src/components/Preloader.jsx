import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 2;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setVisible(false);
        }, 500);
      }

      setProgress(value);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const loadingSteps = [
    {
      text: "initializing portfolio",
      done: progress >= 20,
    },

  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.6 }
          }}
          className="fixed inset-0 z-[9999] bg-[#050816] text-white overflow-hidden"
        >

          {/* GRID */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* PURPLE GLOW */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-700/20 blur-[140px] rounded-full" />

          {/* SCANLINE */}
          <motion.div
            animate={{ y: ["-100%", "100vh"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute left-0 right-0 h-[2px] bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          />

          {/* CONTENT */}
          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

            <div className="w-full max-w-[650px]">

              {/* TOP LABEL */}
              <div className="flex items-center gap-3 mb-8">

                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.9)]" />

                <span className="font-mono text-xs tracking-[0.3em] text-purple-400 uppercase">
                  System Boot
                </span>

                <span className="flex-1 h-px bg-purple-500/20" />



              </div>


              {/* LOGO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Onadi<span className="text-purple-500">.</span>
                </h1>

                <p className="mt-3 font-mono text-sm text-gray-500">
                  developer.portfolio<span className="text-purple-400">()</span>
                </p>

              </motion.div>


              {/* TERMINAL */}
              <div className="border border-[#2A2F45] bg-[#080C18]/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.12)]">

                {/* TERMINAL BAR */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2A2F45] bg-[#0B0F1A]">

                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />

                  <span className="ml-3 font-mono text-xs text-gray-600">
                    onadi@portfolio:~
                  </span>

                </div>


                {/* TERMINAL CONTENT */}
                <div className="p-5 font-mono text-sm">

                  {loadingSteps.map((step, index) => (

                    <motion.div
                      key={step.text}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: progress >= index * 20 ? 1 : 0.25
                      }}
                      className="flex items-center gap-3 py-1.5"
                    >

                      <span className="text-purple-400">
                        &gt;
                      </span>

                      <span className="text-gray-400">
                        {step.text}
                      </span>

                      <span className="ml-auto">

                        {step.done ? (
                          <span className="text-green-400">
                            ✓
                          </span>
                        ) : (
                          <span className="text-gray-700">
                            ...
                          </span>
                        )}

                      </span>

                    </motion.div>

                  ))}


                  {/* CURSOR */}
                  <div className="flex items-center gap-2 mt-3 text-purple-400">

                    <span>&gt;</span>

                    <span className="animate-pulse">
                      _
                    </span>

                  </div>

                </div>

              </div>


              {/* PROGRESS */}
              <div className="mt-7">

                <div className="flex justify-between mb-2 font-mono text-xs">

                  <span className="text-gray-500">
                    LOADING PORTFOLIO
                  </span>

                  <span className="text-purple-400">
                    {progress}%
                  </span>

                </div>


                <div className="h-1.5 bg-[#111629] rounded-full overflow-hidden">

                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-700 via-purple-500 to-violet-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.15 }}
                  />

                </div>

              </div>


              {/* BOTTOM */}
              <div className="flex justify-between mt-5 font-mono text-[10px] text-gray-600">


                <span>
                  {progress === 100
                    ? "SYSTEM READY"
                    : "PLEASE WAIT..."
                  }
                </span>

              </div>

            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;