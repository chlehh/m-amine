import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const PosterLightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Portal: the timeline animates with transforms, which would trap a fixed overlay.
  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      aria-label={alt}
      onClick={onClose}
      className='fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/85 p-4 backdrop-blur-sm'
    >
      <img
        src={src}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
        className='max-h-[82vh] max-w-full rounded-xl shadow-2xl'
      />
      <a
        href={src}
        target='_blank'
        rel='noopener noreferrer'
        onClick={(event) => event.stopPropagation()}
        className='text-[14px] text-secondary underline underline-offset-4 hover:text-white'
      >
        Ouvrir en taille réelle
      </a>
      <button
        type='button'
        onClick={onClose}
        aria-label='Fermer'
        className='absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 text-white text-[26px] leading-none hover:bg-white/20 transition-colors'
      >
        ×
      </button>
    </div>,
    document.body
  );
};

const ExperienceCard = ({ experience, onOpenPoster }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.poster && (
        <button
          type='button'
          onClick={() => onOpenPoster(experience)}
          className='group relative mt-6 block w-full overflow-hidden rounded-xl ring-1 ring-white/10'
          aria-label={`Agrandir le poster du stage ${experience.company_name}`}
        >
          <img
            src={experience.poster}
            alt={`Poster du stage ${experience.company_name}`}
            loading='lazy'
            className='w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]'
          />
          <span className='absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm'>
            Agrandir
          </span>
        </button>
      )}

      {experience.links && (
        <div className='mt-5 flex flex-wrap gap-3'>
          {experience.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-[#915EFF] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#7d48f5] transition-colors'
            >
              {link.label}
              <span aria-hidden='true'>↗</span>
            </a>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [poster, setPoster] = useState(null);
  const closePoster = useCallback(() => setPoster(null), []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
         Expérience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onOpenPoster={setPoster}
            />
          ))}
        </VerticalTimeline>
      </div>

      {poster && (
        <PosterLightbox
          src={poster.poster}
          alt={`Poster du stage ${poster.company_name}`}
          onClose={closePoster}
        />
      )}
    </>
  );
};

export default SectionWrapper(Experience, "experience");
