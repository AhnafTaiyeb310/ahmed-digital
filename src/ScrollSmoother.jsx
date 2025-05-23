import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother'; // Adjust path to your ScrollSmoother file

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherProvider = ({ children }) => {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!wrapperRef.current || !contentRef.current) return;

        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 0.8, // Smoothness duration (seconds)
            effects: true, // Enable data-speed and data-lag
            normalizeScroll: true, // Handle mobile browser quirks
            smoothTouch: false, // Disable smooth scrolling on touch devices
        });

        // Refresh ScrollTrigger on mount
        ScrollTrigger.refresh();

        // Cleanup on unmount
        return () => {
            smoother.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div id="smooth-wrapper" ref={wrapperRef} role="region" aria-label="Scrollable content">
            <div id="smooth-content" ref={contentRef}>
                {children}
            </div>
        </div>
    );
};

export default ScrollSmootherProvider;