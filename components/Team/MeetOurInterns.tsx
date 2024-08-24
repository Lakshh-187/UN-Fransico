import React from "react";

const data = [
  {
    name: "Melati & Isabel Wijsen",
    title: "Environmental Activists",
    description:
      "Activism against single-use plastic began at age of 10 & 12 and grew into a global movement.",
    image: "/rising-unicorns/pic1.svg", // Replace with actual image path
  },
  {
    name: "Marley Dias",
    title: "Literacy Activist",
    description:
      "At 11 she started #1000BlackGirlBooks by collecting and donating books .",
    image: "/rising-unicorns/pic2.svg", // Replace with actual image path
  },
  {
    name: "Emma González",
    title: "Gun Control Activist",
    description:
      "Survived the Parkland school shooting co-founded a prominent gun control movement at 18 years of age.",
    image: "/rising-unicorns/pic3.svg", // Replace with actual image path
  },
  {
    name: "Kevin Doe",
    title: "Young Inventor",
    description:
      "Inventor tinkering with technology at 11 years old to address local issues after a civil war",
    image: "/rising-unicorns/pic4.svg", // Replace with actual image path
  },
  {
    name: "Greta Thunberg",
    title: "Environmental Activist",
    description:
      "Started a global movement at the age of 15 to combat climate change",
    image: "/rising-unicorns/pic5.svg", // Replace with actual image path
  },
  {
    name: "Nicholas Lowinger",
    title: "Founder of Gotta Have Sole",
    description:
      "Started a charitable organization providing footwear to children in homeless shelters as a tween.",
    image: "/rising-unicorns/pic6.svg", // Replace with actual image path
  },
  {
    name: "Jaylen Arnold",
    title: "Founder- Jaylen Challenge Foundation",
    description:
      "Educate children about bullying & promote understanding of differences.",
    image: "/rising-unicorns/pic10.svg", // Replace with actual image path
  },
  {
    name: "Jahkil Jackson",
    title: "Founder of Project I Am",
    description:
      'Organization to provide "Blessing Bags" filled with essentials to homeless people at 9 years of age.',
    image: "/rising-unicorns/pic7.svg", // Replace with actual image path
  },
  {
    name: "Malala Yousafzai",
    title: "Education Advocate and Nobel Laureate",
    description:
      "Survived attempted assassination by the Taliban & became a global symbol for girls' education at 17 years.",
    image: "/rising-unicorns/pic8.svg", // Replace with actual image path
  },
  {
    name: "Ryan Hickman",
    title: "Founder of Ryan’s Recycling",
    description:
      'Organization to provide "Blessing Bags" filled with essentials to homeless people at 9 years of age.',
    image: "/rising-unicorns/pic9.svg", // Replace with actual image path
  },
];

const MeetOurInterns = () => {
  const colors = ["#5068A947", "#86A6DF", "#324E7B94", "#002D76C2"];
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-center bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 md:gap-6 gap-2">
          <div className="col-span-2 border-2 border-[#002D76] flex items-center justify-center rounded-2xl p-5 lg:p-0">
            <h3 className="text-5xl font-semibold text-[#002D76]">
              Meet Our Interns
            </h3>
          </div>
          {data.map((person, index) => {
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            return (
              <PersonCard
                key={index}
                name={person.name}
                title={person.title}
                description={person.description}
                image={person.image}
                backgroundColor={randomColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetOurInterns;

interface PersonCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  title,
  description,
  image,
  backgroundColor,
}) => {
  return (
    <div
      style={{ backgroundColor }}
      className={`rounded-lg shadow-md p-4 flex flex-col items-center bg-${backgroundColor}`}
    >
      <img
        src={image}
        alt={name}
        className="h-24 w-24 rounded-full mb-4 object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold text-center">{name}</h2>
        <h3 className="text-md text-black font-medium text-center">{title}</h3>
        <p className="text-sm text-black mt-2 text-center">{description}</p>
      </div>
    </div>
  );
};
