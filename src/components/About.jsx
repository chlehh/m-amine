import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='sm:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] h-full py-6 px-3 sm:py-5 sm:px-12 min-h-[180px] sm:min-h-[280px] flex justify-evenly items-center flex-col gap-4'>
        <div className='w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center'>
          <img src={icon} alt='' className='w-10 h-10 sm:w-14 sm:h-14 object-contain' />
        </div>

        <h3 className='text-white text-[15px] sm:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
Je suis étudiant en Réseaux et Télécommunications à l’IUT de Colmar, avec un intérêt marqué pour l’intelligence artificielle, le Cloud Computing et la cybersécurité. Curieux et motivé, j’apprécie développer continuellement mes compétences, explorer de nouveaux domaines techniques et échanger avec des personnes issues de différents horizons. Je m’intéresse également au montage vidéo, une activité qui me permet de mettre en pratique ma créativité et mon sens du détail.
      </motion.p>

      <div className='mt-12 sm:mt-20 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
