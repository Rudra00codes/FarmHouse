"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { Play, Plus } from "lucide-react";
import {
    VideoPlayer,
    VideoPlayerContent,
    VideoPlayerControlBar,
    VideoPlayerPlayButton,
    VideoPlayerTimeRange,
    VideoPlayerMuteButton,
} from "@/components/ui/video-player";

export function VideoTestimonial() {
    const [showVideoPopOver, setShowVideoPopOver] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    const SPRING = {
        mass: 0.1,
        stiffness: 100,
        damping: 10
    };

    const x = useSpring(0, SPRING);
    const y = useSpring(0, SPRING);
    const opacity = useSpring(0, SPRING);

    const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
        if (!containerRef.current) return;
        const bounds = containerRef.current.getBoundingClientRect();
        x.set(e.clientX - bounds.left - 50); // Center offset
        y.set(e.clientY - bounds.top - 50);  // Center offset
        opacity.set(1);
    };

    const handlePointerLeave = () => {
        opacity.set(0);
    };

    return (
        <section
            ref={containerRef}
            className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center cursor-none group"
            onMouseMove={handlePointerMove}
            onMouseLeave={handlePointerLeave}
            onClick={() => setShowVideoPopOver(true)}
        >
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-primary/20 z-10 pointer-events-none" />
            <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop)',
                }}
            />

            {/* Floating Play Button Cursor */}
            <motion.div
                style={{ x, y, opacity }}
                className="absolute top-0 left-0 z-30 pointer-events-none hidden md:flex"
            >
                <div className="bg-white/20 backdrop-blur-md rounded-full p-6 text-white mix-blend-difference">
                    <Play fill="white" className="w-8 h-8" />
                </div>
            </motion.div>

            {/* Mobile Static Play Button (shows when cursor logic is hidden) */}
            <div className="md:hidden z-30 bg-white/20 backdrop-blur-md rounded-full p-6 text-white mb-8">
                <Play fill="white" className="w-8 h-8" />
            </div>

            <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center pointer-events-none">
                <motion.blockquote
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-5xl mb-8 drop-shadow-lg"
                >
                    &quot;Awakening to harmonious bird tunes, delighting in the magic of
                    forest walks, and admiring the breathtaking spectacle of the cliffs.&quot;
                </motion.blockquote>

                <motion.cite
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-white/90 text-lg not-italic font-medium tracking-wide drop-shadow-md"
                >
                    Sarah Collins, Author of Brilliant Meadows.
                </motion.cite>
            </div>

            <AnimatePresence>
                {showVideoPopOver && (
                    <VideoModal onClose={() => setShowVideoPopOver(false)} />
                )}
            </AnimatePresence>
        </section>
    );
}

const VideoModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center cursor-default">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            />
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <span
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 cursor-pointer bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                    <Plus className="w-6 h-6 rotate-45 text-white" />
                </span>

                <VideoPlayer style={{ width: "100%", height: "100%" }}>
                    <VideoPlayerContent
                        // Using a sample video since the original showreel is not available
                        src="https://www.shutterstock.com/shutterstock/videos/3801241323/preview/stock-footage-sunset-country-house-in-betim-minas-gerais-brazil-stunning-countryside-life-landscape-viewed-from.webm"
                        autoPlay
                        slot="media"
                        className="w-full h-full object-cover"
                    />
                    <VideoPlayerControlBar className="absolute bottom-0 left-0 w-full flex items-center justify-center px-4 py-4 md:px-8 md:py-6 bg-gradient-to-t from-black/80 to-transparent">
                        <VideoPlayerPlayButton className="text-white hover:text-primary transition-colors h-8 w-8" />
                        <VideoPlayerTimeRange className="mx-4 flex-1 text-primary accent-primary" />
                        <VideoPlayerMuteButton className="text-white hover:text-primary transition-colors h-6 w-6" />
                    </VideoPlayerControlBar>
                </VideoPlayer>
            </motion.div>
        </div>
    );
};
