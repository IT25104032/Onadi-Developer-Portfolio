function Hero() {
  return (
    <section className="relative min-h-screen px-6 pt-10 bg-[#0B0F1A] overflow-hidden flex items-start">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* HERO GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - TERMINAL */}
          <div className="bg-[#0D1124] border border-[#2A2F45] rounded-2xl p-6 w-full shadow-[0_0_60px_rgba(124,58,237,0.25)]">

            {/* TOP BAR */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

              <p className="text-gray-400 text-sm font-mono">
                onadi@portfolio:~
              </p>

              <div className="w-[60px]"></div>
            </div>

            {/* TERMINAL CONTENT */}
            <div className="font-mono text-sm leading-relaxed space-y-5">

              <div>
                <p className="text-green-400">&gt; whoami</p>
                <p className="text-gray-300 ml-2">onadi</p>
              </div>

              <div>
                <p className="text-green-400">&gt; cat about.txt</p>
                <div className="text-gray-300 ml-2 space-y-1">
                  <p>Computer Science Undergraduate</p>
                  <p>SLIIT</p>
                  <p>AI Enthusiast</p>
                  <p>Problem Solver</p>
                </div>
              </div>

              <div>
                <p className="text-green-400">&gt; skills --list</p>
                <p className="text-gray-300 ml-2">
                  Java, Python, JavaScript, React, SQL, Git, C++
                </p>
              </div>

              <div>
                <p className="text-green-400">&gt; status</p>
                <p className="text-gray-300 ml-2">
                  Learning. Building. Growing.
                </p>
              </div>

              <div>
                <p className="text-green-400">&gt; loading portfolio...</p>

                <div className="flex items-center gap-2 ml-2 mt-2">
                  <div className="flex gap-[3px]">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-2 h-3 bg-purple-500 rounded-sm"
                      ></span>
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm ml-2">100%</span>
                </div>
              </div>

              <p className="text-green-400">
                &gt; <span className="animate-pulse">_</span>
              </p>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-white">

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I’m
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Onadi
              </span>
            </h1>

            <p className="mt-4 text-gray-400 text-lg">
              Aspiring Software Engineer &{" "}
              <span className="text-purple-400">AI Enthusiast</span>
            </p>

            <p className="mt-4 text-gray-500 max-w-md">
              I enjoy building intelligent, user-friendly applications and exploring the endless possibilities of technology.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white shadow-lg hover:scale-105 transition">
                View My Work →
              </button>

              <button className="px-6 py-3 border border-gray-600 rounded-xl text-white hover:bg-white/10 transition">
                Get In Touch →
              </button>
            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-[#0D1124] border border-[#2A2F45] rounded-xl p-6 text-center">
            <p className="text-purple-400 text-2xl mb-2">💻</p>
            <h2 className="text-white text-2xl font-semibold">10+</h2>
            <p className="text-gray-400 text-sm">Projects Completed</p>
          </div>

          <div className="bg-[#0D1124] border border-[#2A2F45] rounded-xl p-6 text-center">
            <p className="text-purple-400 text-2xl mb-2">{`{ }`}</p>
            <h2 className="text-white text-2xl font-semibold">5+</h2>
            <p className="text-gray-400 text-sm">Technologies Explored</p>
          </div>

          <div className="bg-[#0D1124] border border-[#2A2F45] rounded-xl p-6 text-center">
            <p className="text-purple-400 text-2xl mb-2">👥</p>
            <h2 className="text-white text-2xl font-semibold">2+</h2>
            <p className="text-gray-400 text-sm">Open Source Contributions</p>
          </div>

          <div className="bg-[#0D1124] border border-[#2A2F45] rounded-xl p-6 text-center">
            <p className="text-purple-400 text-2xl mb-2">☕</p>
            <h2 className="text-white text-2xl font-semibold">∞</h2>
            <p className="text-gray-400 text-sm">Curiosity Level</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;