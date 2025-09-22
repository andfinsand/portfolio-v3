'use client'

import { useEffect } from 'react';

export default function Banner() {
    useEffect(() => {

        // Background parallax effect
        document.addEventListener('scroll', function () {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('banner');
            let speed = 0.2;

            if (parallaxElement) {
                parallaxElement.style.backgroundPosition = `center ${-scrollPosition * speed}px`;
            }
        });

        return () => {
            document.removeEventListener('scroll', function () { });
        };
    }, []);

    return (
        <>
            <div id='banner' className='flex justify-center rounded-3xl w-full max-w-[1200px] h-[470px] lg:h-[610px]'>

                {/* Quote container */}
                <div className='flex justify-center mr-56 lg:mr-72'>
                    {/* Vertical text - requires wrapper with rotation for fade in(right) animation */}
                    <div className='self-center -rotate-90 h-fit'>
                        <div
                            // data-aos='fade-right'
                            data-aos-duration='700'
                            data-aos-once='true'
                            data-aos-anchor='#trigger-animation'
                            data-aos-anchor-placement='bottom-bottom' /* Triggers animation when bottom of div (first 'bottom') reaches bottom of screen (second 'bottom') */
                            className='self-center drop-shadow-[0_0_4px_rgba(231,231,231,.6)] text-[#0A0A0A] font-bold text-7xl lg:text-8xl mt-[326px] lg:mt-[426px]'
                        >
                            CRAFTING
                        </div>
                    </div>

                    {/* Content container */}
                    <div
                        id='trigger-animation' /* Trigger point for all animations */
                        // data-aos='fade-down'
                        data-aos-duration='700'
                        data-aos-once='true'
                        data-aos-anchor='#trigger-animation'
                        data-aos-anchor-placement='bottom-bottom'
                        className='overflow-hidden z-10 bg-[#0A0A0A] drop-shadow-[2px_4px_1px_rgba(150,150,150,.1)] w-[315px] lg:w-[400px] h-[359px] lg:h-[470px] rounded-br-[260px] lg:rounded-br-[300px]'
                    >
                        <div className='flex self-center h-full'>
                            <div className='flex flex-col self-center text-[#E7E7E7] gap-2.5 lg:gap-4 ml-7 lg:ml-9 mb-5 lg:mb-0'>
                                {/* Content */}
                                <div
                                    // data-aos='reveal-text'
                                    data-aos-once='true'
                                    data-aos-anchor='#trigger-animation'
                                    data-aos-anchor-placement='bottom-bottom'
                                    className='reveal-delay-1 text-[#888888] font-roboto-condensed text-xl lg:text-2xl'
                                >
                                    today's
                                </div>
                                <div
                                    // data-aos='reveal-text'
                                    data-aos-once='true'
                                    data-aos-anchor='#trigger-animation'
                                    data-aos-anchor-placement='bottom-bottom'
                                    className='reveal-delay-2 font-roboto-condensed font-medium leading-[2.8rem] lg:leading-[3.5rem] text-[45px] lg:text-6xl'>DIGITAL</div>
                                <div
                                    // data-aos='reveal-text'
                                    data-aos-once='true'
                                    data-aos-anchor='#trigger-animation'
                                    data-aos-anchor-placement='bottom-bottom'
                                    className='reveal-delay-2 font-roboto-condensed font-medium leading-[2.8rem] lg:leading-[3.5rem] text-[45px] lg:text-6xl'>SOLUTIONS</div>
                                <div
                                    // data-aos='reveal-text'
                                    data-aos-once='true'
                                    data-aos-anchor='#trigger-animation'
                                    data-aos-anchor-placement='bottom-bottom'
                                    className='reveal-delay-3 tracking-tight text-4xl font-semibold text-[#E7E7E7] text-[47px] lg:text-[55px]'>
                                    <span className='gradient-text-reverse'>
                                        20
                                    </span>
                                    25
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
