"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Minus, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { TextRoll } from "@/components/ui/text-roll"

const navItems = [
    { name: "Stay", href: "/stay" },
    { name: "Activities", href: "/activities" },
    { name: "Spa", href: "/spa" },
    { name: "Dine", href: "/dine" },
]

export function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-[7px]">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
                <Link href="/" className="font-serif text-2xl tracking-widest uppercase z-50 mix-blend-difference text-primary">
                    Veer Farmhouse
                </Link>

                {/* Nav Toggle Button */}
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className="z-50 p-2 hover:bg-secondary/20 rounded-full transition-colors group"
                >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: isNavOpen ? 90 : 0, opacity: isNavOpen ? 0 : 1 }}
                            transition={{ duration: 0.2 }}
                            className="absolute"
                        >
                            <Plus size={32} className="text-primary font-light" strokeWidth={1.5} />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: isNavOpen ? 0 : -90, opacity: isNavOpen ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute"
                        >
                            <Minus size={32} className="text-primary font-light" strokeWidth={1.5} />
                        </motion.div>
                    </div>
                </button>

                {/* Navigation Card Overlay */}
                <AnimatePresence>
                    {isNavOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="absolute top-1 right-2 w-[90vw] md:w-[400px] bg-[#D45D3A] rounded-[2rem] p-8 md:p-12 text-white shadow-2xl origin-top-right overflow-hidden"
                        >

                            <nav className="flex flex-col space-y-6 mb-12">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="font-serif text-2xl md:text-4xl block w-fit"
                                            onClick={() => setIsNavOpen(false)}
                                        >
                                            <TextRoll>{item.name}</TextRoll>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-6 border-t border-white/20 pt-8"
                            >
                                <Link
                                    href="/directions"
                                    className="flex items-center justify-between text-lg hover:opacity-80 transition-opacity group"
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <span>Get directions</span>
                                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <div className="h-[1px] bg-white/20" />

                                <Link
                                    href="/contact"
                                    className="flex items-center justify-between text-lg hover:opacity-80 transition-opacity group"
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <span>Contact us</span>
                                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <div className="h-[1px] bg-white/20" />

                                <div className="flex gap-4 pt-4">
                                    <a href="#" className="p-2 border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="p-2 border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                </div>

                                <p className="text-white/60 text-xs mt-8">
                                    © {new Date().getFullYear()} Veer Farmhouse.
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
