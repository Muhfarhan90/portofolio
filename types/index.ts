// Types for portfolio data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  semester: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  repoLink?: string;
  image?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string[];
  type:
    | "internship"
    | "organization"
    | "freelance"
    | "project"
    | "course"
    | "study independent";
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  whatsapp?: string;
}
