import { motion } from "framer-motion";
import data from "../data/mycontact.json";

function Contact() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative py-16 bg-[#050816] text-white overflow-hidden scroll-mt-24"
        >

            {/* GRID BACKGROUND */}
            <div
                className="
                    absolute inset-0
                    bg-[linear-gradient(to_right,#1a1f35_1px,transparent_1px),linear-gradient(to_bottom,#1a1f35_1px,transparent_1px)]
                    bg-[size:40px_40px]
                    opacity-20
                "
            ></div>


            {/* PURPLE GLOW */}
            <div
                className="
                    absolute
                    top-1/3
                    left-1/2
                    -translate-x-1/2
                    w-[500px]
                    h-[350px]
                    bg-purple-600/10
                    blur-[120px]
                    rounded-full
                "
            ></div>


            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-12">

                    {/* TAG */}
                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            border
                            border-purple-500/30
                            bg-purple-500/5
                            text-purple-400
                            text-sm
                            mb-4
                        "
                    >
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>

                        {data.tag}
                    </div>


                    {/* TITLE */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {data.title}
                    </h2>


                    {/* DESCRIPTION */}
                    <p className="mt-3 text-gray-400 max-w-xl mx-auto">
                        {data.description}
                    </p>

                </div>


                {/* TWO COLUMN LAYOUT */}
                <div className="grid md:grid-cols-2 gap-10 items-start">


                    {/* =====================================
                        LEFT SIDE
                    ====================================== */}

                    <div>

                        <h3 className="text-2xl font-semibold text-white mb-3">
                            {data.intro.title}
                        </h3>


                        <p className="text-gray-400 leading-relaxed max-w-md mb-7">
                            {data.intro.description}
                        </p>


                        {/* CONTACT INFORMATION */}

                        {data.contactInfo.map((info) => (
                            <div
                                key={info.label}
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    p-5
                                    mb-4
                                    rounded-xl
                                    bg-[#0B0F1A]
                                    border
                                    border-[#2A2F45]
                                    hover:border-purple-500/50
                                    transition
                                "
                            >

                                <div
                                    className="
                                        w-11
                                        h-11
                                        flex
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-purple-500/10
                                        text-purple-400
                                        text-lg
                                    "
                                >
                                    {info.icon}
                                </div>


                                <div>

                                    <p className="text-sm text-gray-500">
                                        {info.label}
                                    </p>

                                    <p className="text-gray-200 mt-1">
                                        {info.value}
                                    </p>

                                </div>

                            </div>
                        ))}


                        {/* SOCIAL LINKS */}

                        <div className="mt-7">

                            <p className="text-sm text-gray-500 mb-3">
                                Connect with me
                            </p>


                            <div className="flex gap-3">

                                {data.socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            px-4
                                            py-2
                                            rounded-lg
                                            bg-[#0B0F1A]
                                            border
                                            border-[#2A2F45]
                                            text-gray-300
                                            hover:text-purple-400
                                            hover:border-purple-500/50
                                            transition
                                        "
                                    >
                                        {social.name}
                                    </a>
                                ))}

                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        RIGHT SIDE — CONTACT FORM
                    ====================================== */}

                    <div
                        className="
                            bg-[#0B0F1A]/90
                            border
                            border-[#2A2F45]
                            rounded-2xl
                            p-7
                            shadow-2xl
                            shadow-purple-950/20
                        "
                    >

                        {/* NAME */}

                        <div className="mb-5">

                            <label
                                htmlFor="name"
                                className="block text-sm text-gray-300 mb-2"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder={data.form.namePlaceholder}
                                className="
                                    w-full
                                    bg-[#070B1A]
                                    border
                                    border-[#2A2F45]
                                    rounded-lg
                                    px-4
                                    py-3
                                    text-white
                                    placeholder-gray-600
                                    outline-none
                                    focus:border-purple-500
                                    focus:ring-1
                                    focus:ring-purple-500/20
                                    transition
                                "
                            />

                        </div>


                        {/* EMAIL */}

                        <div className="mb-5">

                            <label
                                htmlFor="email"
                                className="block text-sm text-gray-300 mb-2"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder={data.form.emailPlaceholder}
                                className="
                                    w-full
                                    bg-[#070B1A]
                                    border
                                    border-[#2A2F45]
                                    rounded-lg
                                    px-4
                                    py-3
                                    text-white
                                    placeholder-gray-600
                                    outline-none
                                    focus:border-purple-500
                                    focus:ring-1
                                    focus:ring-purple-500/20
                                    transition
                                "
                            />

                        </div>


                        {/* SUBJECT */}

                        <div className="mb-5">

                            <label
                                htmlFor="subject"
                                className="block text-sm text-gray-300 mb-2"
                            >
                                Subject
                            </label>

                            <input
                                id="subject"
                                type="text"
                                placeholder={data.form.subjectPlaceholder}
                                className="
                                    w-full
                                    bg-[#070B1A]
                                    border
                                    border-[#2A2F45]
                                    rounded-lg
                                    px-4
                                    py-3
                                    text-white
                                    placeholder-gray-600
                                    outline-none
                                    focus:border-purple-500
                                    focus:ring-1
                                    focus:ring-purple-500/20
                                    transition
                                "
                            />

                        </div>


                        {/* MESSAGE */}

                        <div className="mb-6">

                            <label
                                htmlFor="message"
                                className="block text-sm text-gray-300 mb-2"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows="5"
                                placeholder={data.form.messagePlaceholder}
                                className="
                                    w-full
                                    bg-[#070B1A]
                                    border
                                    border-[#2A2F45]
                                    rounded-lg
                                    px-4
                                    py-3
                                    text-white
                                    placeholder-gray-600
                                    outline-none
                                    resize-none
                                    focus:border-purple-500
                                    focus:ring-1
                                    focus:ring-purple-500/20
                                    transition
                                "
                            ></textarea>

                        </div>


                        {/* SEND BUTTON */}

                        <button
                            type="button"
                            className="
                                w-full
                                py-3
                                rounded-lg
                                bg-purple-600
                                hover:bg-purple-700
                                text-white
                                font-medium
                                transition
                                shadow-lg
                                shadow-purple-600/20
                            "
                        >
                            {data.form.buttonText}
                        </button>

                    </div>

                </div>

            </div>

        </motion.section>
    );
}

export default Contact;