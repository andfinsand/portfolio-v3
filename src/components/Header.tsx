import Image from "next/image";

export default function Header() {
    return (
        <div className="header-animation flex flex-row justify-between absolute w-full z-50">

            {/* Logo */}
            <div>
                <Image
                    src="/af-logo-white-gradient.webp"
                    alt="Andrew Finsand logo"
                    width={437}
                    height={324}
                    priority={true}
                    className="w-8 sm:w-10 mx-5 sm:mx-7 xl:mx-9 my-7"
                />
            </div>

            {/* Socials info */}
            <div className="flex flex-row self-center gap-2 xl:gap-7 mx-5 sm:mx-7 xl:mx-9 my-7">

                {/* Linkedin */}
                <a
                    href="https://www.linkedin.com/in/andrewfinsand/"
                    target="_blank"
                    className="group flex justify-center w-[35px] h-[35px] hover:bg-[#E7E7E7] hover:rounded-full hover:p-2 duration-200"

                >
                    <Image
                        src="/linkedin.svg"
                        alt="Linkedin icon"
                        width={100}
                        height={100}
                        priority={true}
                        className="self-center brightness-[1] w-[16px] group-hover:brightness-0 transition-colors duration-200"
                    />
                </a>

                {/* Github */}
                <a
                    href="https://github.com/andfinsand"
                    target="_blank"
                    className="group flex justify-center w-[35px] h-[35px] hover:bg-[#E7E7E7] hover:rounded-full hover:p-1 duration-200"
                >
                    <Image
                        src="/github.svg"
                        alt="Github icon"
                        width={100}
                        height={100}
                        priority={true}
                        className="self-center brightness-[1] w-[16px] mr-0.5 group-hover:brightness-0 duration-200"
                    />
                </a>

                {/* Email */}
                <a
                    href="mailto:andfinsand@gmail.com"
                    className="group flex justify-center w-[35px] h-[35px] hover:bg-[#E7E7E7] hover:rounded-full hover:p-1 duration-200"

                >
                    <Image
                        src="/email.svg"
                        alt="Email icon"
                        width={100}
                        height={100}
                        priority={true}
                        className="self-center brightness-[1] w-[16px] group-hover:brightness-0 duration-200"
                    />
                </a>

                {/* Status Badge */}
                <div className="hidden sm:flex flex-row self-center items-center gap-2.5 h-8 xl:h-[35px] bg-[#2c2c2c] rounded-full px-4">
                    <div className="w-1.5 xl:w-2 h-1.5 xl:h-2 bg-[#01D008] rounded-full"></div>
                    <p className="text-[11px] xl:text-xs">Available for Work</p>
                </div>

            </div>
        </div>
    );
}
