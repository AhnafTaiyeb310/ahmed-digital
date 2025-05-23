import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

function PlayCursorEffect({ src, height = 'h-[25dvh]', className = '', ...videoProps }) {
    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        if (isHovering && cursorRef.current) {
            gsap.to(cursorRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'elastic.out(1, 0.3)',
            });
        }
        return () => {
            gsap.killTweensOf(cursorRef.current);
        };
    }, [isHovering]);

    const handleMouseMove = (e) => {
        if (cursorRef.current) {
            // Position cursor at mouse coordinates, offset to center the circle
            const x = e.clientX - 32; // Adjust for w-16 (64px)
            const y = e.clientY - 32; // Adjust for h-16
            gsap.set(cursorRef.current, {
                x,
                y,
                xPercent: 0,
                yPercent: 0,
            });
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        document.addEventListener('mousemove', handleMouseMove);
        if (videoRef.current) {
            videoRef.current.classList.add('cursor-none');
        }
    };

    const handleMouseLeave = () => {
        gsap.to(cursorRef.current, {
            opacity: 0,
            scale: 0,
            duration: 0.6,
            ease: 'expo.out',
            onComplete: () => {
                setIsHovering(false);
                document.removeEventListener('mousemove', handleMouseMove);
                if (videoRef.current) {
                    videoRef.current.classList.remove('cursor-none');
                }
            },
        });
    };

    // Cleanup listener on unmount
    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative">
            <div
                className={`rounded-4xl overflow-hidden cursor-none ${height} ${className}`}
                ref={videoRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video
                    className="h-full w-full object-cover rounded-xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    {...videoProps}
                    src={src}
                ></video>
            </div>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-amber-300 rounded-full flex items-center justify-center text-dark-black text-xs sm:text-sm md:text-base font-anak-paud pointer-events-none opacity-0 scale-0 z-50"
            >
                Play Video
            </div>
        </div>
    );
}

PlayCursorEffect.propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.string,
    className: PropTypes.string,
};

export default PlayCursorEffect;