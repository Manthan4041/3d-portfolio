const config = {
  title: "Manthan Awasthi | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Manthan , a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including  The Booking Desk, EdTech Platform, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Manthan , a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Manthan",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "The Booking Desk",
    "EdTech Platform",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Manthan Awasthi",
  email: "manthanawasthi4041@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "Manthan4041",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/manthan-awasthi-47475234a/",
    instagram: "https://www.instagram.com/_manthanawasthi/",
    facebook: "",
    github: "https://github.com/Manthan4041",
  },
};
export { config };
