import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { github } from "../assets";
import wifiImg from "../assets/gns3.png";
import vid from "../assets/tripguide.png";
import radioInternetImg from "../assets/esp32.png";
import onion from "../assets/onion.png";
import { carrent, jobit } from "../assets";
import multysite from "../assets/multysite_card_image.png";
const projects = [

  {
  name: "Onion",
    description:
      "Projet autour de la sécurité et de la confidentialité réseau inspiré du principe des réseaux Onion (Tor). J'ai étudié les mécanismes de routage en couches, l’anonymisation des communications et les risques liés au trafic réseau.",
    tags: [
      { name: "Tor", color: "red-text-gradient" },
      { name: "Network Security", color: "blue-text-gradient" },
      { name: "Cybersecurity", color: "green-text-gradient" },
    ],
    image: onion,
    source_code_link: "https://github.com/chlehh/SAE-onion",
  },
  {
    name: "Mutli-Sites",
    description:
      "Conception et déploiement d'une infrastructure réseau multi-sites pour deux entreprises. Mise en place de VLANs, routage inter-VLAN, haute disponibilité (VRRP), services réseau et interconnexion MPLS-VPN. J'ai principalement travaillé sur la partie FAI avec la configuration du cœur opérateur, du routage et des services VPN entre les différents sites.",
    tags: [
      { name: "MPLS-VPN", color: "red-text-gradient" },
      { name: "Networking", color: "blue-text-gradient" },
      { name: "Cisco", color: "green-text-gradient" },
    ],
    image: multysite,
    source_code_link: "https://github.com/chlehh/multi-sites/",
  },
  {
    name: "WiFi",
    description:
      "Projet sur la mise en place d'un réseau Wifi simulé avec Packet Tracer et analysé avec Acrylic Heatmapper. Nous avons étudié la couverture, l'impact des obstacles et les performances du signal.",
    tags: [
      { name: "Packet Tracer", color: "blue-text-gradient" },
      { name: "Acrylic", color: "green-text-gradient" },
      { name: "speed-test", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/chlehh/SAE-Acrylic",
  },
  {
    name: "Traiter les données",
    description:
      "Projet Python générant un script PowerShell pour automatiser la suppression de fichiers. Permet une gestion rapide et efficace du nettoyage système.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PowerShell", color: "green-text-gradient" },
      { name: "Windows", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/chlehh/Python",
  },
  {
    name: "Réseau avec GNS3",
    description: "Simulation d'un réseau avec VLANs, DHCP, routage dans GNS3.",
    tags: [
      { name: "GNS3", color: "blue-text-gradient" },
      { name: "Cisco", color: "green-text-gradient" },
    ],
    image: wifiImg,
    source_code_link: "https://github.com/chlehh",
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
    description:
      "Vidéo de sensibilisation à l'hygiène en cybersécurité, présentant les bonnes pratiques et les attaques 0-day.",
    tags: [
      { name: "Capcut", color: "blue-text-gradient" },
      { name: "Canva", color: "green-text-gradient" },
    ],
    image: vid,
    source_code_link: "https://github.com/chlehh/Vid-0day",
  },
  
];

const ProjectCard = ({ name, description, tags, image, source_code_link }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.4 }}
  >
    <Tilt
      options={{ max: 25, scale: 1.05, speed: 400 }}
      className="bg-tertiary p-5 sm:p-7 rounded-2xl w-full"
    >
      <div className="relative w-full h-[200px] sm:h-[260px]">
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
        <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] sm:text-[15px]">{description}</p>
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
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsPerPage);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex]);

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex((i) => i + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + cardsPerPage);

  const gridCols =
    cardsPerPage === 1
      ? "grid-cols-1"
      : cardsPerPage === 2
      ? "grid-cols-2"
      : "grid-cols-3";

  return (
    <div className="mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-secondary text-[14px] uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black text-[44px]">Projets.</h2>
        <p className="mt-4 text-secondary text-[17px] leading-[30px]">
          Voici quelques projets illustrant mes compétences en développement, cybersécurité,
          réseaux et scripting. Chaque projet montre mon apprentissage à travers des cas
          concrets, avec code ou démo à l'appui.
        </p>
      </div>

      <div className="mt-16 max-w-5xl mx-auto px-4">
        <div
          className={`grid gap-6 ${gridCols} ${
            cardsPerPage === 1 ? "max-w-[360px] mx-auto" : ""
          }`}
        >
          <AnimatePresence>
            {visibleProjects.map((project, i) => (
              <ProjectCard
                key={`project-${currentIndex + i}`}
                {...project}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-10 flex justify-center items-center gap-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-purple-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl hover:bg-purple-500 disabled:opacity-30 active:scale-95 transition-all touch-manipulation select-none"
          aria-label="Précédent"
        >
          ‹
        </button>
        <span className="text-secondary text-sm tabular-nums">
          {currentIndex + 1}–{Math.min(currentIndex + cardsPerPage, projects.length)} /{" "}
          {projects.length}
        </span>
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="bg-purple-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl hover:bg-purple-500 disabled:opacity-30 active:scale-95 transition-all touch-manipulation select-none"
          aria-label="Suivant"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Works;
