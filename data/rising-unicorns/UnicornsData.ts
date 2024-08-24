export interface Activist {
  name: string;
  designation: string;
  age: number;
  unique: string;
  about: string;
  profileImage: string;
}

export interface Entrepreneur {
  name: string;
  designation: string;
  age: number;
  unique: string;
  about: string;
  profileImage: string;
}

export interface Innovator {
  name: string;
  designation: string;
  age: number;
  unique: string;
  about: string;
  profileImage: string;
}

export interface SheInspire {
  name: string;
  designation: string;
  age: number;
  unique: string;
  about: string;
  profileImage: string;
}

export interface RisingScholar {
  name: string;
  designation: string;
  age: number;
  unique: string;
  about: string;
  profileImage: string;
}

export interface Innovations {
  name: string;
  founder: string | string[];
  age: number | number[];
  designation: string;
  unique: string;
  story: string;
  logo: string;
}

type Person = {
  name: string;
  designation: string;
  age: number;
  story: string;
  profileImage: string;
};

export const socialActivists: Activist[] = [
  {
    name: "Malala Yousafzai",
    designation: "Education Activist",
    age: 26,
    unique: "Nobel Peace Prize laureate at 17.",
    about:
      "Advocate for girls' education globally, overcoming adversity to champion change.",
    profileImage: "/rising-unicorns/MalalaYousafzai.svg",
  },
  {
    name: "Greta Thunberg",
    designation: "Climate Activist",
    age: 21,
    unique: "Sparked a global youth movement for climate action.",
    about:
      "Environmental activist raising awareness on climate change with global impact.",
    profileImage: "/rising-unicorns/GretaThunberg.svg",
  },
  {
    name: "Marley Dias",
    designation: "Founder of #1000BlackGirlBooks",
    age: 19,
    unique: "Promotes diversity in children's literature.",
    about: "Youth advocate ensuring representation of Black girls in books.",
    profileImage: "/rising-unicorns/MarleyDias.svg",
  },
  {
    name: "Autumn Peltier",
    designation: "Water Rights Activist",
    age: 19,
    unique: "Anishinaabe clean water warrior.",
    about: "Indigenous rights activist fighting for clean water access.",
    profileImage: "/rising-unicorns/AutumnPeltier.svg",
  },
  {
    name: "Emma González",
    designation: "Gun Control Activist",
    age: 24,
    unique: "Co-founded the March For Our Lives movement.",
    about:
      "Leading voice against gun violence in America, inspiring youth activism.",
    profileImage: "/rising-unicorns/meet_the_unicorns/EmmaGonzalez.jpg",
  },
  {
    name: "Amariyanna Copeny (Little Miss Flint)",
    designation: "Water Crisis Advocate",
    age: 16,
    unique: "Vocal advocate for Flint, Michigan's water crisis.",
    about:
      "Youth activist raising awareness and support for clean water initiatives.",
    profileImage: "/rising-unicorns/AmariyannaCopeny.svg",
  },
  {
    name: "Jamie Margolin",
    designation: "Co-founder of Zero Hour",
    age: 22,
    unique: "Youth climate action leader.",
    about:
      "Environmental activist mobilizing young people for climate justice.",
      profileImage: "/rising-unicorns/meet_the_unicorns/JamieMargolin.jpeg",
    },
];

