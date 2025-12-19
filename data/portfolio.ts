import { Education, Project, Experience, ContactInfo } from "@/types";

// Personal Information
export const personalInfo = {
  name: "Muhammad Farhan Hidayatulloh",
  headline: "Information Systems Student | Software Engineer Enthusiast",
  description:
    "Information Systems student passionate about fullstack web development and building scalable web applications.",
  profileImage:
    "https://drive.google.com/uc?export=view&id=1vvqkqV77wpJ-ZB1qbiZu7YZRgOMJD1ja",
  about: {
    introduction:
      "I am someone who is deeply passionate about the world of web programming. I enjoy the process of creating applications and digital solutions that can bring real value. My interests include frontend and backend development, as well as exploring the latest technologies to build efficient, interactive, and responsive websites.",
    interests: [
      "Fullstack Web Development",
      "Software Engineering",
      "UI/UX Design",
      "Architecture Sistem",
    ],
    values: [
      {
        title: "Collaboration",
        description: "Working together with a team to achieve common goals",
      },
      {
        title: "Hands-on Learning",
        description: "Learning through direct practice and experimentation",
      },
      {
        title: "Problem Solving",
        description: "Finding creative solutions to technical challenges",
      },
    ],
    careerGoal:
      "I am preparing myself to obtain a Software Engineering Internship where I can apply my technical knowledge and continue to grow as a professional software engineer.",
  },
};

// Education Data
export const educationData: Education[] = [
  {
    id: "1",
    institution: "Universitas Pembangunan Nasional 'Veteran' Jatim",
    degree: "Bachelor's Degree",
    field: "Information Systems",
    period: "2022 - Present",
    semester: "7th Semester",
    description:
      "Currently pursuing a Bachelor's degree in Information Systems with a focus on web development, database management, and system analysis.",
  },
  {
    id: "2",
    institution: "SMA Negeri 1 Surabaya",
    degree: "High School Diploma",
    field: "Science Major",
    period: "2019 - 2022",
    semester: "",
    description:
      "Focused on mathematics and natural sciences education with consistent academic achievements.",
  },
  {
    id: "3",
    institution: "SMP Negeri 29 Surabaya",
    degree: "Middle School Diploma",
    field: "General Studies",
    period: "2016 - 2019",
    semester: "",
    description:
      "Focused on general studies education with consistent academic achievements.",
  },
];

// Projects Data
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Obatherbalchina",
    description:
      "Developed a comprehensive e-commerce platform for an herbal medicine store featuring integrated payment gateways and automated shipping calculations",
    techStack: ["Laravel", "MySQL", "Tailwind CSS"],
    demoLink: "https://obatherbalchina.shop",
    repoLink: "https://github.com/muhfarhan90/obatherbalchina",
    image:
      "https://drive.google.com/uc?export=view&id=1OaY0FJBBsmteXPuXmiR3pf39PTFHGNaT",
  },
  {
    id: "2",
    title: "Boomtale",
    description:
      "Built a digital marketplace platform designed to facilitate the sale and distribution of digital products such as ebooks and video content.",
    techStack: ["Laravel", "MySQL", "Tailwind CSS"],
    demoLink: "https://boomtale.shop",
    repoLink: "https://github.com/muhfarhan90/boomtale",
    image:
      "https://drive.google.com/uc?export=view&id=1V9j-9VNN_z00kx-mNlXoqUN4cpe5iYrP",
  },
  {
    id: "3",
    title: "Medistore",
    description:
      "Medical tool e-commerce website with features such as product catalogs, shopping carts, and secure payment processing.",
    techStack: ["Laravel", "MySQL", "Bootstrap"],
    demoLink: "https://medistore.hostingphp.cloudapp.web.id",
    repoLink: "https://github.com/muhfarhan90/medistore",
    image:
      "https://drive.google.com/uc?export=view&id=1dy1ZYEtQJ9mjtWLprubtd9BVXl4FksSI",
  },
  {
    id: "4",
    title: "Codeflix",
    description:
      "A video streaming web application that offers a variety of films and series with user authentication and categorized content browsing.",
    techStack: ["Laravel", "MySQL", "Tailwind CSS"],
    demoLink: "https://codeflix.hostingphp.cloudapp.web.id",
    repoLink: "https://github.com/muhfarhan90/codeflix",
    image:
      "https://drive.google.com/uc?export=view&id=1w5mCv8taeANpbt6D5LQG3vUYIIwlyQTE",
  },
  {
    id: "5",
    title: "Restoranku App",
    description:
      "A restaurant management application that streamlines order processing, menu management, and table management for efficient operations.",
    techStack: ["Laravel", "Javascript", "MySQL", "Bootstrap"],
    demoLink: "https://restoranku-app.hostingphp.cloudapp.web.id",
    repoLink: "https://github.com/muhfarhan90/pos-app",
    image:
      "https://drive.google.com/uc?export=view&id=172nNEjycqUlZYwrUttFEoCcCHHgPKS5O",
  },
  {
    id: "6",
    title: "Quran Web",
    description:
      "A web application that provides access to the Quran with features such as verse search, translations, and audio recitations.",
    techStack: ["ReactJS", "Typescript", "Tailwind CSS", "REST API"],
    demoLink: "https://quran-web-coral.vercel.app",
    repoLink: "https://github.com/muhfarhan90/quran-web",
    image:
      "https://drive.google.com/uc?export=view&id=1Wr-Ppw4gbpkfmu5ybBsL4aLXvT42EMJU",
  },
  {
    id: "7",
    title: "Cashed",
    description:
      "Cashier application for retail businesses that simplifies sales transactions, inventory management, and reporting.",
    techStack: ["Laravel", "MySQL", "Bootstrap"],
    // demoLink: "https://quran-web-coral.vercel.app",
    repoLink: "https://github.com/muhfarhan90/Cashed",
    image:
      "https://drive.google.com/uc?export=view&id=1DWwqlJ7o4Ds7148hGTs_GTohFbFJ2xbI",
  },
  {
    id: "8",
    title: "Employee Management System",
    description:
      "An application designed to manage employee records, attendance, and salary management within an organization.",
    techStack: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    // demoLink: "https://quran-web-coral.vercel.app",
    repoLink: "https://github.com/muhfarhan90/employee-management",
    image:
      "https://drive.google.com/uc?export=view&id=1fewzF01K2-jbjlELnuVv9yMeOLVUe5XV",
  },
];

