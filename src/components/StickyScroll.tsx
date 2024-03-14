import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export const StickyScroll = ({
    content,
    backgrounds,
    activeCard,
    setActiveCard,
}: {
    content: {
        titulo: string;
        descripcion: any;
        content?: React.ReactNode | any;
    }[];
    backgrounds: { bg: string[]; gradients: string[] };
    contentClassName?: string;
    activeCard: any;
    setActiveCard: any;
}) => {
    const ref = useRef<any>(null);

    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (

        <motion.div
            animate={{
                backgroundColor: backgrounds.bg[activeCard % backgrounds.bg.length],
            }}
            className="w-full bg-blue-500 h-[30rem] overflow-y-auto flex justify-center relative space-x-10 md:p-8"
            ref={ref}
        >
            <div className="relative flex items-start md:px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.titulo + index} className="my-4 md:my-10">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.titulo}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-slate-300 max-w-sm mt-6"
                            >
                                {item.descripcion}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                animate={{
                    background: backgrounds.gradients[activeCard % backgrounds.gradients.length],
                }}
                className={cn(
                    `hidden lg:block h-96 w-96 rounded-lg bg-white sticky top-10`,
                )}
            >
                {content[activeCard].content ?? null}
            </motion.div>
        </motion.div>
    );
};