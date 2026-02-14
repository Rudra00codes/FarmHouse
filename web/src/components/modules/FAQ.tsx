"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "What is the guest capacity?",
        answer: "Our farmhouse sleeps 4 people comfortably in the bedrooms. We can accommodate up to 8 people sitting in the hall, and up to 25 people for parties, weddings, and events."
    },
    {
        question: "What are the check-in/out and quiet hours?",
        answer: "Quiet hours are strictly observed from 10:00 PM to 7:00 AM to ensure a peaceful environment. Please respect our neighbors by minimizing noise during these times. Loud music and fireworks are not permitted."
    },
    {
        question: "What are your policies on parties and smoking?",
        answer: "We welcome private parties and events! However, strictly no drugs or narcotics are allowed on the property. Smoking is permitted in designated outdoor areas only."
    },
    {
        question: "Is there a security deposit?",
        answer: "Yes, a security deposit is required upon booking. It is fully refundable within 7 days after your stay, subject to a post-departure inspection for any damages or losses."
    },
    {
        question: "Is Veer Farmhouse family-friendly?",
        answer: "Absolutely. We are ideal for families, couples, and private retreats. Enjoy our garden, pool, and spacious indoor areas for a memorable family get-together."
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
