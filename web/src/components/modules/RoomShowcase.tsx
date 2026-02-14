"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const showcases = [
    {
        tag: "Accomodation",
        title: "View Rooms",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop",
        className: "rounded-tl-[4rem] rounded-tr-lg rounded-bl-lg rounded-br-lg"
    },
    {
        tag: "Activities",
        title: "Shooting Range",
        image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2670&auto=format&fit=crop",
        className: "rounded-tl-lg rounded-tr-[4rem] rounded-bl-lg rounded-br-lg"
    },
    {
        tag: "Relaxation",
        title: "Pool & Garden",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop",
        className: "rounded-tl-lg rounded-tr-lg rounded-bl-[4rem] rounded-br-lg"
    }
]

export function RoomShowcase() {
    return (
        <section className="py-20 px-6 bg-background">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <h2 className="font-serif text-5xl md:text-6xl text-primary max-w-md leading-tight">
                        Experience the Luxury
                    </h2>
                    <p className="text-primary/70 max-w-md text-lg">
                        2 Rooms and Hall with distinctive bamboo and wood luxury design, opening onto a vista of greenery and our spacious lawn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {showcases.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className={`relative aspect-[4/5] overflow-hidden ${item.className} bg-secondary/20`}>
                                {/* Tag */}
                                <div className="absolute top-0 left-0 bg-background px-6 py-3 z-20 rounded-br-2xl">
                                    <span className="text-primary text-sm font-medium">{item.tag}</span>
                                </div>

                                <Image
                                    src={item.image}
                                    alt={item.tag}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Button pill */}
                            <div className="absolute bottom-6 right-6 z-20">
                                <Button variant="secondary" className="rounded-full px-6 py-6 shadow-lg hover:shadow-xl transition-all">
                                    {item.title}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
