"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [images, setImages] = useState<HTMLImageElement[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Scroll progress from 0 to 1
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Smooth "anti-gravity" spring effect
    // Damping: how quickly it settles (higher = less bounce)
    // Stiffness: how strong the pull is (higher = faster)
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.5,
        stiffness: 50,
        damping: 15,
        restDelta: 0.001
    })

    // Map scroll 0-1 to frame index 0-191
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, 191])

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const promises: Promise<HTMLImageElement | null>[] = []
            // Create array of 192 images
            // Naming convention: ezgif-frame-001.jpg (3 digits)
            for (let i = 1; i <= 192; i++) {
                promises.push(new Promise((resolve) => {
                    const img = new Image()
                    const paddedIndex = i.toString().padStart(3, '0')
                    img.src = `/hero-scroll-frames/ezgif-frame-${paddedIndex}.jpg`
                    img.onload = () => resolve(img)
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`)
                        resolve(null)
                    }
                }))
            }

            const results = await Promise.all(promises)
            const loadedImages = results.filter((img): img is HTMLImageElement => img !== null)

            setImages(loadedImages)
            setIsLoaded(true)
        }

        loadImages()
    }, [])

    // Render loop
    useEffect(() => {
        if (!isLoaded || images.length === 0) return

        const render = () => {
            const canvas = canvasRef.current
            if (!canvas) return

            const ctx = canvas.getContext("2d")
            if (!ctx) return

            // Get current frame index (rounded)
            let currentIndex = Math.round(frameIndex.get())
            // Clamp index
            if (currentIndex < 0) currentIndex = 0
            if (currentIndex > images.length - 1) currentIndex = images.length - 1

            // Set canvas size to match window
            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
            }

            const img = images[currentIndex]
            if (!img) return

            // "Cover" fit logic
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
            const x = (canvas.width / 2) - (img.width / 2) * scale
            const y = (canvas.height / 2) - (img.height / 2) * scale

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale)

            requestAnimationFrame(render)
        }

        const animationId = requestAnimationFrame(render)
        return () => cancelAnimationFrame(animationId)
    }, [isLoaded, images, frameIndex])


    return (
        // 400vh height to allow scrolling through the animation
        <section ref={containerRef} className="relative h-[400vh] w-full">

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!isLoaded && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
                        <p className="text-white font-serif tracking-widest animate-pulse">LOADING EXPERIENCE...</p>
                    </div>
                )}

                {/* Background Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-0 w-full h-full object-cover"
                />

                {/* Overlay Gradient for text readability */}
                <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

                {/* Text Content - Fades out as you scroll deep into the animation */}
                <motion.div
                    className="relative z-20 h-full container mx-auto px-6 flex flex-col items-center justify-center text-center text-white pb-32"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="uppercase tracking-[0.2em] text-sm md:text-base mb-4 block">
                            Welcome to Veer Farmhouse
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
                            Where rustic charm <br />
                            <span className="italic">meets luxury resort living</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-8 font-light">
                            Distinctive bamboo and wood luxury design with handcrafted royal furniture. Ideal for staycations, celebrations, and private retreats.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
                            <Button variant="harbour" size="lg" className="bg-accent hover:bg-accent/90 border-none">
                                Book a Stay
                            </Button>
                            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                                Explore Amenities
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
