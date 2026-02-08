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
                                    123 Farm Road<br />
                                    Countryside, State 12345
                                </p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-2 text-primary">Contact</h3>
                                <p className="text-primary/70">
                                    <a href="mailto:hello@farmhouse.com" className="hover:underline">hello@farmhouse.com</a><br />
                                    <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
                                </p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-2 text-primary">Hours</h3>
                                <p className="text-primary/70">
                                    Mon-Fri: 9am - 6pm<br />
                                    Sat-Sun: 10am - 4pm
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
