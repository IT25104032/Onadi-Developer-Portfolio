import { motion } from "framer-motion";
import data from "../data/about.json";

function About() {

    const about = data;

    return (

        <motion.section
            id="about"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-16 bg-[#050816] relative"
        >
            <div data-aos="fade-right"></div>

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>


            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid md:grid-cols-2 gap-16 items-center">


                    {/* =================================================
                        LEFT SIDE
                    ================================================= */}

                    <div className="max-w-xl">


                        {/* TAG */}

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1124] border border-[#2A2F45] mb-4">

                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>

                            <p className="text-purple-400 text-xs tracking-wide">
                                {about.tag}
                            </p>

                        </div>


                        {/* TITLE */}

                        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">

                            {about.title}

                        </h2>


                        {/* DESCRIPTION */}

                        <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">
                            {about.description}
                        </p>
                    



                        {/* CARDS */}

                        <div className="space-y-4 mt-12">

                            {about.cards.map((card, index) => (

                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.2 + index * 0.2
                                    }}
                                    viewport={{ once: true }}
                                    className="group relative bg-[#0B0F1A]/70 backdrop-blur-xl border border-[#2A2F45] rounded-xl p-5 hover:border-purple-500/40 hover:-translate-y-1 transition duration-300"
                                >

                                    <div className="flex items-start gap-4">


                                        {/* ICON */}

                                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">

                                            {card.icon}

                                        </div>


                                        {/* CONTENT */}

                                        <div>

                                            <h3 className="text-white font-medium mb-1">

                                                {card.title}

                                            </h3>

                                            <p className="text-gray-400 text-sm">

                                                {card.description}

                                            </p>

                                        </div>

                                    </div>


                                    {/* HOVER ACCENT */}

                                    <span className="absolute right-4 top-5 text-gray-500 group-hover:text-purple-400 transition">

                                    </span>

                                </motion.div>

                            ))}

                        </div>

                    </div>



                    {/* RIGHT SIDE IMAGE */}

                    <div className="relative flex justify-center">


                        {/* GLOW */}

                        <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-3xl opacity-20 rounded-full"></div>


                        {/* IMAGE */}

                        <img
                            src={about.image}
                            alt="About Onadi"
                            className="w-[800px] rounded-2xl border border-[#2A2F45] relative z-10 object-cover mt-5 -mt-40"
                        />

                    </div>

                </div>

            </div>

        </motion.section>
    );
}

export default About;