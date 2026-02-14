"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function DiningSection() {
    return (
        <section className="py-24 px-6 bg-background overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1]">
                            Dine Under the Stars
                        </h2>
                        <p className="text-primary/70 text-lg leading-relaxed max-w-lg">
                            Experience our resort-style outdoor lounge & bar. Perfect for relaxed evenings, BBQ parties, or a quiet drink by the pool. Our spacious lawn sets the perfect stage for your private gatherings.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button variant="outline" size="lg" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 h-12">
                                Book a Stay
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 h-12">
                                View Gallery
                            </Button>
                        </div>
                    </motion.div>

                    {/* Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative w-full h-[600px] lg:h-[700px]"
                    >
                        {/* Main large image */}
                        <div className="absolute top-0 right-0 w-[85%] h-[80%] overflow-hidden rounded-[2rem]">
                            <Image
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
                                alt="Fine Dining"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Overlapping smaller image */}
                        <div className="absolute bottom-10 left-0 w-[55%] h-[45%] overflow-hidden rounded-[2rem] border-4 border-background shadow-2xl z-20">
                            <Image
                                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop"
                                alt="Gourmet Dish"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
