import SectionCard from "./SectionTemp";
import { FaJava } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const projects = [
  {
    title: "Steve Run",
    description:
      "Inspired by the Google dinosaur game, Steve Run is an endless side-scrolling challenge where you jump over zombies and duck under phantoms. Dodge obstacles to survive as long as possible and beat your high score.",
    icon: <FaJava />,
    image: "/Projects/project1.png",
    githubLink: "https://github.com/phl1m17/SteveRun",
  },
  {
    title: "RotLingo",
    description:
      "Inspired by Duolingo, this language-learning game challenges you to master quirky brainrot and colloquial expressions through fun, interactive lessons. Developed collaboratively with a friend, it makes language practice engaging and memorable.",
    icon: <FaJava />,
    image: "/Projects/project2.png",
    githubLink: "https://github.com/phl1m17/RotLingo",
  },
  {
    title: "PokeMath",
    description:
      "This game, which was inspired by Pokémon, blends learning and adventure. Discover the world and come across unusual 'Pokemath' animals. You have to solve math problems in order to catch them; challenge yourself and master the subject while having fun!",
    icon: <FaJava />,
    image: "/Projects/project3.png",
    githubLink: "https://github.com/phl1m17/Advance-Functions-Game",
  },
  {
    title: "Chemistry Infographic",
    description:
      "An infographic comparing a network solid (SiO2) to a molecular solid (SO2) made with HTML and CSS.",
    icon: <MdWeb />,
    githubLink: "https://github.com/phl1m17/SiO2vsSO2-Infographic",
    liveLink: "https://phl1m17.github.io/SiO2vsSO2-Infographic/",
  },
  {
    title: "TakeMe2Prom",
    description:
      "A simple and fun website designed to help friends find their perfect prom date by connecting people and making the search easy and enjoyable.",
    icon: <MdWeb />,
    githubLink: "https://github.com/phl1m17/takeme2prom",
    liveLink: "https://phl1m17.github.io/takeme2prom/",
  },
  {
    title: "Table Tennis Tracker",
    description:
      "A straightforward and easy-to-use table tennis score tracker to keep your games organized and scores accurate.",
    icon: <MdWeb />,
    githubLink: "https://github.com/phl1m17/Score-Tracker",
    liveLink: "https://phl1m17.github.io/Score-Tracker/",
  },
  {
    title: "King Lear Game",
    description:
      "A narrative-driven game built with Phaser.js where players influence the story of King Lear by making choices that shape different outcomes and endings. Experience Shakespeare’s tragedy with interactive gameplay and branching paths.",
    icon: <MdWeb />,
    githubLink: "https://github.com/phl1m17/King-Lear-Game",
    liveLink: "https://phl1m17.github.io/King-Lear-Game/",
  },
];

function ProjectsPage() {
  return (
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <SectionCard
          key={idx}
          title={project.title}
          description={project.description}
          icon={project.icon}
          image={project.image}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
      ))}
    </div>
  );
}

export default ProjectsPage;
