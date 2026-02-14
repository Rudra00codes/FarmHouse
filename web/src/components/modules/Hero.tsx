"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background - Replace with actual video/image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                    alt="Farmhouse landscape"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-20 container mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="uppercase tracking-[0.2em] text-sm md:text-base mb-4 block">
                        Welcome to Veer Farmhouse
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
                        Where rustic charm <br />
                        <span className="italic">meets luxury resort living</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-8 font-light">
                        Distinctive bamboo and wood luxury design with handcrafted royal furniture. Ideal for staycations, celebrations, and private retreats.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button variant="harbour" size="lg" className="bg-accent hover:bg-accent/90 border-none">
                            Book a Stay
                        </Button>
                        <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                            Explore Amenities
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    )
}
