import { ContactForm } from "@/components/modules/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="uppercase tracking-widest text-sm text-primary/60 font-medium block mb-4">
                            Get in Touch
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                            Start Your Journey
                        </h1>
                        <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                            Whether you have a question about our amenities, want to plan a private event, or are ready to book your stay, our team is here to help.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-1 space-y-8">
                            <div>
                                <h3 className="font-serif text-xl mb-2 text-primary">Location</h3>
                                <p className="text-primary/70">
                                    CRX2+GX4, Sitarpur<br />
                                    Punjab 140501
                                </p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-2 text-primary">Contact</h3>
                                <p className="text-primary/70">
                                    <a href="mailto:booking@veerfarmhouse.com" className="hover:underline">booking@veerfarmhouse.com</a><br />
                                    <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
                                </p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-2 text-primary">Check-in / Check-out</h3>
                                <p className="text-primary/70">
                                    Check-in: 2:00 PM<br />
                                    Check-out: 11:00 AM
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
