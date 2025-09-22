import Banner from "./Banner";
import SkillsCarousel from "./SkillsCarousel";

export default function Center() {
    return (
        <div className="flex flex-col items-center w-full h-fit gap-36 px-5 lg:px-14 py-8 sm:py-20 lg:py-36 xl:py-44">
            < Banner />
            < SkillsCarousel />
        </div>
    );
}
