import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [selected, setSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        if (!card.thumbnail) return;
        setSelected(card);
    };

    return (
        <>
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-2 p-2 bg-white rounded-xl drop-shadow-xl border">
                {cards.map((card, i) => (
                    <div key={i} className={cn(card.className, "min-h-[100px]")}>
                        <motion.div
                            onClick={() => handleClick(card)}
                            className={cn(
                                card.className,
                                "relative overflow-hidden rounded-xl h-full w-full",
                                card.thumbnail ? "cursor-pointer" : ""
                            )}
                            whileHover={card.thumbnail ? { scale: 1.04 } : {}}
                            transition={{ duration: 0.2 }}
                        >
                            <BlurImage card={card} />
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Portal — renders directly into document.body, bypassing any parent transform/stacking context */}
            {selected && createPortal(
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}
                    onClick={() => setSelected(null)}
                >
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.78)" }} />
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        style={{ position: "relative", zIndex: 1, maxWidth: "min(90vw, 700px)", maxHeight: "85vh", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={selected.thumbnail}
                            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                            alt="foto ampliada"
                        />
                        {selected.content && (
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", padding: "16px 24px", borderRadius: "0 0 1rem 1rem" }}>
                                <p style={{ color: "#fff", fontSize: "13px", fontFamily: "Poppins, sans-serif" }}>{selected.content as React.ReactNode}</p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>,
                document.body
            )}
        </>
    );
};

const BlurImage = ({ card }: { card: Card }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="absolute inset-0 h-full w-full bg-gray-200 flex items-center justify-center">
            {!card.thumbnail ? (
                <span className="text-gray-500 text-sm">Sin imagen</span>
            ) : (
                <img
                    src={card.thumbnail}
                    onLoad={() => setLoaded(true)}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                    className={cn(
                        "object-cover object-top h-full w-full transition duration-200 drop-shadow-lg",
                        loaded ? "blur-none" : "blur-md"
                    )}
                    alt="thumbnail"
                />
            )}
        </div>
    );
};
