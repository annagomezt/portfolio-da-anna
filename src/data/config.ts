const config = {
  title: "Ana Gomes | Front-End Developer",
  description: {
    long: "Explore the portfolio of Ana Gomes, a front-end developer. Discover my latest work, including Viação Falcão, Spotify Clone, Help Hand, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ana Gomes, a front-end developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ana Gomes",
    "portfolio",
    "front-end developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Spotify Clone",
    "web design",
    "Viação Falcão",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ana Gomes",
  email: "annagomezdev@hotmail.com",
  site: "https://anagomes.site",

  // for github stars button
  githubUsername: "annagomezt",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/eu_AnaGomes",
    linkedin: "https://www.linkedin.com/in/anagomes-swe/",
    instagram: "https://www.instagram.com/annagomezt_",
    facebook: "",
    github: "https://github.com/annagomezt",
  },
};
export { config };
