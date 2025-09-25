"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ProjectSlider from "./ProjectSlider"

type ProjectCardProps = {
    name: string;
    subtitle: string;
    thumbnail: string;
    demo: string;
    projectUrl: string;
    github: string;
    description: string;
    technical: string;
    technologyLabel: string[];
    exampleImages: string;
};

export default function ProjectCard({ name, subtitle, thumbnail, demo, projectUrl, github, description, technical, technologyLabel, exampleImages }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<any>(null);
    const [showSlide, setShowSlide] = useState<boolean>(false);
    const [showVideo, setShowVideo] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect device type, mobile vs desktop
    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    }, []);

    // Display slide
    const toggleSlider = () => {
        setShowSlide(!showSlide);
    }

    // Play video on hover and pause when hover is stopped
    const handleMouseEnter = () => {
        setIsHovered(true);
        setShowVideo(true);
        if (videoRef.current && !isVideoPlaying) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (!showSlide) {
            setShowVideo(false);
        }
        if (videoRef.current && isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
    };

    // Opacity styling for video on hover
    const videoStyle = {
        opacity: showVideo ? 1 : 0,
        transition: "opacity 100ms",
        zIndex: showVideo ? 2 : 1,
        height: 'calc(80% + 16px)',
    };

    return (
        <>
            {/* Consider 320px or 358px height for modern appearance */}
            <div className="relative flex justify-center overflow-hidden rounded-3xl bg-[#1B1A1F] w-full h-[350px] md:h-[435px] p-2 sm:p-4">

                {/* Thumbnail and video layer */}
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="group relative w-full h-full"
                >

                    {/* Link to project layer */}
                    <a
                        href={projectUrl}
                        target="_blank"
                        className="flex w-full h-[85%]"
                    >

                        {/* Video */}
                        {!isMobile && (
                            <video
                                loop
                                muted
                                preload="metadata"
                                ref={videoRef}
                                style={videoStyle}
                                className="absolute inset-0 object-cover rounded-2xl w-full h-[85%]"
                            >
                                <source
                                    src={demo}
                                    type="video/mp4"
                                />
                            </video>
                        )}

                        {/* Image */}
                        <Image
                            src={thumbnail}
                            alt="Project logo"
                            width={1200}
                            height={1029}
                            className="absolute inset-0 object-cover rounded-2xl w-full"
                            style={{ height: 'calc(80% + 16px)' }} /* Must calculate for parent padding */
                        />
                    </a>
                </div>

                {/* Project information slide */}
                <ProjectSlider
                    showSlide={showSlide}
                    toggleSlider={toggleSlider}
                    name={name}
                    subtitle={subtitle}
                    projectUrl={projectUrl}
                    github={github}
                    description={description}
                    technical={technical}
                    technologyLabel={technologyLabel}
                    exampleImages={exampleImages}
                />
            </div>
        </>
    );
}
