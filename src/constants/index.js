import {
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
  typescript,
  ollama,
  windows,
  videoIcon,
  codeIcon,
  shieldIcon,
  cloudIcon,
  jobit,
  laposte,
  capcut,
  uha,
  alwaha,
  lapostePoster,
  minusCover,
  minusIcon,
  localAiCover,
  mazeBankCover,
  onionCover,
  multiSitesCover,
  wifiCover,
  gns3Cover,
  esp32Cover,
  zeroDayCover,
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
    title: "Éditeur Vidéo",
    icon: videoIcon,
  },
  {
    title: "Développeur",
    icon: codeIcon,
  },
  {
    title: "Cyber Enthousiaste",
    icon: shieldIcon,
  },
  {
    title: "Passionné Cloud",
    icon: cloudIcon,
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
    name: "Ollama",
    icon: ollama,
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
    name: "Windows",
    icon: windows,
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
    date: "Septembre 2023 - Juin 2024",
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
    poster: lapostePoster,
    links: [
      { label: "Galerie du stage", url: "https://chlehh.github.io/gallery-stage/" },
    ],
  },
];

// Hobbies
const testimonials = [
  {
    title: "Jeux vidéo",
    name: "Jeux vidéo",
    image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/8f0df8efd5b986039cd37a4d5f3bf31b815d0c54-3840x2160.jpg",
  },
  {
    title: "Football",
    name: "Football",
    image: "https://i.imgur.com/vcNYfYn.jpeg",
  },
  {
    title: "Voyages",
    name: "Voyages",
    image: "https://img.freepik.com/photos-gratuite/voir-ci-dessus-assortiment-articles-voyage-nature-morte_23-2149617645.jpg",
  },
];

const projects = [
  {
    name: "Minus",
    category: "IA",
    description:
      "Assistant vocal privé qui tourne entièrement sur mon PC Windows. J'ai développé toute la chaîne : détection du mot « Minus », transcription Whisper sur la carte graphique, LLM local servi par Ollama qui choisit l'action (Spotify, applications, fenêtres sur deux écrans…) puis réponse à voix haute. Pilotable aussi depuis mon iPhone, la voix et l'IA restent sur la machine.",
    tags: [
      { name: "Ollama", color: "blue-text-gradient" },
      { name: "Whisper", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: minusCover,
    icon: minusIcon,
    status: "Dépôt GitHub bientôt disponible",
  },
  {
    name: "Local-AI",
    category: "IA · Cloud",
    description:
      "Socle d'IA auto-hébergé : Ollama et Open WebUI déployés avec Docker Compose (healthchecks, limites mémoire, ports restreints). J'ai écrit un benchmark Python qui mesure le temps de première réponse, le débit en tokens/s et la charge CPU/RAM de Phi-3, Mistral 7B et Llama 3.1 8B, puis branché l'assistant de code Opencode sur un modèle local pour générer une API testée.",
    tags: [
      { name: "Ollama", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "LLM", color: "pink-text-gradient" },
    ],
    image: localAiCover,
    source_code_link: "https://github.com/chlehh/Local-AI",
  },
  {
    name: "Maze Bank",
    category: "Cloud · Dev",
    description:
      "Application bancaire découpée en 5 micro-services FastAPI : authentification JWT, comptes, opérations, validation par un agent et journaux, chacun avec sa propre base SQLite. Les services publient leurs logs sur un bus NATS, et toute la stack se lance avec Docker Compose derrière un frontend React servi par nginx.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "NATS", color: "pink-text-gradient" },
    ],
    image: mazeBankCover,
    source_code_link: "https://github.com/chlehh/SAE-micro-services",
  },
  {
    name: "Onion",
    category: "Cybersécurité",
    description:
      "Projet autour de la sécurité et de la confidentialité réseau inspiré du principe des réseaux Onion (Tor). J'ai étudié les mécanismes de routage en couches, l’anonymisation des communications et les risques liés au trafic réseau.",
    tags: [
      { name: "Tor", color: "pink-text-gradient" },
      { name: "Network Security", color: "blue-text-gradient" },
      { name: "Cybersecurity", color: "green-text-gradient" },
    ],
    image: onionCover,
    source_code_link: "https://github.com/chlehh/SAE-onion",
  },
  {
    name: "Multi-Sites",
    category: "Réseau",
    description:
      "Conception et déploiement d'une infrastructure réseau multi-sites pour deux entreprises. Mise en place de VLANs, routage inter-VLAN, haute disponibilité (VRRP), services réseau et interconnexion MPLS-VPN. J'ai principalement travaillé sur la partie FAI avec la configuration du cœur opérateur, du routage et des services VPN entre les différents sites.",
    tags: [
      { name: "MPLS-VPN", color: "pink-text-gradient" },
      { name: "Networking", color: "blue-text-gradient" },
      { name: "Cisco", color: "green-text-gradient" },
    ],
    image: multiSitesCover,
    source_code_link: "https://github.com/chlehh/multi-sites/",
  },
  {
    name: "WiFi",
    category: "Réseau",
    description:
      "Projet sur la mise en place d'un réseau Wifi simulé avec Packet Tracer et analysé avec Acrylic Heatmapper. Nous avons étudié la couverture, l'impact des obstacles et les performances du signal.",
    tags: [
      { name: "Packet Tracer", color: "blue-text-gradient" },
      { name: "Acrylic", color: "green-text-gradient" },
      { name: "speed-test", color: "pink-text-gradient" },
    ],
    image: wifiCover,
    source_code_link: "https://github.com/chlehh/SAE-Acrylic",
  },
  {
    name: "Traiter les données",
    category: "Scripting",
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
    category: "Réseau",
    description: "Simulation d'un réseau avec VLANs, DHCP, routage dans GNS3.",
    tags: [
      { name: "GNS3", color: "blue-text-gradient" },
      { name: "Cisco", color: "green-text-gradient" },
    ],
    image: gns3Cover,
    source_code_link: "https://github.com/chlehh",
  },
  {
    name: "RadioInternet",
    category: "IoT",
    description:
      "Webradio ESP32 avec contrôle audio (basses, aigus, volume) via le module VS1053.",
    tags: [
      { name: "ESP32", color: "blue-text-gradient" },
      { name: "VS1053", color: "green-text-gradient" },
      { name: "WebRadio", color: "pink-text-gradient" },
    ],
    image: esp32Cover,
    source_code_link: "https://github.com/chlehh/ESP32-Radio",
  },
  {
    name: "Attaques 0-day",
    category: "Vidéo",
    description:
      "Vidéo de sensibilisation à l'hygiène en cybersécurité, présentant les bonnes pratiques et les attaques 0-day.",
    tags: [
      { name: "Capcut", color: "blue-text-gradient" },
      { name: "Canva", color: "green-text-gradient" },
    ],
    image: zeroDayCover,
    source_code_link: "https://github.com/chlehh/Vid-0day",
  },
];

export { services, technologies, experiences, testimonials, projects };
