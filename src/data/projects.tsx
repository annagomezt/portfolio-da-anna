import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "codingducks",
    category: "Music Streaming Web Player",
    title: "Spotify Clone",
    src: "/assets/projects-screenshots/codingducks/spotify.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://deploy-jornada-full-stack.onrender.com/",
    github: "https://github.com/annagomezt/Spotify",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Spotify Clone
          </TypographyP>
          <TypographyP className="font-mono ">
            Your Music Hub is your personal sound arena, where you stream your
            favorite tracks, build epic playlists, and discover new vibes in
            real time. Track your listening journey, feel every beat, and turn
            up the volume on your experience. Ready to press play?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
          <p className="font-mono mb-2">
            A Spotify-inspired platform that recreates core streaming features,
            enabling music playback, playlist management, and seamless user
            interaction.
          </p>
          <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
          <p className="font-mono mb-2">
            Stream music and manage playlists in real time within a
            Spotify-inspired interface, designed for smooth performance and
            intuitive interaction.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ducklet4.png`,
              `${BASE_PATH}/codingducks/ducklet5.png`,
              `${BASE_PATH}/codingducks/ducklet6.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "Public Transport",
    title: "Viação Falcão",
    src: "/assets/projects-screenshots/couponluxury/viacaofalcao.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://viacaofalcao.com.br/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            A modern and responsive institutional website developed for Viação
            Falcão, designed to centralize route information, schedules, and
            company services in a clear and accessible digital environment.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Provides passengers with easy access to routes, schedules, and
            company information, simplifying intercity transportation planning
            through a clear and intuitive interface.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/viacaofalcao.png`]} />
          <TypographyH3 className="my-4 ">Problem</TypographyH3>
          <p className="font-mono mb-2">
            Provides passengers with easy access to routes, schedules, and
            company information, simplifying intercity transportation planning
            through a clear and intuitive interface.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/01.png`,
              `${BASE_PATH}/couponluxury/02.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Experience</TypographyH3>

          <p className="font-mono mb-2">
            Access routes, check schedules, and explore transportation services
            in a structured and user-friendly environment designed for quick
            navigation.
          </p>
          <TypographyH3 className="my-4 mt-8">UI </TypographyH3>
          <p className="font-mono mb-2">
            Develop a responsive transportation platform using modern web
            technologies, focusing on usability, accessibility, and organized
            information architecture.
          </p>

          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Social Project",
    title: "Help Hand",
    src: "/assets/projects-screenshots/the-booking-desk/helphand.png",
    screenshots: ["1.png"],
    live: "https://helphandaedb.netlify.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A responsive and user-centered platform designed to connect
            volunteers and people in need, creating a simple and accessible
            digital space for community support and social impact.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Bridges the gap between individuals seeking help and volunteers
            willing to assist, simplifying communication and improving access to
            community resources.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/01.png`]} />
          <TypographyH3 className="my-4 mt-8">Result</TypographyH3>
          <p className="font-mono mb-2">
            Connect with volunteers, request support, and manage assistance
            interactions through an intuitive and structured interface.
          </p>

          <TypographyH3 className="my-4 mt-8">UI</TypographyH3>

          <p className="font-mono mb-2 my-8">
            Developed a responsive social-impact platform using modern web
            technologies, focusing on accessibility, usability, and clear
            information architecture.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My First Portfolio",
    src: "/assets/projects-screenshots/portfolio/anagomes.png",
    screenshots: ["1.png"],
    live: "https://ana-portfolio-2025-6iora3hab-anas-projects-71267219.vercel.app/",
    github: "https://github.com/annagomezt/Ana-portfolio-2025",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A personal portfolio website designed to showcase projects,
            technical skills, and development experience in a clean and modern
            interface. Built to highlight creativity, problem-solving, and
            front-end development capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">My space </TypographyH3>
          <p className="font-mono mb-2">
            A dedicated section that reflects my identity as a developer —
            sharing my journey, inspirations, goals, and the mindset behind my
            projects. More than just code, this space represents my creativity,
            growth, and passion for building meaningful digital experiences.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/anagomes.png`,
              `${BASE_PATH}/portfolio/myskill.png`,
            ]}
          />

          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;
