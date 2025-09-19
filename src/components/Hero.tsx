import Image from 'next/image';

export default function Hero() {
    return (
        <div className='flex justify-center h-screen w-full'>
            <div className='lax-title relative text-[#E7E7E7] top-[35%] sm:top-[32.5%] xl:top-[28%]'>
                <h1
                    // data-aos='fade-in'
                    // data-aos-delay='1200'
                    className='text-center text-4xl sm:text-5xl xl:text-6xl mb-2 xl:mb-4'
                >
                    ANDREW FINSAND
                </h1>
                <h2
                    // data-aos='fade-in'
                    // data-aos-delay='1200'
                    className='text-center font-extralight text-xl sm:text-2xl xl:text-3xl mb-7 xl:mb-10'
                >
                    Software Developer
                </h2>

                {/* Resume */}
                <div className='flex justify-center w-full'>
                    <a
                        href='resume.pdf'
                        target='_blank'
                        className='group flex border-1 xl:border-2 border-[#9b9b9b] rounded-full w-fit gap-1 px-4 py-2 hover:bg-white/15 hover:backdrop-blur-sm duration-200'

                    >
                        <Image
                            src='/external-link.svg'
                            alt='Resume icon'
                            width={100}
                            height={100}
                            priority={true}
                            className='w-4 xl:w-5'
                        />
                        <p className='text-xs xl:text-sm font-light'>View Resume</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
