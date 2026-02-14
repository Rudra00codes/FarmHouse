"use client"

import { motion } from "framer-motion"

export function IntroSection() {
    return (
        <section className="py-24 md:py-32 bg-background flex flex-col items-center justify-center text-center px-6">
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm md:text-base uppercase tracking-[0.2em] text-primary/60 mb-6"
            >
                Your tranquil getaway, starts here.
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary max-w-4xl leading-[1.1]"
            >
                Premium indoor rooms with a cozy, heritage feel.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 text-lg md:text-xl text-primary/80 max-w-2xl font-light leading-relaxed"
            >
                Spacious event lawn for parties, weddings, and get-togethers. Enjoy our Resort-style outdoor lounge & bar for relaxed evenings.
            </motion.p>
        </section>
    )
}
