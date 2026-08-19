import data from "../data/navbar.json";

function Navbar() {

  const { logo, links, more, resume } = data;

  // Smooth scroll to section
  const handleScroll = (e, target) => {
    e.preventDefault();

    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="w-full flex justify-between items-center px-12 py-6 bg-[#050816] text-white">

      {/* Logo */}
      <h1 className="text-3xl font-semibold text-white tracking-tight">
        {logo.name}
        <span className="text-violet-500">
          {logo.accent}
        </span>
      </h1>


      {/* Navigation Links */}
      <ul className="flex items-center gap-10 text-gray-300">

        {links.map((link) => (

          <li
            key={link.target}
            className="hover:text-violet-400 transition"
          >
            <a
              href={`#${link.target}`}
              onClick={(e) => handleScroll(e, link.target)}
              className="cursor-pointer"
            >
              {link.name}
            </a>
          </li>

        ))}


        {/* MORE */}
        <li className="relative group">

          {/* More Button */}
          <button
            className="
              flex
              items-center
              gap-2
              text-gray-300
              hover:text-violet-400
              transition
              cursor-pointer
            "
          >
            More

            <span className="
              text-xs
              transition-transform
              duration-200
              group-hover:rotate-180
            ">
              ▾
            </span>

          </button>


          {/* DROPDOWN */}
          <div
            className="
              absolute
              top-full
              right-0
              pt-3
              opacity-0
              invisible
              translate-y-2
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all
              duration-200
              z-50
            "
          >

            <div
              className="
                w-48
                rounded-xl
                border
                border-violet-500/20
                bg-[#0B0F1A]
                shadow-xl
                shadow-purple-900/20
                p-2
              "
            >

              {more.map((item) => (

                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={(e) => handleScroll(e, item.target)}
                  className="
                    block
                    px-4
                    py-3
                    rounded-lg
                    text-gray-300
                    hover:text-violet-400
                    hover:bg-violet-500/10
                    transition
                  "
                >
                  {item.icon} {item.name}
                </a>

              ))}

            </div>

          </div>

        </li>

      </ul>


      {/* Resume Button */}
      <a
        href={resume.file}
        target="_blank"
        rel="noopener noreferrer"
        className="
          border
          border-violet-500
          px-6
          py-3
          rounded-full
          text-white
          hover:bg-violet-600
          transition
        "
      >
        {resume.text}
      </a>

    </nav>
  );
}

export default Navbar;