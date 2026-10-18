import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Phones cap the number of live WebGL contexts (one per ball), which makes
// the hero model and balls disappear. They get lightweight CSS bubbles instead.
const LIGHT_QUERY = "(max-width: 640px), (pointer: coarse)";

const Bubble = ({ icon, name, index }) => (
  <div
    className='tech-bubble w-[72px] h-[72px] rounded-full flex items-center justify-center'
    style={{ animationDelay: `${(index % 5) * 0.4}s` }}
  >
    <img src={icon} alt={name} loading='lazy' className='w-10 h-10 object-contain' />
  </div>
);

const Tech = () => {
  const [light] = useState(() => window.matchMedia(LIGHT_QUERY).matches);

  if (light) {
    return (
      <div className='flex flex-row flex-wrap justify-center gap-6'>
        {technologies.map((technology, index) => (
          <Bubble key={technology.name} index={index} {...technology} />
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
