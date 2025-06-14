import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants"; // Garde cette ligne si tu veux garder des données réelles

const FeedbackCard = ({
  index,
  image, // Image de la carte
  title, // Titre ou description de l'hobby, à la place du testimonial
}) => (
  <motion.div
    whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <img
        src={image}
        alt={title} // Utilisation de l'image
        className='w-full h-[200px] rounded-2xl object-cover mb-4' // Garde l'image avec un style arrondi
      />
      <p className='text-white text-center text-[18px] font-medium'>{title}</p> {/* Titre sous l'image */}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}></p>
          <h2 className={styles.sectionHeadText}>Hobbies.</h2> {/* Changer le titre ici */}
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