export const entrepreneurs: Entrepreneur[] = [
  {
    name: "Ben Pasternak",
    designation: "Co-founder of Flogg and Monkey",
    age: 24,
    unique: "Created two successful apps by age 16.",
    about:
      "Young tech prodigy disrupting the mobile app industry with innovative social platforms.",
    profileImage: "/rising-unicorns/Benpasternak.png",
  },
  {
    name: "Moziah Bridges",
    designation: "Founder of Mo's Bows",
    age: 22,
    unique: "Launched a bow tie business at age 9.",
    about:
      "Fashion entrepreneur bringing stylish bow ties to a new generation.",
    profileImage: "/rising-unicorns/MoziahBridges.png",
  },
  {
    name: "Leanna Archer",
    designation: "Founder of Leanna's Inc.",
    age: 23,
    unique: "Started her natural hair care line at age 9.",
    about:
      "CEO delivering organic hair products with a focus on health and beauty.",
    profileImage: "/rising-unicorns/meet_the_unicorns/LeannaArcher.jpeg",
  },
  {
    name: "Rachel Zietz",
    designation: "Founder of Gladiator Lacrosse",
    age: 23,
    unique: "Created a multimillion-dollar sports equipment company.",
    about:
      "Entrepreneur revolutionizing the lacrosse industry with quality gear.",
      profileImage: "/rising-unicorns/meet_the_unicorns/RachelZietz.jpeg",
    },
  {
    name: "Jordan Casey",
    designation: "Founder of Casey Games",
    age: 24,
    unique: "One of Europe's youngest app developers.",
    about: "Tech whiz creating engaging and educational mobile games.",
    profileImage: "/rising-unicorns/meet_the_unicorns/JordanCasey.png",
  },
  {
    name: "Cory Nieves",
    designation: "Founder of Mr. Cory's Cookies",
    age: 19,
    unique: "Young baker with a flair for business.",
    about: "Culinary entrepreneur known for his delicious and natural cookies.",
    profileImage: "/rising-unicorns/meet_the_unicorns/CoryNieves.jpeg",
  },
  {
    name: "Alina Morse",
    designation: "Founder of Zollipops",
    age: 19,
    unique: "Invented a healthy lollipop alternative.",
    about: "Young innovator making sugar-free candy fun and nutritious.",
    profileImage: "/rising-unicorns/meet_the_unicorns/AlinaMorse.jpeg",
  },
];

export const innovators: Innovator[] = [
  {
    name: "Gitanjali Rao",
    designation: "Young Scientist and Inventor",
    age: 18,
    unique: '"America\'s Top Young Scientist" at 11.',
    about: "Innovator developing tech solutions for global problems.",
    profileImage: "/rising-unicorns/meet_the_unicorns/GitanjaliRao.jpeg",
  },
  {
    name: "Taylor Wilson",
    designation: "Nuclear Physicist",
    age: 29,
    unique: "Built a nuclear reactor at age 14.",
    about: "Physicist and inventor pushing boundaries in nuclear science.",
    profileImage: "/rising-unicorns/meet_the_unicorns/TaylorWilson.jpg",
  },
  {
    name: "Ann Makosinski",
    designation: "Inventor of the Hollow Flashlight",
    age: 26,
    unique: "Created an energy-efficient flashlight.",
    about: "Young inventor focused on sustainable and innovative solutions.",
    profileImage: "/rising-unicorns/meet_the_unicorns/AnnMakosinski.jpeg",
  },
  {
    name: "Alex Deans",
    designation: "Inventor of iAid",
    age: 23,
    unique: "Developed a navigation device for the visually impaired.",
    about: "Innovator improving accessibility with groundbreaking technology.",
    profileImage: "/rising-unicorns/meet_the_unicorns/AlexDeans.jpeg",
  },
  {
    name: "Easton LaChappelle",
    designation: "Robotic Arm Inventor",
    age: 27,
    unique: "Created a 3D-printed robotic arm.",
    about: "Engineer revolutionizing prosthetics with affordable solutions.",
    profileImage: "/rising-unicorns/meet_the_unicorns/EastonLaChappelle.jpeg",
  },
  {
    name: "Kenneth Shinozuka",
    designation: "Inventor of SafeWander",
    age: 24,
    unique: "Developed a device to monitor dementia patients.",
    about: "Tech innovator enhancing safety and care for the elderly.",
    profileImage: "/rising-unicorns/meet_the_unicorns/KennethShinozuka.jpg",
  },
  {
    name: "Kiara Nirghin",
    designation: "Inventor of Super Absorbent Polymer",
    age: 23,
    unique: "Combating drought with her invention.",
    about: "Environmentalist innovating sustainable agricultural solutions.",
    profileImage: "/rising-unicorns/meet_the_unicorns/KiaraNirghin.jpeg",
  },
];

