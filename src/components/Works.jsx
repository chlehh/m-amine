import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { carrent, github, jobit } from "../assets";
import { fadeIn } from "../utils/motion";
import wifiImg from "../assets/gns3.png";
import python from "../assets/jobit.png";
import acrylic from "../assets/carrent.png";
import vid from "../assets/tripguide.png";
import radioInternetImg from "../assets/esp32.png";
const projects = [
  {
    name: "WiFi",
    description: "Projet réseau avec Packet Tracer et Acrylic.",
    tags: [
      { name: "Packet Tracer", color: "blue-text-gradient" },
      { name: "Acrylic", color: "green-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/chlehh/SAE-Acrylic",
  },
  {
    name: "Traiter les données",
    description: "Script Python + PowerShell pour supprimer des fichiers.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PowerShell", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/chlehh/Python",
  },
  {
    name: "Réseau avec GNS3",
    description: "Simulation réseau avec GNS3, VLANs et DHCP.",
    tags: [
      { name: "GNS3", color: "blue-text-gradient" },
      { name: "Cisco", color: "green-text-gradient" },
    ],
    image: wifiImg,
    source_code_link: "https://github.com",
  },
  {
    name: "RadioInternet",
    description:
      "Webradio ESP32 avec contrôle audio (basses, aigus, volume) via le module VS1053.",
    tags: [
      { name: "ESP32", color: "blue-text-gradient" },
      { name: "VS1053", color: "green-text-gradient" },
      { name: "WebRadio", color: "pink-text-gradient" },
    ],
    image: radioInternetImg,
    source_code_link: "https://github.com/chlehh/ESP32-Radio",
  },
  {
    name: "Attaques 0-day",
    description: "Vidéo de sensibilisation aux attaques 0-day.",
    tags: [
      { name: "Capcut", color: "blue-text-gradient" },
      { name: "Canva", color: "green-text-gradient" },
    ],
    image: vid,
    source_code_link: "https://github.com/chlehh/Vid-0day",
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
    <Tilt
      options={{ max: 25, scale: 1.05, speed: 400 }}
      className="bg-tertiary p-7 rounded-2xl w-[360px] h-[520px]"
    >
      <div className="relative w-full h-[300px]">
        <img
          src={image}
          alt="project"
          className="w-full h-full object-cover rounded-2xl"
        />
        {source_code_link && (
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="code source"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[15px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <p key={i} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = projects.length - 3;

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <div className="mt-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-secondary text-[14px] uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black text-[44px]">Projets.</h2>
        <p className="mt-4 text-secondary text-[17px] leading-[30px]">
          Voici quelques projets illustrant mes compétences en développement, cybersécurité,
          réseaux et scripting. Chaque projet montre mon apprentissage à travers des cas
          concrets, avec code ou démo à l’appui.
        </p>
      </div>

      <div className="mt-16 flex justify-center gap-12 min-h-[320px] px-4">
        <AnimatePresence mode="wait">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={`project-${currentIndex + i}`}
              index={i}
              {...project}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-16 flex justify-center gap-10 text-lg">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-500 disabled:opacity-50"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-500 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Works;
