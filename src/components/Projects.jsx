import myprojects from "../data/myprojects.json";
import ScrollReveal from "./ScrollReveal";

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#080C18] overflow-hidden"
    >

      {/* ========================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================= */}

      <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]"></div>


      <div className="max-w-7xl mx-auto relative z-10">


        {/* ========================= */}
        {/* SECTION HEADER */}
        {/* ========================= */}

        <div className="mb-8">

          {/* Small label */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">

            <span className="terminal-font text-[10px] text-purple-400">
              &gt; PROJECTS
            </span>

          </div>


          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Featured Projects
          </h2>


          <p className="mt-3 text-gray-400 max-w-2xl">
            A selection of projects I've built while learning,
            experimenting, and developing my skills.
          </p>

        </div>


        {/* ========================= */}
        {/* PROJECT GRID */}
        {/* ========================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {myprojects.projects.map((project, index) => (

            <div
              key={index}
              className="
                group
                bg-[#0D1120]
                border
                border-[#252B42]
                rounded-xl
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-500/40
                hover:shadow-[0_15px_40px_rgba(124,58,237,0.12)]
              "
            >

              {/* ========================= */}
              {/* PROJECT IMAGE AREA */}
              {/* ========================= */}

              <div
                className="
                  relative
                  w-full
                  h-[170px]
                  overflow-hidden
                  bg-[#111625]
                "
              >

                {/* FREECHECK IMAGE */}

                {project.image === "freecheck" && (

                  <img
                    src="/freecheck.png"
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                )}


                {/* RENTFLOW PLACEHOLDER */}

                {project.image === "rentflow" && (

                  <div
                    className="
                      w-full
                      h-full
                      flex
                      flex-col
                      items-center
                      justify-center
                      bg-[#0F1425]
                    "
                  >

                    <div
                      className="
                        text-3xl
                        text-purple-400
                        opacity-60
                        terminal-font
                        mb-3
                      "
                    >
                      {"{ }"}
                    </div>


                    <p className="text-sm text-gray-500">
                      Project in progress
                    </p>


                    <p className="text-xs text-gray-600 mt-1">
                      Preview coming soon
                    </p>

                  </div>

                )}


                {/* Dark overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0D1120]/30
                    to-transparent
                    pointer-events-none
                  "
                />

              </div>


              {/* ========================= */}
              {/* PROJECT CONTENT */}
              {/* ========================= */}

              <div className="p-4">


                {/* PROJECT TITLE */}

                <div className="flex items-center justify-between">

                  <h3 className="text-base font-semibold text-white">
                    {project.title}
                  </h3>


                  <span
                    className="
                      text-gray-600
                      group-hover:text-purple-400
                      transition
                    "
                  >
                    ↗
                  </span>

                </div>


                {/* DESCRIPTION */}

                <p className="mt-2 text-sm text-gray-400 leading-5">
                  {project.description}
                </p>


                {/* ========================= */}
                {/* TECHNOLOGIES */}
                {/* ========================= */}

                <div className="flex flex-wrap gap-2 mt-4">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-2.5
                        py-1
                        rounded-md
                        text-[11px]
                        bg-[#151B2C]
                        border
                        border-[#29314A]
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* ========================= */}
                {/* GITHUB LINK */}
                {/* ========================= */}

                {project.github && (

                  <div className="mt-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        text-gray-400
                        hover:text-purple-400
                        transition
                      "
                    >
                      GitHub
                      <span>↗</span>
                    </a>

                  </div>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;