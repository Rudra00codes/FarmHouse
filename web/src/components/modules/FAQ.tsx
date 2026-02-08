"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "Where can I purchase the Harbour template?",
        answer: "You can purchase the Harbour template directly from Milky Studio. Designed to showcase luxury and elegance, this Framer web template is perfect for creating stunning websites for destinations, retreats, and estates."
    },
    {
        question: "What types of rooms are available at Harbour?",
        answer: "Harbour offers a selection of luxurious rooms and suites, each designed to provide the ultimate comfort. Choose from cliffside rooms with panoramic coastal views, spacious suites with private terraces, or secluded estate rooms for added privacy."
    },
    {
        question: "What activities can I enjoy at Harbour?",
        answer: "Harbour is a haven for adventure and relaxation. Enjoy championship golf, scenic hiking trails across 100 acres of pristine land, a heated outdoor pool, and a state-of-the-art gym."
    },
    {
        question: "Are dining options available at Harbour?",
        answer: "Yes, Harbour boasts an exquisite dining experience with seasonal menus crafted from locally sourced ingredients. Enjoy your meals in our fine dining restaurant overlooking the coastline or savour casual bites by the pool."
    },
    {
        question: "Is Harbour family-friendly?",
        answer: "Absolutely. Harbour welcomes guests of all ages. Families can enjoy spacious accommodations, outdoor activities, and tailored spa treatments, ensuring a memorable experience for every guest."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 px-6 bg-secondary/10">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl text-primary">
                        Your questions, answered.
                    </h2>
                    <p className="text-primary/60 max-w-lg mx-auto">
                        We’re here to guide you in creating the perfect, stress-free escape. Explore our FAQs for all the details you need to plan your relaxing getaway.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden hover:shadow-sm transition-shadow">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <span className="font-serif text-xl md:text-2xl text-black pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "text-black/40 transition-transform duration-300 w-6 h-6 flex-shrink-0",
                                        openIndex === i && "rotate-180"
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 text-black/70 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
