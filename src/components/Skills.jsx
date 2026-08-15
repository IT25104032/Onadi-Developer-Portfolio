function Skills() {
  const rows = [
    // =====================================================
    // ROW 1 — 6
    // =====================================================
    [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
    ],

    // =====================================================
    // ROW 2 — 5
    // =====================================================
    [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
    ],

    // =====================================================
    // ROW 3 — 4
    // =====================================================
    [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
    ],

    // =====================================================
    // ROW 4 — 3
    // =====================================================
    [
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      },
      {
        name: "R",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
      },
    ],
  ];

  return (
    <section id="skills" className="tech-stack-section">

      {/* =========================================
          BACKGROUND GRID
      ========================================== */}

      <div className="tech-grid"></div>


      {/* =========================================
          PURPLE BACKGROUND GLOW
      ========================================== */}

      <div className="tech-glow tech-glow-main"></div>

      <div className="tech-glow tech-glow-small"></div>


      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div className="tech-stack-container">


        {/* =====================================
            HEADER
        ====================================== */}

        <div className="tech-stack-header">

          <div className="tech-terminal-label">
            &lt; developer tools I use /&gt;
          </div>

          <h2>
            TECH STACK
          </h2>

          <p>
            Technologies and tools I use to build,
            learn and create.
          </p>

        </div>


        {/* =====================================
            TECHNOLOGY ROWS
        ====================================== */}

        <div className="tech-stack-rows">

          {rows.map((row, rowIndex) => (

            <div
              key={rowIndex}
              className="tech-stack-row"
            >

              {row.map((tech) => (

                <div
                  key={tech.name}
                  className="tech-card"
                >

                  {/* ICON */}

                  <div className="tech-icon-container">

                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="tech-icon"
                    />

                  </div>


                  {/* TECHNOLOGY NAME */}

                  <span className="tech-name">
                    {tech.name}
                  </span>

                </div>

              ))}

            </div>

          ))}

        </div>


        {/* =====================================
            FOOTER TERMINAL TEXT
        ====================================== */}

        <div className="tech-footer">

          <span className="tech-footer-symbol">
            &gt;
          </span>

          <span>
            keep learning. keep building.
          </span>

          <span className="tech-cursor">
            _
          </span>

        </div>

      </div>

    </section>
  );
}

export default Skills;