import Image from "next/image";
import ProjectTechBadge from "./ProjectTechBadge";
// import SliderImage from "./SliderImage";

type ProjectSliderProps = {
    showSlide: boolean;
    toggleSlider: () => void;
    name: string;
    subtitle: string;
    projectUrl: string;
    github: string;
    description: string;
    technical: string;
    technologyBadge: string[];
    exampleImages: string;
};

export default function ProjectSlider({ showSlide, toggleSlider, name, subtitle, projectUrl, github, description, technical, technologyBadge, exampleImages }: ProjectSliderProps) {
    return (
        <>

            {/* Footer positioning when expanded - adjust both padding-y and calculated top to adjust footer height and vertical spacing*/}
            <div className={`absolute text-[#E7E7E7] w-full z-50 bottom-0 transition-[top] ease-in-out duration-500 ${showSlide ? "top-0 py-3" : "top-[calc(100%-88px)] py-3"}`}>
                <div className="bg-[#1B1A1F] h-full overflow-hidden rounded-t-lg">

                    {/* Wrapper for footer head - project name, subtitle, github, and expand button */}
                    <div className="flex flex-col justify-center self-center gap-0.5 h-[67.5px] px-5 sm:px-7">

                        {/* Top footer container - name, github, and expand button */}
                        <div className="flex justify-between">
                            <a
                                href={projectUrl}
                                title="Visit live site"
                                target="_blank"
                                className="group flex flex-row w-auto gap-1.5 tracking-wide font-medium hover:text-white/50 duration-100"
                            >

                                {name}

                                <Image
                                    src="/external-link.svg"
                                    alt="Open external link icon"
                                    width={100}
                                    height={100}
                                    priority={true}
                                    className="w-4 xl:w-5 group-hover:brightness-[.5] duration-100"
                                />
                            </a>

                            <div className="flex gap-6">

                                {/* Github icon */}
                                {github && (
                                    <a
                                        href={github}
                                        title="View source code"
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
                                    title="View project details"
                                    aria-label={showSlide ? "Hide project card footer" : "Show project card footer"}
                                    type="button"
                                    aria-expanded={showSlide}
                                    className="group flex justify-center cursor-pointer border-2 border-[#E7E7E7] rounded-[4px] w-6 h-[23.5px] hover:bg-[#E7E7E7] duration-100">
                                    <span aria-hidden="true" className={`caret self-center transition-transform duration-700 ${showSlide ? "transform rotate-180" : ""}`}></span>
                                </button>
                            </div>
                        </div>

                        {/* Bottom footer container - Subtitle */}
                        <div className="text-sm text-[#A1A1AA]">
                            {subtitle}
                        </div>
                    </div>

                    {/* Divider between footer head and slider content */}
                    {/* <div className="border-t-[1.5px] border-white/10 mx-5 sm:mx-7"></div> */}

                    {/* Slider main content */}
                    <div className="custom-scrollbar overflow-y-auto h-[calc(100%-67.5px)] px-5 sm:px-7 py-7 xs:py-10">

                        <div className={`flex flex-col gap-7 lg:gap-10 transition-opacity duration-700 ${showSlide ? "opacity-100" : "opacity-0"}`}>

                            {/* Map languages and framework badges */}
                            <div className="flex flex-wrap justify-start self-center w-full gap-4">
                                {technologyBadge.map((label, index) => (
                                    <ProjectTechBadge key={index} label={label} />
                                ))}
                            </div>

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

                            {/* Example images if applicable */}
                            {/* <SliderImage exampleImages={exampleImages} /> */}

                        </div>

                    </div>
                </div>

            </div>


        </>
    );
}
