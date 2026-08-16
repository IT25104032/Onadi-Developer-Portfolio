import { motion } from "framer-motion";
import data from "../data/awards.json";

function Awards() {
    const { tag, title, subtitle, awards } = data;

    return (
        <motion.section
            id="awards"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-16 bg-[#050816] relative text-white overflow-hidden"
        >

            {/* =========================================
                BACKGROUND GRID
            ========================================== */}

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>


            {/* =========================================
                PURPLE BACKGROUND GLOW
            ========================================== */}

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-700/10 blur-[120px] rounded-full"></div>


            {/* =========================================
                MAIN CONTAINER
            ========================================== */}

            <div className="max-w-7xl mx-auto px-6 relative z-10 -translate-x-6">


                {/* =====================================
                    HEADER
                ====================================== */}

                <div className="mb-8">

                    {/* TAG */}

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">

                        <span className="text-purple-400 text-sm">
                            🏆
                        </span>

                        <span className="text-purple-400 text-sm font-medium tracking-wide">
                            {tag}
                        </span>

                    </div>


                    {/* TITLE */}

                    <h2 className="text-4xl font-semibold tracking-tight">
                        {title}
                    </h2>


                    {/* SUBTITLE */}

                    <p className="mt-3 text-gray-400 max-w-2xl">
                        {subtitle}
                    </p>

                </div>


                {/* =====================================
                    AWARD GRID
                ====================================== */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


                    {awards.map((award, index) => (


                        <motion.div
                            key={`${award.type}-${index}`}
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15
                            }}
                            viewport={{
                                once: true
                            }}
                        >


                            {/* =================================
                                NORMAL AWARD CARD
                            ================================== */}

                            {award.type === "award" && (

                                <div className="group relative h-full min-h-[350px] overflow-hidden rounded-2xl border border-[#2A2F45] bg-[#0B0F1A]/80 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-1">


                                    {/* HOVER GLOW */}

                                    <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/[0.03] transition duration-500"></div>


                                    {/* CARD CONTENT */}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 h-full">


                                        {/* =================================
                                            IMAGE
                                        ================================== */}

                                        <div className="relative h-[330px] sm:h-auto overflow-hidden">

                                            <img
                                                src={award.image}
                                                alt={`${award.title} achievement`}
                                                className="absolute inset-0 w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                                            />


                                            {/* IMAGE OVERLAY */}

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent"></div>


                                            {/* IMAGE BORDER */}

                                            <div className="absolute inset-0 border-r border-[#2A2F45]"></div>

                                        </div>


                                        {/* =================================
                                            AWARD INFORMATION
                                        ================================== */}

                                        <div className="relative p-6 flex flex-col justify-center">


                                            {/* ICON */}

                                            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 text-2xl group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition">
                                                {award.icon}
                                            </div>


                                            {/* TITLE */}

                                            <h3 className="text-2xl font-semibold text-white">
                                                {award.title}
                                            </h3>


                                            {/* PERIOD */}

                                            <p className="text-purple-400 text-base font-medium mt-2">
                                                {award.period}
                                            </p>


                                            {/* SMALL LINE */}

                                            <div className="w-12 h-[2px] bg-purple-500 mt-5 mb-5 group-hover:w-20 transition-all duration-300"></div>


                                            {/* DESCRIPTION */}

                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {award.description}
                                            </p>


                                            {/* INSTITUTION */}

                                            <div className="flex items-start gap-3 mt-7 pt-5 border-t border-[#2A2F45]">

                                                <span className="text-purple-400 text-lg">
                                                    🎓
                                                </span>

                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    {award.institution}
                                                </p>

                                            </div>


                                            {/* YEAR */}

                                            <div className="flex items-center gap-3 mt-5">

                                                <span className="text-purple-400">
                                                    📅
                                                </span>

                                                <span className="text-gray-400 text-sm">
                                                    {award.year}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            )}



                        </motion.div>

                    ))}

                </div>

            </div>

        </motion.section>
    );
}

export default Awards;