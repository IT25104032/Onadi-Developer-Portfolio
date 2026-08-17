import { motion } from "framer-motion";
import data from "../data/footer.json";

function Footer() {

    const {
        logo,
        tagline,
        navigation,
        socials,
        closingMessage,
        copyright,
        builtWith
    } = data;

    return (
        <footer className="relative bg-[#050816] text-white overflow-hidden">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>


            {/* PURPLE GLOW */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/10 blur-[100px] rounded-full"></div>


            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">


                    {/* LOGO + TAGLINE */}

                    <div>

                        <a
                            href="#home"
                            className="inline-block text-3xl font-semibold tracking-tight hover:text-purple-400 transition"
                        >
                            {logo}
                            <span className="text-purple-500">.</span>
                        </a>

                        <p className="text-gray-500 text-sm mt-3 max-w-xs leading-relaxed">
                            {tagline}
                        </p>

                    </div>


                    {/* NAVIGATION */}

                    <div>

                        <p className="text-xs text-purple-400 tracking-[0.2em] uppercase mb-4">
                            Navigation
                        </p>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">

                            {navigation.map((item) => (

                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm text-gray-400 hover:text-white transition"
                                >
                                    {item.label}
                                </a>

                            ))}

                        </div>

                    </div>


                    {/* SOCIAL LINKS */}

                    <div>

                        <p className="text-xs text-purple-400 tracking-[0.2em] uppercase mb-4">
                            Let's Connect
                        </p>

                        <div className="flex gap-3">

                            {socials.map((social) => (

                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0D1124] border border-[#2A2F45] text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-purple-500/10 hover:-translate-y-1 transition duration-300"
                                >
                                    <i className={social.icon}></i>
                                </a>

                            ))}

                        </div>

                    </div>

                </div>


                {/* CLOSING MESSAGE */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 pt-6 border-t border-[#2A2F45] flex flex-col md:flex-row items-center justify-between gap-4"
                >

                    <p className="font-mono text-xs text-gray-600">
                        {closingMessage}
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 text-xs text-gray-600">

                        <span>
                            {builtWith}
                        </span>

                        <span className="hidden md:block text-gray-700">
                            •
                        </span>

                        <span>
                            {copyright}
                        </span>

                    </div>

                </motion.div>

            </div>

        </footer>
    );
}

export default Footer;