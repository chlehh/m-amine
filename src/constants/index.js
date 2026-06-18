import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  laposte,
  capcut,
  uha,
  alwaha,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "Présentation",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " Éditeur Vidéo",
    icon: web,
  },
  {
    title: "Développeur",
    icon: mobile,
  },
  {
    title: "Cyber Enthousiaste",
    icon: backend,
  },
  {
    title: "Passionné Cloud",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PKT",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Linux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: nodejs,
  },
  {
    name: "wireshark",
    icon: mongodb,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Acrylic",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BAC SC.Physiques",
    company_name: "Institut Al Waha",
    icon: alwaha,
    iconBg: "#ffffff",
    date: "Septembre 2024 - Juin 2025",
    points: [
      "Comprendre les bases de la physique et de la chimie.",
      "Faire des expériences en labo et analyser les résultats.",
      "Utiliser les maths pour expliquer des phénomènes.",
      "Travail en autonomie et en équipe dans le cadre de projets scientifiques et d'exposés oraux.",
    ],
  },
  {
    title: "Éditeur vidéo",
    company_name: "",
    icon: capcut,
    iconBg: "#000000",
    date: "Janvier 2022 - Juillet 2024",
    points: [
      "Utiliser des logiciels de montage comme Premiere Pro ou CapCut.",
      "Créer des vidéos pour les réseaux sociaux ou YouTube.",
      "Couper, assembler et améliorer des séquences vidéo.",
    ],
  },
  {
    title: "Étudiant en BUT R&T",
    company_name: "IUT de Colmar",
    icon: uha,
    iconBg: "#ffffff",
    date: "Septembre 2024 - Juin 2027",
    points: [
      "Apprendre les bases des réseaux informatiques et des télécommunications.",
      "Configurer des équipements réseau comme des switchs et des routeurs.",
      "Utiliser des outils comme Wireshark ou Packet Tracer.",
      "Travailler sur des projets en groupe pour résoudre des problèmes techniques.",
    ],
  },
  {
    title: "Stagiaire Technicien Infrastructure",
    company_name: "La Poste",
    icon: laposte,
    iconBg: "#FFCD00",
    date: "Avril 2026 - Juin 2026",
    points: [
      "Interventions sur les sites de La Poste en Alsace pour l’installation, la maintenance et le support des infrastructures informatiques et réseaux.",
      "Configuration et déploiement d’équipements informatiques ainsi que participation à des opérations de modernisation des systèmes techniques.",
      "Assistance technique sur les infrastructures réseau, les postes de travail et les équipements connectés afin d’assurer leur bon fonctionnement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/8f0df8efd5b986039cd37a4d5f3bf31b815d0c54-3840x2160.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://i.imgur.com/vcNYfYn.jpeg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Entreprise",
    image: "https://img.freepik.com/photos-gratuite/voir-ci-dessus-assortiment-articles-voyage-nature-morte_23-2149617645.jpg",
  },
];

const projects = [
  {
    name: "WiFi",
    description:
      "Projet sur la mise en place d'un réseau Wifi simulé avec Packet Tracer et analysé avec Acrylic Heatmapper. Nous avons étudié la couverture, l'impact des obstacles et les performances du signal.",
    tags: [
      { name: "acrylic", color: "blue-text-gradient" },
      { name: "packet tracer", color: "green-text-gradient" },
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
      { name: "Powershell", color: "green-text-gradient" },
      { name: "Windows", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/chlehh/Python",
  },
  {
    name: "les attaques 0-day",
    description:
      "Vidéo de sensibilisation à l'hygiène en cybersécurité, présentant les bonnes pratiques et les attaques 0-day. Objectif : expliquer les risques et encourager des comportements sécurisés au quotidien.",
    tags: [
      { name: "Capcut", color: "blue-text-gradient" },
      { name: "Canva", color: "green-text-gradient" },
      { name: "vid", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/chlehh/Vid-0day",
  },
  {
    name: "Réseau avec GNS3",
    description:
      "Simulation d'un réseau avec VLANs, DHCP, routage dans GNS3.",
    tags: [
      { name: "GNS3", color: "blue-text-gradient" },
      { name: "Cisco", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/chlehh",
  },
];

export { services, technologies, experiences, testimonials, projects };
