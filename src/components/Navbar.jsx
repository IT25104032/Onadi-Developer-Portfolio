function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-12 py-6">
      {/* Logo */}
      <h1 className="text-4xl font-bold text-white tracking-tight">
        Onadi<span className="text-violet-500">.</span>
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-10 text-gray-300">
        <li className="hover:text-violet-400 cursor-pointer">Home</li>
        <li className="hover:text-violet-400 cursor-pointer">About</li>
        <li className="hover:text-violet-400 cursor-pointer">Skills</li>
        <li className="hover:text-violet-400 cursor-pointer">Projects</li>
        <li className="hover:text-violet-400 cursor-pointer">Experience</li>
        <li className="hover:text-violet-400 cursor-pointer">Contact</li>
      </ul>

      {/* Resume Button */}
      <button className="border border-violet-500 px-6 py-3 rounded-full text-white hover:bg-violet-600 transition">
        Resume
      </button>
    </nav>
  );
}

export default Navbar;