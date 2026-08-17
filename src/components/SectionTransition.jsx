import { motion, useScroll, useTransform } from "framer-motion";

function SectionTransition() {
    const { scrollYProgress } = useScroll();

    // Main glow movement
    const mainX = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["-20%", "15%", "-10%", "20%", "0%"]
    );

    const mainY = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["0vh", "20vh", "-10vh", "25vh", "0vh"]
    );

    // Second glow movement
    const secondX = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["20%", "-15%", "15%", "-20%", "10%"]
    );

    const secondY = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["15vh", "-10vh", "20vh", "-15vh", "10vh"]
    );

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

            {/* MAIN PURPLE GLOW */}
            <motion.div
                style={{
                    x: mainX,
                    y: mainY,
                }}
                animate={{
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    top-[20%]
                    left-[10%]
                    w-[350px]
                    h-[350px]
                    rounded-full
                    bg-purple-600/10
                    blur-[100px]
                "
            />

            {/* SECOND PURPLE GLOW */}
            <motion.div
                style={{
                    x: secondX,
                    y: secondY,
                }}
                animate={{
                    scale: [1, 0.85, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    top-[55%]
                    right-[5%]
                    w-[300px]
                    h-[300px]
                    rounded-full
                    bg-violet-500/10
                    blur-[90px]
                "
            />

            {/* SMALL FLOATING GLOW */}
            <motion.div
                animate={{
                    x: [0, 60, -30, 0],
                    y: [0, -40, 30, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    top-[40%]
                    left-[45%]
                    w-[120px]
                    h-[120px]
                    rounded-full
                    bg-purple-400/10
                    blur-[50px]
                "
            />

        </div>
    );
}

export default SectionTransition;