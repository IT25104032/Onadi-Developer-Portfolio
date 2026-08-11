function Hero() {
    return (

        <section className="relative min-h-screen bg-[#070B1A] text-white overflow-hidden">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* HERO GRID */}
                <div className="grid md:grid-cols-2 gap-4 items-center">

                    {/* LEFT - TERMINAL */}
                    <div className="mt-10 -ml-10 bg-[#0B0F1A] border border-[#2A2F45] rounded-2xl w-full max-w-[500px] overflow-hidden terminal-glow">

                        {/* TOP BAR */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#0F1428]/80 backdrop-blur-md border-b border-[#2A2F45]">

                            <div className="flex gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            <p className="text-gray-400 text-sm terminal-font">
                                onadi@portfolio:~
                            </p>

                            <div className="w-[60px]"></div>
                        </div>

                        {/* TERMINAL BODY */}
                        <div className="p-4 terminal-font text-sm space-y-6">

                            <div>
                                <p className="text-green-400">&gt; whoami</p>
                                <p className="text-gray-300 mt-0.5">onadi</p>
                            </div>

                            <div>
                                <p className="text-green-400">&gt; cat about.txt</p>
                                <div className="text-gray-300 mt-0.5 space-y-1">
                                    <p>Computer Science Undergraduate</p>
                                    <p>SLIIT</p>
                                    <p>AI Enthusiast</p>
                                    <p>Problem Solver</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-green-400">&gt; skills --list</p>
                                <p className="text-gray-300 mt-0.5">
                                    Java, Python, JavaScript, React, SQL, Git, C
                                </p>
                            </div>

                            <div>
                                <p className="text-green-400">&gt; status</p>
                                <p className="text-gray-300 mt-0.5">
                                    Learning. Building. Growing.
                                </p>
                            </div>

                            <div>
                                <p className="text-green-400">&gt; loading portfolio...</p>

                                <div className="flex items-center gap-2 mt-3">
                                    <div className="flex gap-[4px]">
                                        {Array.from({ length: 22 }).map((_, i) => (
                                            <span
                                                key={i}
                                                className="w-[10px] h-[12px] bg-gradient-to-b from-purple-400 to-purple-600 rounded-sm"
                                            ></span>
                                        ))}
                                    </div>

                                    <span className="text-gray-300">100%</span>
                                </div>
                            </div>

                            <p className="text-green-400">
                                &gt; <span className="animate-pulse">_</span>
                            </p>

                        </div>
                    </div>

                    {/* ✅ RIGHT SIDE (REPLACED YOUR OLD GIF DIV) */}
                    <div className="flex items-center justify-between gap-10">

                        {/* TEXT */}
                        <div className="max-w-[520px] mt-18 -ml-30">

                            <h1 className="text-5xl font-bold leading-tight">
                                Hi, I’m <br />
                                <span className="text-purple-500">Onadi</span>
                            </h1>

                            <p className="mt-4 text-lg text-gray-300">
                                Aspiring Software Engineer & <br />
                                <span className="text-purple-400">AI Enthusiast</span>
                            </p>

                            <p className="mt-4 text-gray-400">
                                I enjoy building intelligent, user-friendly applications and exploring the endless possibilities of technology.
                            </p>

                            {/* BUTTONS */}
                            <div className="mt-6 flex gap-4">
                                <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                                    View My Work →
                                </button>

                                <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-white/10 transition">
                                    Get In Touch →
                                </button>
                            </div>

                            {/* LET'S CONNECT */}
                            <div className="mt-8">
                                <p className="text-gray-400 mb-3">Let’s connect</p>

                                <div className="flex gap-4">

                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#11152a] hover:bg-purple-600 transition">
                                        <i className="fab fa-github text-white"></i>
                                    </div>

                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#11152a] hover:bg-purple-600 transition">
                                        <i className="fab fa-linkedin-in text-white"></i>
                                    </div>

                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#11152a] hover:bg-purple-600 transition">
                                        <i className="fas fa-envelope text-white"></i>
                                    </div>

                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#11152a] hover:bg-purple-600 transition">
                                        <i className="fas fa-globe text-white"></i>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* GIF */}
                        <div className="relative hidden md:flex justify-center items-center">

                            {/* glow */}
                            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-20"></div>

                            {/* gif */}
                            <img
                                src="/dev.gif"
                                alt="profile"
                                className="w-[700px] h-auto mt-10 ml-10 relative z-10"
                            />

                        </div>

                    </div>

                </div>

                {/* STATS */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

                    <div className="bg-[#0D1124] border border-[#2A2F45] rounded-xl p-6 text-center">
                        <p className="text-purple-400 text-2xl mb-2">💻</p>
                        <h2 className="text-white text-2xl font-semibold">5+</h2>
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