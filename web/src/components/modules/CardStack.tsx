"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { StickyCard_001 } from "@/components/ui/card-stack";

const projects = [
    {
        title: "Weddings & Events",
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Eco-Friendly Living",
        src: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Organic Farming",
        src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Wellness Retreats",
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Luxury Accommodation",
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop",
    },
];

export function CardStack() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={container}
            className="relative flex w-full flex-col items-center justify-center pb-[20vh] pt-[10vh] bg-background"
        >
            <div className="mb-24 text-center px-6">
                <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
                    Experience the extraordinary
                </h2>
                <p className="text-primary/60 max-w-lg mx-auto">
                    Discover the unique features that make Veer Farmhouse a destination like no other.
                </p>
            </div>

            <div className="w-full">
                {projects.map((project, i) => {
                    const targetScale = Math.max(
                        0.8,
                        1 - (projects.length - i - 1) * 0.05,
                    );
                    return (
                        <StickyCard_001
                            key={`p_${i}`}
                            i={i}
                            {...project}
                            progress={scrollYProgress}
                            range={[i * 0.2, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}
