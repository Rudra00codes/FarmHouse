"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-primary text-secondary py-24 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center mb-24 space-y-8">
                    <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl">
                        Your peaceful sanctuary awaits you.
                    </h2>
                    <p className="text-secondary/70 text-lg max-w-2xl">
                        Your presence is earnestly anticipated at Harbour with our most heart-felt greetings. We look forward to your visit.
                    </p>
                    <Link href="/book">
                        <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-8 py-6 rounded-none">
                            Book a night
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-secondary/20 pt-16">
                    <div className="space-y-6">
                        <h3 className="font-serif text-xl mb-4">Estate</h3>
                        <ul className="space-y-3 opacity-70">
                            <li>100 acre open land</li>
                            <li>Cliffside views</li>
                            <li>Free parking</li>
                            <li>Concierge</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-serif text-xl mb-4">Activities</h3>
                        <ul className="space-y-3 opacity-70">
                            <li>Fishing</li>
                            <li>Kayaking</li>
                            <li>Archery</li>
                            <li>Golf</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-serif text-xl mb-4">Entertainment</h3>
                        <ul className="space-y-3 opacity-70">
                            <li>Outdoor cinema</li>
                            <li>Nursery</li>
                            <li>Child-friendly fun</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-serif text-xl mb-4">Leisure</h3>
                        <ul className="space-y-3 opacity-70">
                            <li>Spa</li>
                            <li>Heated pool</li>
                            <li>Outdoor pool</li>
                            <li>Gym</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-secondary/20 opacity-60 text-sm">
                    <div className="flex flex-col md:flex-row gap-8 items-center mb-4 md:mb-0">
                        <p>Harbour Estate, 64 Robin Hood&apos;s Bay, Yorkshire YO22 4PB</p>
                        <Link href="#" className="underline">Get directions</Link>
                    </div>

                    <div className="flex gap-8">
                        <Link href="/terms">Terms</Link>
                        <Link href="/privacy">Privacy policy</Link>
                        <p>© {new Date().getFullYear()} Veer Farmhouse.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
