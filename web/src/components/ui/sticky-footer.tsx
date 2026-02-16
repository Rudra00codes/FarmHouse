"use client"

import React, { useEffect, useRef, useState } from "react"

interface StickyFooterProps {
    children: React.ReactNode
    footer: React.ReactNode
}

export function StickyFooter({ children, footer }: StickyFooterProps) {
    const footerRef = useRef<HTMLDivElement>(null)
    const [footerHeight, setFooterHeight] = useState(0)

    useEffect(() => {
        if (!footerRef.current) return

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                // Use borderBoxSize for full visual height including borders, with contentRect fallback
                setFooterHeight(entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height)
            }
        })
        observer.observe(footerRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div className="relative">
            {/* Main Content Wrapper - Content sits on top */}
            <div className="relative z-10 bg-white dark:bg-black shadow-xl">
                {children}
            </div>

            {/* Spacer - Creates the scrollable "hole" for the footer to be revealed */}
            <div style={{ height: footerHeight }} className="relative z-0" />

            {/* Footer Wrapper - Fixed at bottom, behind content */}
            <div
                ref={footerRef}
                className="fixed bottom-0 left-0 w-full z-0"
            >
                {footer}
            </div>
        </div>
    )
}