export const sheInspires: SheInspire[] = [
  {
    name: "Yara Shahidi",
    designation: "Actress and Activist",
    age: 24,
    unique: "Combining Hollywood fame with social activism.",
    about:
      "Advocate for education and diversity, empowering youth to make a change.",
      profileImage: "/rising-unicorns/meet_the_unicorns/YaraShahidi.jpeg",
    },
  {
    name: "Amandla Stenberg",
    designation: "Actress and Activist",
    age: 25,
    unique: "Prominent voice in the Black Lives Matter movement.",
    about: "Using platform to advocate for social justice and LGBTQ+ rights.",
    profileImage: "/rising-unicorns/meet_the_unicorns/AmandlaStenberg.jpeg",
  },
  {
    name: "Zendaya",
    designation: "Actress and Advocate",
    age: 27,
    unique: "Multi-award-winning actress championing inclusivity.",
    about:
      "Influential figure promoting diversity and representation in media.",
      profileImage: "/rising-unicorns/meet_the_unicorns/Zendaya.jpeg",
    },
  {
    name: "Emma Watson",
    designation: "Actress and UN Women Goodwill Ambassador",
    age: 34,
    unique: "Leading voice for gender equality through HeForShe campaign.",
    about: "Actress turned activist advocating for women's rights globally.",
    profileImage: "/rising-unicorns/meet_the_unicorns/EmmaWatson.jpg",
  },
  {
    name: "Rowan Blanchard",
    designation: "Actress and Activist",
    age: 22,
    unique: "Advocate for feminism and LGBTQ+ rights.",
    about: "Young actress using her voice for social change and inclusivity.",
    profileImage: "/rising-unicorns/meet_the_unicorns/RowanBlanchard.jpg",
  },
  {
    name: "Millie Bobby Brown",
    designation: "Actress and UNICEF Goodwill Ambassador",
    age: 20,
    unique: "Youngest UNICEF Goodwill Ambassador.",
    about: "Champion for children's rights and mental health awareness.",
    profileImage: "/rising-unicorns/meet_the_unicorns/MillieBobbyBrown.jpg",
  },
  {
    name: "Billie Eilish",
    designation: "Singer and Mental Health Advocate",
    age: 22,
    unique: "Voice of Gen Z with multiple Grammy wins.",
    about:
      "Using her platform to address mental health issues and body positivity.",
      profileImage: "/rising-unicorns/meet_the_unicorns/BillieEilish.jpg",
    },
];

export const risingScholars: RisingScholar[] = [
  {
    name: "Akintunde Ahmad",
    designation: "Ivy League Student",
    age: 25,
    unique: "Accepted into multiple Ivy League schools.",
    about: "Academic achiever breaking barriers with excellence in education.",
    profileImage: "/rising-unicorns/meet_the_unicorns/AkintundeAhmad.jpeg",
  },
  {
    name: "Katherine Wu",
    designation: "Violin Prodigy and Harvard Student",
    age: 24,
    unique: "Balancing musical talent with academic rigor.",
    about: "Prodigy excelling in both classical music and academic pursuits.",
    profileImage: "/rising-unicorns/meet_the_unicorns/KatherineWu.jpeg",
  },
  {
    name: "Saheela Ibraheem",
    designation: "Harvard Graduate",
    age: 27,
    unique: "Admitted to Harvard at age 15.",
    about: "Academic prodigy with a focus on neuroscience and education.",
    profileImage: "/rising-unicorns/meet_the_unicorns/SaheelaIbraheem.jpg",
  },
  {
    name: "Moshe Kai Cavalin",
    designation: "Child Prodigy",
    age: 26,
    unique: "Earned degrees at a young age.",
    about: "Academic prodigy with a focus on neuroscience and education.",
    profileImage: "/rising-unicorns/meet_the_unicorns/MosheKaiCavalin.jpeg",
  },
];

