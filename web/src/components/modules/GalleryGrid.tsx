"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

const images = [
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2676&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598555819262-e67c824c4cf4?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2672&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=2670&auto=format&fit=crop",
]

export function GalleryGrid() {
    return (
        <section className="py-20 md:py-32 bg-secondary/10">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="uppercase tracking-widest text-sm text-primary/60 font-medium block mb-4">
                        Gallery
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary">
                        Life on the Farm
                    </h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            className="relative aspect-[3/4] w-full overflow-hidden rounded-lg break-inside-avoid"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${i + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
