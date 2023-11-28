import React from 'react';


function HeroSection() {
    return (
        <div className={'container px-[1.3rem]   mx-auto text-center pb-[30px] p-[150px] flex justify-center flex-col'}>
            <h1 className={'text-[38px] md:text-[90px] 2xl:text-[150px]'} data-aos={'fade-up'}>Tech Tapestry</h1>
            <p className={'text-[16px] md:text-[30px] max-w-[1250px] mx-auto'} data-aos={'fade-up'}>
                Weave together the threads of software development, exploring the interconnectedness of tools,
                languages, and frameworks.
            </p>
        </div>
    );
}

export default HeroSection;