import { BookingCalendar } from "@/components/modules/BookingCalendar";

export default function BookingPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-background text-center">
            <div className="container mx-auto px-6">
                <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                    Reserve Your Sanctuary
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                    Select your dates below to check availability.
                </p>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
                    <div className="bg-secondary/10 p-8 rounded-2xl">
                        <h3 className="font-serif text-2xl text-primary mb-4">Pricing</h3>
                        <ul className="space-y-3 text-primary/80">
                            <li className="flex justify-between">
                                <span>Nightly Stay (up to 4 people)</span>
                                <span className="font-semibold">₹10,000</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Additional Guests</span>
                                <span className="font-semibold">₹2,000 / person</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Party Booking</span>
                                <span className="font-semibold">₹15,000</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-secondary/10 p-8 rounded-2xl">
                        <h3 className="font-serif text-2xl text-primary mb-4">Policies</h3>
                        <ul className="space-y-3 text-primary/80 text-sm">
                            <li>• <strong>Cancellation:</strong> 1 week prior for parties to avoid charges.</li>
                            <li>• <strong>Late Cancellation:</strong> Booking & cancellation on same day forfeits 50%.</li>
                            <li>• <strong>Security Deposit:</strong> Refundable within 7 days post-inspection.</li>
                            <li>• <strong>Payment:</strong> Full advance payment required (Cash/UPI).</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center">
                    <BookingCalendar />
                </div>
            </div>
        </main>
    );
}
