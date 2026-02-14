"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-primary text-secondary py-24 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center mb-24 space-y-8">
                    <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl">
                        Where rustic charm meets luxury resort living.
                    </h2>
                    <p className="text-secondary/70 text-lg max-w-2xl">
                        We look forward to welcoming you to Veer Farmhouse for your perfect staycation, celebration, or private retreat.
                    </p>
                    <Link href="/book">
                        <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-8 py-6 rounded-none">
                            Book a stay
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-secondary/20 pt-16">
                    <div className="space-y-6">
                        <h3 className="font-serif text-xl mb-4">The Farmhouse</h3>
                        <ul className="space-y-3 opacity-70">
                            <li>700 sq ft Property</li>
                            <li>2 Rooms + Hall</li>
                            <li>Garden & Pool</li>
                            <li>Free Parking</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-serif text-xl mb-4">Activities</h3>
                        <ul className="space-y-3 opacity-70">
                            <li>Swimming Pool</li>
                            <li>Shooting Range (Airsoft)</li>
                            <li>BBQ & Bonfire</li>
                            <li>Outdoor Lounge</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-serif text-xl mb-4">Amenities</h3>
                        <ul className="space-y-3 opacity-70">
                            <li>WiFi Network</li>
                            <li>Smart TV & BoomBox</li>
                            <li>Refrigerator & Microwave</li>
                            <li>CCTV Security</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-serif text-xl mb-4">Events</h3>
                        <ul className="space-y-3 opacity-70">
                            <li>Private Parties</li>
                            <li>Weddings</li>
                            <li>Corporate Retreats</li>
                            <li>Family Get-togethers</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-secondary/20 opacity-60 text-sm">
                    <div className="flex flex-col md:flex-row gap-8 items-center mb-4 md:mb-0">
                        <p>CRX2+GX4, Sitarpur, Punjab 140501</p>
                        <Link href="https://maps.google.com/?q=CRX2+GX4,+Sitarpur,+Punjab+140501" target="_blank" className="underline">Get directions</Link>
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
