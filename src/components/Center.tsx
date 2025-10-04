"use client"

import Image from "next/image";
import Banner from "./Banner";
import SkillsCarousel from "./SkillsCarousel";
import ProjectCard from "./ProjectCard";
import About from "./About";
import { projectsData } from "../data/projects";

export default function Center() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col items-center w-full h-fit gap-16 sm:gap-24 lg:gap-32 px-5 lg:px-14 pb-8 sm:pb-10 pt-2 sm:pt-20 lg:pt-36 xl:pt-40">
            < Banner />
            < SkillsCarousel />

            {/* Projects Section */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full max-w-[1200px]">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        subtitle={project.subtitle}
                        thumbnail={project.thumbnail}
                        demo={project.demo}
                        projectUrl={project.projectUrl}
                        github={project.github}
                        description={project.description}
                        technical={project.technical}
                        technologyBadge={project.technologyBadge}
                        exampleImages={project.exampleImages}
                    />
                ))}
            </div>
            <About />

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="group flex flex-col items-center gap-2 cursor-pointer"
                aria-label="Back to top"
            >
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/5 transition-all duration-200 group-hover:bg-white/10 group-hover:-translate-y-1.5">
                    <Image
                        src="/icon-chevron-double-up.svg"
                        alt="Back to top icon"
                        width={32}
                        height={32}
                        className="w-7 h-7 opacity-70 group-hover:opacity-100 duration-200"
                    />
                </div>
                <span className="text-sm text-[#E7E7E7]/70 group-hover:text-[#E7E7E7] duration-200">Back to Top</span>
            </button>
        </div>
    );
}