export const bestInnovations: Innovations[] = [
  {
    name: "Dorsal",
    founder: "Benjamin Stern",
    age: 16,
    designation: "Founder & CEO",
    unique: "Shark conservation tech",
    story:
      "Developed innovative technology to track and protect marine life, gaining significant attention in conservation circles.",
    logo: "/rising-unicorns/Dorsal.png", // Replace with the actual URL
  },
  {
    name: "ReThink",
    founder: "Trisha Prabhu",
    age: 15,
    designation: "Founder",
    unique: "Anti-cyberbullying app",
    story:
      "ReThink detects and stops cyberbullying before it happens, adopted globally by schools and communities for its effectiveness.",
    logo: "/rising-unicorns/Rethink.svg", // Replace with the actual URL
  },
  {
    name: "RecMed",
    founder: "Taylor Rosenthal",
    age: 14,
    designation: "Founder & CEO",
    unique: "First aid vending machines",
    story:
      "Created vending machines that dispense first aid kits, securing substantial interest and investment for rapid expansion.",
    logo: "/rising-unicorns/Recmed.png", // Replace with the actual URL
  },
  {
    name: "Kid Everest",
    founder: ["Luke Li", "Nathaniel Brown"],
    age: 17,
    designation: "Co-founders",
    unique: "Crowdfunding for youth",
    story:
      "Platform tailored for young entrepreneurs to launch their projects, helping numerous teens turn ideas into reality.",
    logo: "/rising-unicorns/KidEverest.svg", // Replace with the actual URL
  },
  {
    name: "Finky",
    founder: "Finlay Hancock",
    age: 16,
    designation: "Founder",
    unique: "Personal finance app",
    story:
      "Helps people manage finances effectively, quickly gaining users and positive reviews for its intuitive design.",
    logo: "/rising-unicorns/Finky.png", // Replace with the actual URL
  },
  {
    name: "Me and the Bees Lemonade",
    founder: "Mikaila Ulmer",
    age: 15,
    designation: "Founder & CEO",
    unique: "Lemonade with a cause",
    story:
      "Sells lemonade with honey and flaxseed, with profits supporting bee conservation; now distributed nationwide.",
    logo: "/rising-unicorns/MeeAndTheBeesLemonade.png", // Replace with the actual URL
  },
  {
    name: "Are You Kidding Socks",
    founder: ["Sebastian Martinez", "Brandon Martinez"],
    age: [7, 10],
    designation: "Founders",
    unique: "Charity-focused socks",
    story:
      "Designs and sells socks, donating proceeds to charities, and their products are now sold in major retail stores.",
    logo: "/rising-unicorns/AreYouKiddingSocks.svg", // Replace with the actual URL
  },
  {
    name: "Erica's Entourage",
    founder: "Erica Johnson",
    age: 15,
    designation: "Founder",
    unique: "Foster care support",
    story:
      "Provides resources and support to foster children, significantly expanding its impact and reach in the community.",
    logo: "/rising-unicorns/EricaEntourage.png", // Replace with the actual URL
  },
  {
    name: "Boys with a Purpose",
    founder: "Zander Babraj",
    age: 17,
    designation: "Founder",
    unique: "Mentorship for boys",
    story:
      "Offers programs for boys to develop leadership skills, growing to serve multiple communities.",
    logo: "/rising-unicorns/BoysWithAPurpose.png", // Replace with the actual URL
  },
  {
    name: "The CoderBunnyz",
    founder: "Samaira Mehta",
    age: 10,
    designation: "Founder",
    unique: "Coding board game",
    story:
      "Board game teaching kids coding concepts, adopted globally by schools and coding programs for its educational value.",
    logo: "/rising-unicorns/CoderBunnyz.svg", // Replace with the actual URL
  },
  {
    name: "ZOLLAR",
    founder: "Alex Knoll",
    age: 16,
    designation: "Founder",
    unique: "Accessibility app",
    story:
      "Helps people with disabilities find accessible places and services, gaining significant media attention and user adoption.",
    logo: "/rising-unicorns/Zollar.png", // Replace with the actual URL
  },
  {
    name: "TQ Intelligence",
    founder: "17-year-old (name unspecified)",
    age: 17,
    designation: "Founder",
    unique: "AI for mental health",
    story:
      "Uses AI to provide mental health assessments and support for underserved communities, experiencing rapid growth and investment.",
    logo: "/rising-unicorns/TQIntelligence.svg", // Replace with the actual URL
  },
];

