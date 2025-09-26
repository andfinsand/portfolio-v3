import Banner from "./Banner";
import ProjectCard from "./ProjectCard";
import SkillsCarousel from "./SkillsCarousel";
import { projectsData } from "../data/projects";

export default function Center() {
    return (
        <div className="flex flex-col items-center w-full h-fit gap-16 sm:gap-24 lg:gap-32 px-5 lg:px-14 py-6 sm:py-20 lg:py-36 xl:py-40">
            < Banner />
            < SkillsCarousel isMobile={false} />
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
        </div>
    );
}
