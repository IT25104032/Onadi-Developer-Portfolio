import { motion } from "framer-motion";

function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-24 bg-[#050816] relative"
        >

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div className="max-w-xl">

                        {/* TAG */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1124] border border-[#2A2F45] mb-4">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            <p className="text-purple-400 text-xs tracking-wide">ABOUT</p>
                        </div>

                        {/* TITLE */}
                        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
                            About Me
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-gray-400 leading-relaxed mb-8">
                            I’m Onadi Kahandawa, a second-year Computer Science undergraduate at SLIIT, driven by a strong passion for software engineering, AI, and continuous growth. I focus on learning by building—turning ideas into practical solutions while constantly improving my skills.

                            As an aspiring developer, I embrace challenges, explore modern technologies, and push myself beyond the basics. This journey is not just about what I know today, but about how fast I’m evolving into a confident and capable developer.            </p>

                        {/* CARDS */}
                        <div className="space-y-4">

                            {/* CARD 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="group relative bg-[#0B0F1A]/70 backdrop-blur-xl border border-[#2A2F45] rounded-xl p-5 hover:border-purple-500/40 hover:-translate-y-1 transition duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
                                        🎓
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Education</h3>
                                        <p className="text-gray-400 text-sm">
                                            BSc (Hons) in Computer Science <br /> SLIIT
                                        </p>
                                    </div>
                                </div>
                                <span className="absolute right-4 top-5 text-gray-500 group-hover:text-purple-400 transition">
                                    
                                </span>
                            </motion.div>

                            {/* CARD 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="group relative bg-[#0B0F1A]/70 backdrop-blur-xl border border-[#2A2F45] rounded-xl p-5 hover:border-purple-500/40 hover:-translate-y-1 transition duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
                                        💡
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Interests</h3>
                                        <p className="text-gray-400 text-sm">
                                            AI, Web Development, Open Source, Problem Solving
                                        </p>
                                    </div>
                                </div>
                                <span className="absolute right-4 top-5 text-gray-500 group-hover:text-purple-400 transition">
                                   
                                </span>
                            </motion.div>

                            {/* CARD 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="group relative bg-[#0B0F1A]/70 backdrop-blur-xl border border-[#2A2F45] rounded-xl p-5 hover:border-purple-500/40 hover:-translate-y-1 transition duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
                                        ⚡
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Currently Learning</h3>
                                        <p className="text-gray-400 text-sm">
                                            Java, Spring Boot, Figma, React, Data Structures & Algorithms
                                        </p>
                                    </div>
                                </div>
                                <span className="absolute right-4 top-5 text-gray-500 group-hover:text-purple-400 transition">
                                    
                                </span>
                            </motion.div>

                        </div>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="relative flex justify-center">

                        {/* GLOW */}
                        <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-3xl opacity-20 rounded-full"></div>

                        {/* IMAGE */}
                        <img
                            src="/about.jpg"  // 🔥 replace with your image
                            alt="about"
                            className="w-[800px] rounded-2xl border border-[#2A2F45] relative z-10 object-cover mt-5 -mt-40"
                        />

                    </div>

                </div>
            </div>
        </motion.section>
    );
}

export default About;