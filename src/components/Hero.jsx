import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  useEffect(() => {
    // Dynamically load the Lottie player script if it's not already available
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces and web applications
          </p>
        </div>
      </div>

      {/* Embed updated Lottie animation */}
      <div className="absolute inset-0 flex justify-center items-center mt-14">
        <dotlottie-player 
          src="https://lottie.host/29029fec-84e6-4d0e-be72-9108dbad6302/OuUIu8L0yh.lottie" 
          background="transparent" 
          speed="1" 
          style={{ width: '550px', height: '550px' , marginTop:"165px" }} 
          loop 
          autoplay
        />
      </div>
    </section>
  );
};

export default Hero;
