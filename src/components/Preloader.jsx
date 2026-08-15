import { useEffect, useState } from "react";

function Preloader({ onComplete }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Lines appear one after another
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 700),
      setTimeout(() => setStep(3), 1100),
      setTimeout(() => setStep(4), 1500),
    ];

    // Progress bar
    let currentProgress = 0;

    const progressInterval = setInterval(() => {
      currentProgress += 5;

      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 45);

    // Start closing animation
    const closeTimer = setTimeout(() => {
      setClosing(true);
    }, 2200);

    // Remove preloader
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2900);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressInterval);
      clearTimeout(closeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`preloader ${
        closing ? "preloader-closing" : ""
      }`}
    >

      {/* ========================= */}
      {/* TERMINAL */}
      {/* ========================= */}

      <div
        className={`preloader-terminal ${
          closing ? "terminal-expand" : ""
        }`}
      >

        {/* TOP BAR */}

        <div className="preloader-topbar">

          <div className="preloader-dots">

            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>

          </div>

          <span className="preloader-title">
            onadi@portfolio:~
          </span>

          <div className="preloader-spacer"></div>

        </div>


        {/* TERMINAL CONTENT */}

        <div className="preloader-content">

          {/* COMMAND */}

          <div className="preloader-line command">
            <span className="green">&gt;</span>{" "}
            <span>initializing portfolio...</span>
          </div>


          {/* LINE 1 */}

          {step >= 1 && (
            <div className="preloader-line success-line">
              <span className="green">&gt;</span>{" "}
              loading interface...
              <span className="check">✓</span>
            </div>
          )}


          {/* LINE 2 */}

          {step >= 2 && (
            <div className="preloader-line success-line">
              <span className="green">&gt;</span>{" "}
              loading projects...
              <span className="check">✓</span>
            </div>
          )}


          {/* LINE 3 */}

          {step >= 3 && (
            <div className="preloader-line success-line">
              <span className="green">&gt;</span>{" "}
              loading tech stack...
              <span className="check">✓</span>
            </div>
          )}


          {/* LINE 4 */}

          {step >= 4 && (
            <div className="preloader-line success-line">
              <span className="green">&gt;</span>{" "}
              preparing interface...
              <span className="check">✓</span>
            </div>
          )}


          {/* PROGRESS */}

          <div className="preloader-progress-container">

            <div className="preloader-progress-text">
              <span className="green">&gt;</span>{" "}
              loading portfolio...
            </div>


            <div className="progress-row">

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>


              <span className="progress-number">
                {progress}%
              </span>

            </div>

          </div>


          {/* START COMMAND */}

          {progress >= 100 && (
            <div className="preloader-start">

              <span className="green">&gt;</span>{" "}
              start portfolio
              <span className="cursor">_</span>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Preloader;