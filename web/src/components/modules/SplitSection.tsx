"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../ui/button"

interface SplitSectionProps {
    title: string
    subtitle?: string
    description: string
    imageSrc: string
    alt: string
    reverse?: boolean
    ctaText?: string
    ctaLink?: string
}

export function SplitSection({
    title,
    subtitle,
    description,
    imageSrc,
    alt,
    reverse = false,
    ctaText,
    ctaLink
}: SplitSectionProps) {
    return (
        <section className="py-20 md:py-32 overflow-hidden bg-secondary/10">
            <div className="container mx-auto px-6">
                <div className={cn(
                    "flex flex-col md:flex-row items-center gap-12 md:gap-24",
                    reverse ? "md:flex-row-reverse" : ""
                )}>
                    {/* Text Content */}
                    <motion.div
                        className="flex-1 space-y-6"
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {subtitle && (
                            <span className="uppercase tracking-widest text-sm text-primary/60 font-medium">
                                {subtitle}
                            </span>
                        )}
                        <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                            {title}
                        </h2>
                        <div className="w-20 h-[1px] bg-accent/50" />
                        <p className="text-lg text-primary/80 font-light leading-relaxed">
                            {description}
                        </p>

                        {ctaText && (
                            <Button variant="harbour" className="mt-4">
                                {ctaText}
                            </Button>
                        )}
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="flex-1 relative aspect-[4/5] w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-primary/5 rounded-0 transform translate-x-4 translate-y-4 -z-10" />
                        <Image
                            src={imageSrc}
                            alt={alt}
                            fill
                            className="object-cover shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