// Experience Data
export const experienceData: Experience[] = [
  {
    id: "1",
    position: "Backend Developer Intern",
    company: "Involuntir",
    period: "August 2025 - October 2025",
    type: "internship",
    description: [
      "Engineered a QR code-based attendance feature using Laravel, streamlining the user check-in process and enhancing system efficiency.",
      "Maintained web application stability by actively identifying and resolving bugs, ensuring a seamless user experience for the platform.",
      "Contributed to backend feature development and code optimization, collaborating with the team to deliver robust web solutions during the 3-month internship. ",
    ],
  },
  {
    id: "2",
    position: "Fullstack Developer Intern",
    company: "PT Winnicode Garuda Teknologi",
    period: "January 2025 - May 2025",
    type: "internship",
    description: [
      "Developed a fullstack news portal using React (frontend) and Laravel (backend).",
      "Designed responsive and user-friendly UI/UX layouts.",
      "Created system documentation: use case diagrams, ERDs, and flowcharts.",
    ],
  },
  {
    id: "3",
    position: "Bangkit Academy - Cloud Computing Cohort",
    company: "Dicoding Indonesia",
    period: "September 2024 - December 2024",
    type: "course",
    description: [
      "Learned cloud fundamentals and infrastructure management using GCP",
      "Gained hands-on experience in deploying, securing, and monitoring cloud-native applications",
      "Built backend services for the Capstone Project using Express.js and REST APIs",
    ],
  },
  {
    id: "4",
    position: "Programming Member",
    company: "Information System Community (ISCOM) UPNVJT",
    period: "February 2024 - June 2024",
    type: "course",
    description: [
      "Learned foundational programming skills, including HTML, CSS, and basic JavaScript",
      "Built a resume website using core web technologies",
      "Practiced version control using Git and GitHub for collaborative project management",
    ],
  },
  {
    id: "5",
    position: "Frontend Development Member",
    company: "Google Developer Student Clubs (GDSC) UPNVJT",
    period: "December 2023 - March 2024",
    type: "course",
    description: [
      " Completed a structured Dicoding course on frontend development",
      "Applied concepts through hands-on assignments and real-world mini projects",
      "Strengthened knowledge of HTML, CSS, and JavaScript",
    ],
  },
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: "muhfarhanhidayatulloh@gmail.com",
  linkedin: "https://linkedin.com/in/muhfarhanhidayatulloh",
  github: "https://github.com/muhfarhan90",
  whatsapp: "6283164761087", // Ganti dengan nomor WhatsApp Anda (format: 62xxx tanpa +)
};
