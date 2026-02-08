"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

interface BentoItem {
    title: string
    description: string
    image: string
    className?: string
}

const items: BentoItem[] = [
    {
        title: "Organic Dining",
        description: "Farm-to-table culinary experiences.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop",
        className: "col-span-1 row-span-1 md:col-span-2",
    },
    {
        title: "Wellness Spa",
        description: "Rejuvenate your senses.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop",
        className: "col-span-1 row-span-1",
    },
    {
        title: "Nature Trails",
        description: "Explore the untouched wilderness.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
        className: "col-span-1 row-span-1",
    },
    {
        title: "Luxury Stay",
        description: "Comfort meets rustic charm.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop",
        className: "col-span-1 row-span-1 md:col-span-2",
    },
]

export function BentoGrid() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="uppercase tracking-widest text-sm text-primary/60 font-medium block mb-4">
                        Amenities
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary">
                        Curated Experiences
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className={cn("relative group overflow-hidden rounded-lg cursor-pointer", item.className)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                            <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
