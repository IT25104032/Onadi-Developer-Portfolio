import data from "../data/skills.json";

function Skills() {

  const { tag, title, description, rows, footer } = data;

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
            {tag}
          </div>

          <h2>
            {title}
          </h2>

          <p>
            {description}
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
            {footer.text}
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