export interface Programs {
  img: string;
  programName: string;
  programDesc: string;
  readMoreLink: string;
}

export interface Entrepreneur {
  name: string;
  age: number;
  business: string;
}

export interface Innovator {
  name: string;
  age: number;
  field: string;
}

export interface SheInspire {
  name: string;
  age: number;
  field: string;
}

export interface RisingScholar {
  name: string;
  age: number;
  field: string;
}

export const globalPrograms: Programs[] = [
  {
    img: "/uniford-main/Program1.svg",
    programName: "Scholar Program",
    programDesc:
      "Empowering students through internships, self-branding, educational resources, and global university exploration. We connect scholars with opportunities worldwide.",
    readMoreLink: "https://www.uniwave.in/scholar",
  },
  {
    img: "/uniford-main/Program2.svg",
    programName: "Rising Unicorns",
    programDesc:
      "Highlighting young talents with unexpected achievements and passion. We spotlight hidden gems, connect them with opportunities, and share their stories with the world.",
    readMoreLink: "https://www.risingunicorn.com/",
  },
  {
    img: "/uniford-main/Program3.svg",
    programName: "Grow Up",
    programDesc:
      "Incubating startups with mentorship, branding support, and connections to angel investors. We help turn ideas into successful ventures.",
    readMoreLink: "https://www.uniwave.in/grow-up",
  },
  {
    img: "/uniford-main/Program4.svg",
    programName: "She Inspires",
    programDesc:
      "Uplifting girls by providing resources and opportunities, highlighting their talents, and integrating them into mainstream growth pathways.",
    readMoreLink: "https://www.sheinspires.com/#be-inspired-video",
  },
  {
    img: "/uniford-main/grant-programs.jpg",
    programName: "UF Grant Program",
    programDesc:
      "The UF Grants Program provides essential funding and resources to support projects and initiatives dedicated to uplifting",
    readMoreLink: "/grant-program",
  },
  {
    img: "/uniford-main/resources.jpg",
    programName: "Uniwave Resources",
    programDesc:
      "Uniwave provides a wealth of resources designed to uplift founders and young professionals. Here’s a glimpse of what we offer:",
    readMoreLink: "/uniwave-resources",
  }
];

export const entrepreneurs: Entrepreneur[] = [
  {
    name: "Alice Johnson",
    age: 35,
    business: "Tech Innovator",
  },
  {
    name: "Bob Smith",
    age: 42,
    business: "Sustainable Fashion",
  },
  {
    name: "Carla Thompson",
    age: 29,
    business: "Food Delivery Service",
  },
  {
    name: "Daniel Kim",
    age: 31,
    business: "Fintech",
  },
  {
    name: "Ella Brown",
    age: 27,
    business: "E-commerce",
  },
  {
    name: "Frank Garcia",
    age: 38,
    business: "Renewable Energy",
  },
  {
    name: "Grace Lee",
    age: 33,
    business: "Healthcare Tech",
  },
  {
    name: "Henry Wilson",
    age: 45,
    business: "Real Estate",
  },
  {
    name: "Ivy Martinez",
    age: 28,
    business: "Education",
  },
  {
    name: "Jack Robinson",
    age: 36,
    business: "Transportation",
  },
];

export const innovators: Innovator[] = [
  {
    name: "Alice Johnson",
    age: 35,
    field: "Artificial Intelligence",
  },
  {
    name: "Bob Smith",
    age: 42,
    field: "Renewable Energy",
  },
  {
    name: "Carla Thompson",
    age: 29,
    field: "Biotechnology",
  },
  {
    name: "Daniel Kim",
    age: 31,
    field: "Fintech",
  },
  {
    name: "Ella Brown",
    age: 27,
    field: "E-commerce",
  },
  {
    name: "Frank Garcia",
    age: 38,
    field: "Cybersecurity",
  },
  {
    name: "Grace Lee",
    age: 33,
    field: "Healthcare Technology",
  },
  {
    name: "Henry Wilson",
    age: 45,
    field: "Smart Home Devices",
  },
  {
    name: "Ivy Martinez",
    age: 28,
    field: "EdTech",
  },
  {
    name: "Jack Robinson",
    age: 36,
    field: "Transportation Technology",
  },
];

export const sheInspires: SheInspire[] = [
  {
    name: "Emma Watson",
    age: 30,
    field: "Gender Equality Advocate",
  },
  {
    name: "Malala Yousafzai",
    age: 23,
    field: "Education Activist",
  },
  {
    name: "Greta Thunberg",
    age: 18,
    field: "Environmental Activist",
  },
  {
    name: "Sheryl Sandberg",
    age: 51,
    field: "Tech Executive and Author",
  },
  {
    name: "Michelle Obama",
    age: 57,
    field: "Former First Lady and Author",
  },
  {
    name: "Oprah Winfrey",
    age: 67,
    field: "Media Executive and Philanthropist",
  },
  {
    name: "Ruth Bader Ginsburg",
    age: 87,
    field: "Supreme Court Justice",
  },
  {
    name: "Serena Williams",
    age: 39,
    field: "Professional Tennis Player",
  },
  {
    name: "Ava DuVernay",
    age: 48,
    field: "Film Director and Producer",
  },
  {
    name: "Jacinda Ardern",
    age: 40,
    field: "Prime Minister of New Zealand",
  },
];

export const risingScholars: RisingScholar[] = [
  {
    name: "Alice Johnson",
    age: 22,
    field: "Quantum Computing",
  },
  {
    name: "Bob Smith",
    age: 21,
    field: "Astrophysics",
  },
  {
    name: "Carla Thompson",
    age: 23,
    field: "Biotechnology",
  },
  {
    name: "Daniel Kim",
    age: 24,
    field: "Environmental Science",
  },
  {
    name: "Ella Brown",
    age: 22,
    field: "Neuroscience",
  },
  {
    name: "Frank Garcia",
    age: 25,
    field: "Cybersecurity",
  },
  {
    name: "Grace Lee",
    age: 21,
    field: "Artificial Intelligence",
  },
  {
    name: "Henry Wilson",
    age: 23,
    field: "Renewable Energy",
  },
  {
    name: "Ivy Martinez",
    age: 24,
    field: "Genetics",
  },
];
