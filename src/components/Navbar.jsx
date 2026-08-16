import data from "../data/navbar.json";

function Navbar() {

  const { logo, links, resume } = data;

  return (
    <nav className="w-full flex justify-between items-center px-12 py-6 bg-[#050816] text-white">

      {/* Logo */}
      <h1 className="text-4xl font-semibold text-white tracking-tight">
        {logo.name}
        <span className="text-violet-500">
          {logo.accent}
        </span>
      </h1>


      {/* Navigation Links */}
      <ul className="flex gap-10 text-gray-300">

        {links.map((link) => (

          <li
            key={link.target}
            className="hover:text-violet-400 cursor-pointer transition"
          >

            <a href={`#${link.target}`}>
              {link.name}
            </a>

          </li>

        ))}

      </ul>


      {/* Resume Button */}
      <a
        href={resume.file}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-violet-500 px-6 py-3 rounded-full text-white hover:bg-violet-600 transition"
      >
        {resume.text}
      </a>

    </nav>
  );
}

export default Navbar;