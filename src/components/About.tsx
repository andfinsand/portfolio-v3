"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "aos/dist/aos.css";

export default function About() {
    const titles = ["Web Developer", "Software Engineer", "UI/UX Designer"];
    const [index, setIndex] = useState(0);

    // Cycling professional titles
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => (index + 1) % titles.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [titles.length]);

    // Background parallax effect
    // useEffect(() => {
    //     document.addEventListener("scroll", function () {
    //         let scrollPosition = window.scrollY;
    //         let parallaxElement = document.getElementById("about");
    //         let speed = 0.5;

    //         if (parallaxElement) {
    //             parallaxElement.style.backgroundPosition = `center ${-scrollPosition * speed}px`;
    //         }
    //     });

    //     return () => {
    //         document.removeEventListener("scroll", function () { });
    //     };
    // }, []);

    return (
        <>
            <div id="about" className="relative flex justify-center items-center overflow-hidden border border-white/5 rounded-3xl max-w-[1200px] w-full h-full md:px-12 py-12 md:py-16">

                {/* About container including headshot */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full text-[#E7E7E7] gap-10 md:gap-12 px-5 lg:px-12">

                    {/* Content - text container and socials */}
                    <div className="flex flex-col order-2 md:order-1 gap-8 max-w-[600px] w-full ">

                        {/* Text container */}
                        <div className="flex flex-col gap-6">

                            {/* Intro - fades in first */}
                            <p
                                data-aos="fade-down"
                                data-aos-duration="500"
                                data-aos-once="true"
                                data-aos-delay="100"
                                className="text-xs tracking-[0.2em] text-purple-300/80 font-medium uppercase"
                            >
                                Hello there, welcome to my site
                            </p>

                            {/* Name and title - cascade after intro */}
                            <div className="flex flex-col gap-1">
                                <h1
                                    data-aos="fade-right"
                                    data-aos-duration="600"
                                    data-aos-once="true"
                                    data-aos-delay="200"
                                    className="text-4xl md:text-5xl lg:text-5xl font-light tracking-tight"
                                >
                                    I&apos;m Andrew
                                </h1>
                                <h2
                                    data-aos="fade-right"
                                    data-aos-duration="600"
                                    data-aos-once="true"
                                    data-aos-delay="350"
                                    className="text-2xl md:text-3xl lg:text-3xl font-light"
                                >
                                    A <span className={`animated-text-${index} gradient-text-reverse font-semibold`}>{titles[index]}</span>
                                </h2>
                            </div>

                            {/* Main description */}
                            <p
                                data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-once="true"
                                data-aos-delay="500"
                                className="text-base leading-relaxed text-white/80 max-w-[580px] lg:max-w-[580px]"
                            >
                                I love problem solving, building, and being creative. Contact me for web development services, fullstack projects, or design ideas.
                            </p>

                            <p
                                data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-once="true"
                                data-aos-delay="600"
                                className="text-base text-white/80"
                            >
                                Cheers!
                            </p>
                        </div>

                        {/* Socials - animate last */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-once="true"
                            data-aos-delay="700"
                            className="flex gap-8 mt-2"
                        >
                            {/* Linkedin */}
                            <a
                                href="https://www.linkedin.com/in/andrewfinsand/"
                                target="_blank"
                                className="group flex justify-center"

                            >
                                <Image
                                    src="/linkedin.svg"
                                    alt="Linkedin icon"
                                    title="View LinkedIn profile"
                                    width={100}
                                    height={100}
                                    priority={true}
                                    className="self-center w-5.5 h-5.5"
                                />
                            </a>

                            {/* Github */}
                            <a
                                href="https://github.com/andfinsand"
                                target="_blank"
                                className="group flex justify-center"
                            >
                                <Image
                                    src="/github.svg"
                                    alt="Github icon"
                                    title="View GitHub profile"
                                    width={100}
                                    height={100}
                                    priority={true}
                                    className="self-center w-5.5 h-5.5"
                                />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:andfinsand@gmail.com"
                                title="Contact me"
                                className="group flex justify-center"

                            >
                                <Image
                                    src="/email.svg"
                                    alt="Email icon"
                                    width={100}
                                    height={100}
                                    priority={true}
                                    className="self-center w-5.5 h-5.5"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Headshot */}
                    <div
                        // data-aos="fade-left"
                        data-aos-duration="700"
                        data-aos-once="true"
                        data-aos-delay="300"
                        className="order-1 md:order-2 flex-shrink-0 md:absolute -bottom-8 md:-right-8 xl:right-8"
                    >
                        <div className="relative w-[250px] h-[250px] md:w-[480px] md:h-[480px]">
                            {/* Gradient background circle */}
                            <div
                                className="absolute block md:hidden inset-0 rounded-full bg-gradient-to-br from-[#0a0a0a] from-5% to-[#08060D] to-55% border border-white/5"

                            />
                            {/* Headshot image */}
                            <Image
                                src="/headshot.png"
                                alt="Headshot of Andrew Finsand"
                                width={1931}
                                height={1931}
                                quality={95}
                                sizes="900px"
                                className="relative rounded-full md:rounded-none md:rounded-br-3xl xl:rounded-br-none w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content shift placeholder for headshot */}
                    <div className="hidden md:flex order-1 md:w-[65%] lg:w-[45%]">
                    </div>

                </div>
            </div>
        </>
    );
}
