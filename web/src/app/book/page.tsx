import { BookingCalendar } from "@/components/modules/BookingCalendar";

export default function BookingPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-background text-center">
            <div className="container mx-auto px-6">
                <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                    Reserve Your Sanctuary
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                    Check availability for our rooms and suites. We look forward to hosting you.
                </p>

                <div className="flex justify-center">
                    <BookingCalendar />
                </div>
            </div>
        </main>
    );
}
