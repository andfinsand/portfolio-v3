'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const parallaxSpeed = 0.4;
        const fadeOutDistance = 400;

        const handleScroll = () => {
            const element = parallaxRef.current;
            if (element) {
                const scrollY = window.scrollY;
                // Parallax animation
                const newYOffset = scrollY * parallaxSpeed;
                // Opacity
                const newOpacity = Math.max(0, 1 - scrollY / fadeOutDistance);

                window.requestAnimationFrame(() => {
                    element.style.setProperty('--scroll-offset', `${newYOffset}px`);
                    element.style.opacity = newOpacity.toString();
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='relative flex justify-center items-center h-screen w-full overflow-hidden [--offset:-6.5vh] sm:[--offset:-7.5vh] xl:[--offset:-8.5vh] 2xl:[--offset:-9.5vh] 3xl:[--offset:-10.5vh]'>

                {/* Background image */}
                <div id='background'></div>

                {/* Title */}
                <div
                    ref={parallaxRef}
                    className='parallax-container relative text-[#E7E7E7]'
                    style={{
                        transform: 'translateY(calc(var(--offset) + var(--scroll-offset, 0px)))',
                        willChange: 'transform, opacity' // performance optimization hint for the browser
                    }}
                >
                    <h1
                        // data-aos='fade-in'
                        // data-aos-delay='1200'
                        className='hero-h1 text-center drop-shadow-[0_0_2px_rgba(231,231,231,.5)] text-4xl sm:text-5xl xl:text-6xl mb-2 xl:mb-4'
                    >
                        ANDREW FINSAND
                    </h1>
                    <h2
                        // data-aos='fade-in'
                        // data-aos-delay='1200'
                        className='hero-h2 text-center font-extralight text-xl sm:text-2xl xl:text-3xl mb-8 xl:mb-10'
                    >
                        Software Developer
                    </h2>

                    {/* Resume */}
                    <div className='hero-button flex justify-center w-full'>
                        <a
                            href='resume.pdf'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='group flex border-1 xl:border-2 border-[#9b9b9b] rounded-full w-fit gap-1 px-4 py-2 hover:bg-white/15 hover:backdrop-blur-sm duration-200'

                        >
                            <Image
                                src='/external-link.svg'
                                alt='Resume icon'
                                width={100}
                                height={100}
                                priority={true}
                                className='w-4 xl:w-5'
                            />
                            <p className='text-xs xl:text-sm font-light'>View Resume</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