export const peoples: Person[] = [
  {
    name: "Iqbal Masih",
    designation: "Child laborer, Activist",
    age: 12,
    story: "Iqbal was sold into bonded labor in a carpet factory in Pakistan at the age of four. He escaped at the age of ten and became an outspoken advocate against child labor, working with the Bonded Labour Liberation Front. His efforts brought international attention to the issue. Tragically, he was murdered at the age of 12, allegedly by those opposed to his activism.",
    profileImage: "/rising-unicorns/persons/IqbalMasih.jpeg"
  },
  {
    name: "Anne Frank",
    designation: "Diarist, Holocaust victim",
    age: 15,
    story: "Anne Frank and her family went into hiding to escape the Nazis during World War II. Her diary, documenting her life in hiding, has become one of the most important and poignant records of the Holocaust. She was captured and died in the Bergen-Belsen concentration camp at the age of 15.",
    profileImage: "/rising-unicorns/persons/AnneFrank.jpg"
  },
  {
    name: "Phan Thi Kim Phuc",
    designation: "War survivor, Activist",
    age: 9,
    story: "Kim Phuc was severely burned by napalm during the Vietnam War when she was just nine years old. The photograph of her running in agony became a powerful symbol of the horrors of war. She endured numerous surgeries and immense pain but later became a peace activist.",
    profileImage: "/rising-unicorns/persons/PhanThiKimPhuc.jpg"
  },
  {
    name: "Zlata Filipović",
    designation: "Diarist, Author",
    age: 11,
    story: "Zlata Filipović documented her experiences as a child living through the Bosnian War in Sarajevo. Her diary, often compared to Anne Frank's, provides a harrowing account of life in a war zone. She survived the war and later published her diary, becoming an advocate for peace.",
    profileImage: "/rising-unicorns/persons/ZlataFilipovic.jpg"
  },
  {
    name: "Nkosi Johnson",
    designation: "AIDS Activist",
    age: 12,
    story: "Born HIV-positive in South Africa, Nkosi became a prominent figure in the fight against AIDS. Despite his illness, he spoke at international conferences and advocated for the rights of children with HIV/AIDS. He passed away at the age of 12 but left a lasting legacy.",
    profileImage: "/rising-unicorns/persons/NkosiJohnson.jpeg"
  },
  {
    name: "Sadako Sasaki",
    designation: "Atomic bomb survivor, Symbol of peace",
    age: 12,
    story: "Sadako survived the Hiroshima atomic bombing at the age of two but developed leukemia a decade later. She is remembered for her effort to fold 1,000 paper cranes in the hope of a wish for peace and health. She died at 12, and her story has inspired millions worldwide.",
    profileImage: "/rising-unicorns/persons/SadakoSasaki.jpg"
  },
  {
    name: "Ryan White",
    designation: "AIDS Activist",
    age: 18,
    story: "Ryan contracted HIV through a blood transfusion and faced intense discrimination when trying to return to school. His fight to attend school and live a normal life garnered national attention, helping to change public perceptions of AIDS. He died at the age of 18.",
    profileImage: "/rising-unicorns/persons/RyanWhite.jpeg"
  },
  {
    name: "Sybil Ludington",
    designation: "Revolutionary War heroine",
    age: 16,
    story: "At the age of 16, Sybil rode 40 miles at night to alert American colonial forces to the approach of the British army. Her ride was twice as long as Paul Revere's and significantly aided the revolutionary cause. She lived a full life, but her childhood heroism remains legendary.",
    profileImage: "/rising-unicorns/persons/SybilLudington.jpeg"
  },
  {
    name: "Hector Pieterson",
    designation: "Apartheid victim, Symbol of resistance",
    age: 12,
    story: "Hector was one of the first students killed during the Soweto Uprising in South Africa when police opened fire on protesting students. His death, captured in a haunting photograph, became a symbol of the brutality of apartheid and galvanized international opposition.",
    profileImage: "/rising-unicorns/persons/HectorPieterson.jpg"
  },
  {
    name: "Malala Yousafzai",
    designation: "Activist for girls' education",
    age: 15,
    story: "Malala campaigned for girls' education in Pakistan and was shot in the head by the Taliban for her activism at the age of 15. She survived and continued her advocacy, becoming the youngest-ever Nobel Prize laureate. Her early struggles highlight the dangers faced by young activists.",
    profileImage: "/rising-unicorns/persons/MalalaYousafzai.jpeg"
  }
];
