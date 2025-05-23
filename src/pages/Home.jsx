import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PlayCursorEffect from '../components/PlayCursorEffect';
import myVideo from '../assets/videos/5447276-uhd_3840_2160_24fps.mp4';
import SocialLinks from '../components/SocialLinks';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const brandRef = useRef(null);
    const videoRef = useRef(null); // Ref for video div
    const location = useLocation();

    useEffect(() => {
        // ScrollTrigger animation for h1
        gsap.to(brandRef.current, {
            scrollTrigger: {
                trigger: brandRef.current,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
                markers: true,
            },
            x: 100, // Slide right 100px as you scroll
        });

        // ScrollTrigger animation for video div
        gsap.fromTo(
            videoRef.current,
            { scale: 0.25 }, // Start at scale 0.25
            {
                scale: 1, // End at scale 1
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: 'top bottom', // Start when top of video hits bottom of viewport
                    end: 'top top', // End when top of video hits top of viewport
                    scrub: true, // Smoothly animate with scroll
                },
            }
        );

        gsap.fromTo(
            "h1",
            { opacity: 0, x: 0, translate:0},
            { opacity: 1, duration: 10, ease: "ease", }
        );


        // Refresh ScrollTrigger on mount or route change
        ScrollTrigger.refresh();

        // Handle dynamic content (e.g., images and videos)
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            img.onload = () => ScrollTrigger.refresh();
        });
        const videos = document.querySelectorAll('video');
        videos.forEach((video) => {
            video.onloadeddata = () => ScrollTrigger.refresh();
        });

        // Respect prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        }
    }, [location]);

    return (
        <>
            <div className="homepage bg-dark-black min-h-[100dvh] w-[100dvw] flex flex-col pt-12 sm:pt-16 md:pt-20">
                <PlayCursorEffect
                    ref={videoRef} // Add ref for animation
                    src={myVideo}
                    height="h-[45dvh]"
                    className="w-[100dvw] px-2 sm:px-4 md:px-6"
                    data-speed="0.9" // Slight parallax effect
                />
                <div className="flex-1 flex flex-col">
                    <div className="w-[100dvw] px-2 sm:px-4 md:px-6 flex items-center justify-between">
                        <h1
                            ref={brandRef}
                            className="text-3xl sm:text-4xl md:text-7xl text-white font-anak-paud pt-16 pl-6"
                            data-lag="0.2" // Subtle lag effect
                        >
                            Ahmed
                            <br />
                            <span className="text-xl sm:text-2xl md:text-3xl text-amber-300 pl-3">.</span>digital
                        </h1>
                        <div className="location-card pr-6" data-speed="1.1"> {/* Slightly faster parallax */}
                            <div className="location">
                                <small className="text-sm sm:text-[0.55rem] md:text-xs text-gray-500">Current Location</small>
                                <p className="text-md sm:text-xs md:text-base text-white italic">
                                    Dhaka <span className="md:text-lg">,</span>Bangladesh
                                </p>
                            </div>
                            <div className="social-icon">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-section bg-white min-h-[100dvh] w-[100dvw] flex flex-col pt-12 sm:pt-16 md:pt-20">
                <h1 className='text-3xl text-black font-anak-paud'>What WE DO? </h1>

            </div>
        </>
    );
}

export default Home;