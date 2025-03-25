export type TeamMember = {
    name: string;
    position: string;
    major?: string;
    hometown?: string;
    image: string;
    bio: string;
    email: string;
  };
  
  export const teamMembers: TeamMember[] = [
    {
      name: "Spence Hannegan",
      position: "President",
      major: "Mathematics",
      hometown: "Meridian, MS",
      image: "./team/spence.webp",
      bio: "Spence is passionate about AI research and leads projects in machine learning.",
      email: "sdhanegan@crimson.ua.edu",
    },
    {
      name: "Josh Hargrave",
      position: "Vice President",
      major: "Aerospace Eng",
      hometown: "Pearland, TX",
      image: "./team/josh.webp",
      bio: "Josh specializes in AI ethics and works on AI-driven social good initiatives.",
      email: "jmhargrave@crimson.ua.edu",
    },
    {
      name: "Julian Garcia",
      position: "Executive Coordinator",
      major: "Aerospace Eng",
      hometown: "Wichita Falls, TX",
      image: "./team/julian.webp",
      bio: "Julian is eager to merge aerospace & AI for tech innovation. Excited to grow the club, tackle projects, and explore AI’s impact on aerospace.",
      email: "jrgarcia3@crimson.ua.edu",
    },
    {
      name: "Michal Zajac",
      position: "Graduate Advisor",
      major: "Computer Science",
      hometown: "Palos Heights, IL",
      image: "./team/michal.webp",
      bio: "A driven computer science professional, excels in data and software engineering, problem-solving, and team leadership.",
      email: "mpzajac@crimson.ua.edu",
    },
    {
      name: "Andy Hahn",
      position: "Graduate Advisor",
      major: "Computer Science",
      hometown: "Arlington Hts, IL",
      image: "./team/andy.webp",
      bio: "Delivered impactful cost-saving solutions at Dell and Mercedes-Benz. He thrives on solving complex challenges in dynamic environments.",
      email: "ahahn1@crimson.ua.edu",
    },
    {
      name: "Dr. Gong",
      position: "Faculty Advisor",
      image: "./team/gong.webp",
      bio: "Associate professor of Computer Science, specializes in AI applications across healthcare, engineering, and public services.",
      email: "jiaqi.gong@ua.edu",
    },
    {
      name: "Connor Barbaccia",
      position: "Executive Developer",
      major: "Mathematics and Computer Science",
      hometown: "Naperville, IL",
      image: "./team/connor.webp",
      bio: "Connor manages the GitHub and website for UAAI and leads the webdev team.",
      email: "crbarbacciw@crimson.ua.edu",
    },
    {
        name: "Fabricio Gutierrez",
        position: "Web Developer",
        major: "Software Engineering",
        hometown: "Lima, Perú",
        image: "./team/fabricio.webp",
        bio: "",
        email: "fjgutierrez@ua.edu",
      },
  ];
  