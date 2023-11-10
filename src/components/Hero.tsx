import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (event: any) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[129px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            HI, I'm <span className="text-[#915eff]">Mohan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications using javascript and
            <br className="sm:block hidden" /> javascript frameworks
          </p>
        </div>
      </div>
      <ComputersCanvas isMobile={isMobile} />
      <div className="absolute  bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
