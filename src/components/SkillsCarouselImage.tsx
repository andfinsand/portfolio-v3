import Image from "next/image";

type SkillsCarouselImageProps = {
    thumbnail: string;
    alt: string;
};

export default function SkillsCarouselImage({ thumbnail, alt }: SkillsCarouselImageProps) {
    return (
        <>
            <Image
                src={thumbnail}
                alt={alt}
                width={112}
                height={112}
                // Class widths must be a specific size to prevent the carousel from jumping - adjust actual image size as needed
                className='self-center w-20 sm:w-24 lg:w-28 mx-5 sm:mx-9 md:mx-12 lg:mx-16'
            />
        </>
    );
};
