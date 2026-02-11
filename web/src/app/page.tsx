import { Hero } from "@/components/modules/Hero";
import { Marquee } from "@/components/modules/Marquee";
import { IntroSection } from "@/components/modules/IntroSection";
import { CardStack } from "@/components/modules/CardStack";
import { RoomShowcase } from "@/components/modules/RoomShowcase";
import { DiningSection } from "@/components/modules/DiningSection";
import { VideoTestimonial } from "@/components/modules/VideoTestimonial";
import { FAQ } from "@/components/modules/FAQ";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col relative">
            <ProgressiveBlur
                position="top"
                className="fixed z-40"
                backgroundColor="#a2a2a2a9"
                blurAmount="6px"
            />
            <ProgressiveBlur
                position="bottom"
                className="fixed z-40"
                backgroundColor="#c1c1c1a3"
                blurAmount="6px"
            />
            <Hero />
            <Marquee />
            <IntroSection />
            <CardStack />
            <RoomShowcase />
            <DiningSection />
            <VideoTestimonial />
            <FAQ />
        </main>
    );
}
