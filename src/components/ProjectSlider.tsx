import Image from "next/image";
import TechnologyBubble from "./TechnologyBubble";
// import SliderImage from "./SliderImage";

type ProjectSliderProps = {
    showSlide: boolean;
    toggleSlider: () => void;
    name: string;
    projectUrl: string;
    github: string;
    description: string;
    technical: string;
    technologyLabel: string[];
    exampleImages: string;
};

export default function ProjectSlider({ showSlide, toggleSlider, name, projectUrl, github, description, technical, technologyLabel, exampleImages }: ProjectSliderProps) {
    return (
        <>

            {/* Footer positioning when expanded */}
            <div className={`absolute text-[#E7E7E7] w-full z-50 bottom-0 transition-[top] ease-in-out duration-500 ${showSlide ? "top-0" : "top-[calc(100%-67.5px)]"}`}>
                <div className="bg-[#1B1A1F] h-full overflow-hidden rounded-t-lg">

                    {/* Wrapper for footer head - project name, github, and button */}
                    <div className="flex justify-between items-center h-[67.5px] px-5 sm:px-7">

                        {/* Project name */}
                        <a
                            href={projectUrl}
                            target="_blank"
                            className="tracking-wide font-medium hover:text-white/50 duration-100"
                        >
                            {name}
                        </a>

                        <div className="flex gap-6">

                            {/* Github icon */}
                            {github && (
                                <a
                                    href={github}
                                    target="_blank"
                                >
                                    <Image
                                        src="/github-project.svg"
                                        alt="Github logo"
                                        width={100}
                                        height={100}
                                        className="w-6 hover:brightness-[.5] duration-100"
                                    />
                                </a>
                            )}

                            {/* Info button to display project slide */}
                            <button
                                onClick={toggleSlider}
                                aria-label={showSlide ? "Hide project card footer" : "Show project card footer"}
                                type="button"
                                aria-expanded={showSlide}
                                className="group flex justify-center cursor-pointer border-2 border-[#E7E7E7] rounded-[4px] w-6 h-[23.5px] hover:bg-[#E7E7E7] duration-100">
                                <span aria-hidden="true" className={`caret self-center transition-transform duration-700 ${showSlide ? "transform rotate-180" : ""}`}></span>
                            </button>
                        </div>
                    </div>

                    {/* Divider between footer head and slider content */}
                    {/* <div className="border-t-[1.5px] border-white/10 mx-5 sm:mx-7"></div> */}

                    {/* Slider main content */}
                    <div className="custom-scrollbar overflow-y-auto h-[calc(100%-67.5px)] px-5 sm:px-7 py-7 xs:py-10">

                        <div className={`flex flex-col gap-7 xs:gap-10 lg:gap-12 transition-opacity duration-700 ${showSlide ? "opacity-100" : "opacity-0"}`}>
                            {/* Description */}
                            <div className="flex flex-col gap-5">
                                <div className="font-semibold">Description</div>
                                <div className="leading-normal text-white/80 text-sm">{description}</div>
                            </div>

                            {/* Technical */}
                            <div className="flex flex-col gap-5">
                                <div className="font-semibold">Technical</div>
                                <div className="leading-normal text-white/80 text-sm">{technical}</div>
                            </div>

                            {/* Map languages and frameworks */}
                            <div className="flex flex-wrap justify-around self-center w-full text-white text-sm gap-x-2 gap-y-4 xs:justify-between">
                                {/* {technologyLabel.map((label, index) => (
                            <TechnologyBubble key={index} label={label} />
                        ))} */}
                            </div>

                            {/* Example images if applicable */}
                            {/* <SliderImage exampleImages={exampleImages} /> */}

                        </div>

                    </div>
                </div>

            </div>


        </>
    );
}
