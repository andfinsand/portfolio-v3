export default function Hero() {
    return (
        <div
            className='flex justify-center h-screen w-full pt-60 sm:pt-0'
            style={{
                height: 'calc(100vh + 120px)',
            }}
        >
            <div className='lax-title fixed text-[#E7E7E7] sm:top-[28%]'>
                <h1
                    data-aos='fade-in'
                    data-aos-delay='1200'
                    className='text-4xl font-semibold drop-shadow-[0_0_3px_rgba(140,140,140,.5)] sm:text-5xl xl:text-6xl'
                >
                    ANDREW FINSAND
                </h1>
                <h2
                    data-aos='fade-in'
                    data-aos-delay='1200'
                    className='text-center text-xl font-poppinsLight drop-shadow-[0_0_1px_rgba(140,140,140,.6)] sm:text-2xl xl:text-3xl'
                >
                    Software Developer
                </h2>
            </div>
        </div>
    );
}
