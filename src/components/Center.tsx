import Banner from "./Banner";
import ProjectCard from "./ProjectCard";
import SkillsCarousel from "./SkillsCarousel";

export default function Center() {
    return (
        <div className="flex flex-col items-center w-full h-fit gap-20 sm:gap-24 lg:gap-32 px-5 lg:px-14 py-8 sm:py-20 lg:py-36 xl:py-44">
            < Banner />
            < SkillsCarousel isMobile={false} />
            < ProjectCard />
        </div>
    );
}
