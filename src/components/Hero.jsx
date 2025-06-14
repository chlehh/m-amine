import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const greetings = [
  "I'm",           // English
  "Je suis",       // French
  "Soy",           // Spanish
  "Ich bin",       // German
  "Sono",          // Italian
  "私は",            // Japanese
  "저는",            // Korean
  "ⵏⴻⴽⵉⵏⵉ ⴷ",
  "أنا",
];

const Hero = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <AnimatePresence mode='wait'>
            <motion.h1
              key={greetings[greetingIndex]}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className={`text-[42px] sm:text-[60px] lg:text-[70px] font-black text-white`}
            >
              {greetings[greetingIndex]} <span className='text-[#915EFF]'>M-Amine</span>
            </motion.h1>
          </AnimatePresence>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Étudiant en Réseaux et Télécommunications  <br className='sm:block hidden' />
            Passionné par la Cybersécurité et le Cloud
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
