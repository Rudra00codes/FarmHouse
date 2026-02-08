"use client"

import { motion } from "framer-motion"

const items = [
    "Breathtaking views",
    "Infinity pool",
    "Michelin restaurant",
    "Championship golf course",
    "Sensua Spa",
    "Breathtaking views",
    "Infinity pool",
    "Michelin restaurant",
    "Championship golf course",
    "Sensua Spa"
]

export function Marquee() {
    return (
        <div className="w-full bg-primary text-secondary overflow-hidden py-4 border-y border-secondary/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-8 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...items, ...items].map((item, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-sm uppercase tracking-[0.2em] font-medium">
                                {item}
                            </span>
                            <span className="text-accent text-xs">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
