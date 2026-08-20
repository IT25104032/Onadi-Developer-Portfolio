import data from "../data/hero.json";

function Hero() {

    const { profile, terminal, socialLinks, heroButtons, stats } = data;

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

        <section
            id="home"
            className="relative min-h-screen bg-[#050816] text-white overflow-hidden"
        >

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>


            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* HERO GRID */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-8 items-center">
                    {/* LEFT - TERMINAL */}

                    <div className="mt-6 lg:mt-10 lg:-ml-10 bg-[#0B0F1A] border border-[#2A2F45] rounded-2xl w-full max-w-[500px] overflow-hidden terminal-glow">


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



                    {/* RIGHT SIDE */}

                    <div className="flex items-center justify-between gap-10">


                        {/* TEXT */}

                        <div className="w-full max-w-[600px] mt-10 xl:mt-18 xl:-ml-30">


                            {/* NAME */}

                            <h1 className="leading-tight">

                                <span className="block text-3xl sm:text-4xl lg:text-4xl text-white">
                                    Hi, I’m
                                </span>

                                <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-500 mt-1">
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



                            {/* BUTTONS */}

                            <div className="mt-24 flex gap-4">

                                {heroButtons.map((button) => (

                                    <a
                                        key={button.text}
                                        href={
                                            button.action === "projects"
                                                ? "#projects"
                                                : "#contact"
                                        }
                                        onClick={(e) =>
                                            handleScroll(
                                                e,
                                                button.action === "projects"
                                                    ? "projects"
                                                    : "contact"
                                            )
                                        }
                                        className={
                                            button.action === "projects"
                                                ? "bg-purple-600 px-7 py-3 rounded-lg hover:bg-purple-700 transition whitespace-nowrap cursor-pointer"
                                                : "border border-gray-500 px-7 py-3 rounded-lg hover:bg-white/10 transition whitespace-nowrap cursor-pointer"
                                        }
                                    >
                                        {button.text} →
                                    </a>

                                ))}

                            </div>

                        </div>



                        {/* GIF */}

                        <div className="relative hidden xl:flex justify-center items-center w-full">

                            {/* Glow */}

                            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-20"></div>


                            {/* GIF */}

                            <img
                                src={profile.heroImage}
                                alt="Developer animation"
                                className="w-full max-w-[550px] xl:max-w-[700px] h-auto relative z-10"
                            />

                        </div>

                    </div>

                </div>



                {/* STATS */}

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((stat) => (

                        <div
                            key={stat.label}
                            className="bg-[#0D1124] border border-[#2A2F45] rounded-xl p-3 text-center"
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