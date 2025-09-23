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
                width={300}
                height={150}
                // Class widths must be a specific size to prevent the carousel from jumping. Resizing the resolution will result in jumpy animation - refresh page.
                className='self-center w-20 sm:w-24 lg:w-30 mx-5 sm:mx-9 md:mx-12 lg:mx-16'
            />
        </>
    );
};
