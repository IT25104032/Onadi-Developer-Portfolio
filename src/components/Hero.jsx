import data from "../data/hero.json";

function Hero() {

    const { profile, terminal, socialLinks, heroButtons, stats } = data;

    return (

        <section className="relative min-h-screen bg-[#070B1A] text-white overflow-hidden">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>


            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* HERO GRID */}
                <div className="grid md:grid-cols-2 gap-4 items-center">


                    {/* =================================================
                        LEFT - TERMINAL
                    ================================================= */}

                    <div className="mt-10 -ml-10 bg-[#0B0F1A] border border-[#2A2F45] rounded-2xl w-full max-w-[500px] overflow-hidden terminal-glow">


                        {/* TOP BAR */}

                        <div className="flex items-center justify-between px-4 py-3 bg-[#0F1428]/80 backdrop-blur-md border-b border-[#2A2F45]">

                            <div className="flex gap-2">

                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>

                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>

                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                            </div>


                            <p className="text-gray-400 text-sm terminal-font">

                                {terminal.username}@portfolio:~

                            </p>


                            <div className="w-[60px]"></div>

                        </div>


                        {/* TERMINAL BODY */}

                        <div className="p-4 terminal-font text-sm space-y-6">


                            {/* WHOAMI */}

                            <div>

                                <p className="text-green-400">
                                    &gt; whoami
                                </p>

                                <p className="text-gray-300 mt-0.5">
                                    {terminal.username}
                                </p>

                            </div>


                            {/* ABOUT */}

                            <div>

                                <p className="text-green-400">
                                    &gt; cat about.txt
                                </p>

                                <div className="text-gray-300 mt-0.5 space-y-1">

                                    <p>
                                        {terminal.computerScience}
                                    </p>

                                    <p>
                                        {terminal.university}
                                    </p>

                                    <p>
                                        {terminal.interest}
                                    </p>

                                    <p>
                                        {terminal.personality}
                                    </p>

                                </div>

                            </div>


                            {/* SKILLS */}

                            <div>

                                <p className="text-green-400">
                                    &gt; skills --list
                                </p>

                                <p className="text-gray-300 mt-0.5">
                                    {terminal.skills}
                                </p>

                            </div>


                            {/* STATUS */}

                            <div>

                                <p className="text-green-400">
                                    &gt; status
                                </p>

                                <p className="text-gray-300 mt-0.5">
                                    {terminal.status}
                                </p>

                            </div>


                            {/* LOADING */}

                            <div>

                                <p className="text-green-400">
                                    &gt; {terminal.loadingText}
                                </p>


                                <div className="flex items-center gap-2 mt-3">

                                    <div className="flex gap-[4px]">

                                        {Array.from({ length: 22 }).map((_, i) => (

                                            <span
                                                key={i}
                                                className="w-[10px] h-[12px] bg-gradient-to-b from-purple-400 to-purple-600 rounded-sm"
                                            ></span>

                                        ))}

                                    </div>


                                    <span className="text-gray-300">

                                        {terminal.loadingPercentage}

                                    </span>

                                </div>

                            </div>


                            {/* CURSOR */}

                            <p className="text-green-400">

                                &gt; <span className="animate-pulse">_</span>

                            </p>

                        </div>

                    </div>



                    {/* =================================================
                        RIGHT SIDE
                    ================================================= */}

                    <div className="flex items-center justify-between gap-10">


                        {/* TEXT */}

                        <div className="max-w-[520px] mt-18 -ml-30">


                            {/* NAME */}

                            <h1 className="text-5xl font-bold leading-tight">

                                Hi, I’m <br />

                                <span className="text-purple-500">

                                    {profile.name}

                                </span>

                            </h1>


                            {/* ROLE */}

                            <p className="mt-4 text-lg text-gray-300">

                                {profile.role} & <br />

                                <span className="text-purple-400">

                                    {profile.secondaryRole}

                                </span>

                            </p>


                            {/* DESCRIPTION */}

                            <p className="mt-4 text-gray-400">

                                {profile.description}

                            </p>


                            {/* =================================================
                                BUTTONS
                            ================================================= */}

                            <div className="mt-6 flex gap-4">

                                {heroButtons.map((button) => (

                                    <button
                                        key={button.text}
                                        className={
                                            button.action === "projects"

                                                ? "bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"

                                                : "border border-gray-500 px-6 py-3 rounded-lg hover:bg-white/10 transition"
                                        }
                                    >

                                        {button.text} →

                                    </button>

                                ))}

                            </div>


                            {/* =================================================
                                LET'S CONNECT
                            ================================================= */}

                            <div className="mt-8">

                                <p className="text-gray-400 mb-3">
                                    Let’s connect
                                </p>


                                <div className="flex gap-4">

                                    {socialLinks.map((social) => (

                                        <a
                                            key={social.name}
                                            href={social.url || "#"}
                                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#11152a] hover:bg-purple-600 transition"
                                            aria-label={social.name}
                                        >

                                            <i
                                                className={`${social.icon} text-white`}
                                            ></i>

                                        </a>

                                    ))}

                                </div>

                            </div>

                        </div>



                        {/* =================================================
                            GIF
                        ================================================= */}

                        <div className="relative hidden md:flex justify-center items-center">

                            {/* Glow */}

                            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-20"></div>


                            {/* GIF */}

                            <img
                                src={profile.heroImage}
                                alt="Developer animation"
                                className="w-[700px] h-auto mt-10 ml-10 relative z-10"
                            />

                        </div>

                    </div>

                </div>



                {/* =================================================
                    STATS
                ================================================= */}

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((stat) => (

                        <div
                            key={stat.label}
                            className="bg-[#0D1124] border border-[#2A2F45] rounded-xl p-6 text-center"
                        >

                            <p className="text-purple-400 text-2xl mb-2">

                                {stat.icon}

                            </p>

                            <h2 className="text-white text-2xl font-semibold">

                                {stat.value}

                            </h2>

                            <p className="text-gray-400 text-sm">

                                {stat.label}

                            </p>

                        </div>

                    ))}

                </div>


            </div>

        </section>
    );
}

export default Hero;