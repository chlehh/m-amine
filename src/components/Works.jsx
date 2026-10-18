import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, category, description, tags, image, icon, source_code_link, status }) => (
  <article className='group flex h-full flex-col overflow-hidden rounded-2xl bg-tertiary ring-1 ring-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:ring-[#915EFF]/50 hover:shadow-[0_24px_50px_-24px_rgba(145,94,255,0.55)]'>
    <div className='relative aspect-[16/9] overflow-hidden bg-black-200'>
      <img
        src={image}
        alt={name}
        loading='lazy'
        draggable='false'
        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
      />
      {category && (
        <span className='absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm'>
          {category}
        </span>
      )}
    </div>

    <div className='flex flex-1 flex-col p-5 sm:p-6'>
      <div className='flex items-center gap-3'>
        {icon && <img src={icon} alt='' className='h-9 w-9 rounded-xl ring-1 ring-white/10' />}
        <h3 className='text-white font-bold text-[20px] sm:text-[22px]'>{name}</h3>
      </div>
      <p className='mt-3 text-secondary text-[14px] leading-[23px]'>{description}</p>

      <div className='mt-auto pt-5 flex flex-wrap gap-x-3 gap-y-1'>
        {tags.map((tag) => (
          <span key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>

      <div className='mt-4 border-t border-white/[0.06] pt-4'>
        {source_code_link ? (
          <a
            href={source_code_link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-[14px] font-semibold text-white/90 hover:text-white transition-colors'
          >
            <img src={github} alt='' className='h-5 w-5 object-contain' />
            Voir le code
            <span aria-hidden='true'>↗</span>
          </a>
        ) : (
          <span className='inline-flex items-center gap-2 text-[14px] text-secondary'>
            <span className='h-2 w-2 rounded-full bg-[#915EFF]' />
            {status}
          </span>
        )}
      </div>
    </div>
  </article>
);

const ArrowButton = ({ direction, disabled, onClick }) => (
  <button
    type='button'
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "Projets précédents" : "Projets suivants"}
    className='w-12 h-12 rounded-full flex items-center justify-center bg-tertiary text-white ring-1 ring-white/10 hover:bg-[#915EFF] hover:ring-[#915EFF] disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all'
  >
    <svg viewBox='0 0 24 24' className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
      <path d={direction === "prev" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
    </svg>
  </button>
);

const Works = () => {
  const trackRef = useRef(null);
  const frame = useRef(0);
  const [active, setActive] = useState(0);
  const [positions, setPositions] = useState(projects.length);

  // Distance between two cards, read from the layout so it follows the breakpoints.
  const getStep = () => {
    const track = trackRef.current;
    const card = track.querySelector("[data-card]");
    return card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
  };

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = getStep();
    setPositions(Math.round((track.scrollWidth - track.clientWidth) / step) + 1);
    setActive(Math.round(track.scrollLeft / step));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(frame.current);
    };
  }, [measure]);

  const handleScroll = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(measure);
  };

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, positions - 1));
    trackRef.current.scrollTo({ left: clamped * getStep(), behavior: "smooth" });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mes réalisations</p>
        <h2 className={styles.sectionHeadText}>Projets.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Voici quelques projets illustrant mes compétences en IA, cloud, réseaux,
        cybersécurité et développement. Chaque projet montre mon apprentissage à travers
        des cas concrets, avec code ou démo à l'appui.
      </motion.p>

      <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className='mt-12'>
        <div
          ref={trackRef}
          onScroll={handleScroll}
          tabIndex={0}
          aria-label='Liste des projets'
          className='project-track -mx-6 sm:mx-0 px-6 sm:px-0 scroll-px-6 sm:scroll-px-0 flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pt-2 pb-6 outline-none'
        >
          {projects.map((project) => (
            <div
              key={project.name}
              data-card
              className='snap-start shrink-0 w-[85%] xs:w-[70%] sm:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)]'
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className='mt-4 flex items-center justify-center sm:justify-between gap-6'>
          <div className='flex items-center'>
            {Array.from({ length: positions }, (_, index) => (
              <button
                key={index}
                type='button'
                onClick={() => goTo(index)}
                aria-label={`Aller au projet ${index + 1}`}
                aria-current={index === active}
                className='p-1.5'
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    index === active ? "w-7 bg-[#915EFF]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className='hidden sm:flex items-center gap-3'>
            <span className='text-secondary text-sm tabular-nums mr-2'>
              {active + 1}–{active + projects.length - positions + 1} / {projects.length}
            </span>
            <ArrowButton direction='prev' disabled={active === 0} onClick={() => goTo(active - 1)} />
            <ArrowButton direction='next' disabled={active >= positions - 1} onClick={() => goTo(active + 1)} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");
