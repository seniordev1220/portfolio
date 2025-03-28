"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sport Fishing",
    description: "Sport Fishing",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    previewUrl: "https://bpadventures.com/",
  },
  {
    id: 2,
    title: "Medical Center",
    description: "Medical Center",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.osfhealthcare.org/hospitals/saint-katharine",
  },
  {
    id: 3,
    title: "AI Resume",
    description: "AI Resume",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: "https://ryusume.com/",
  },
  {
    id: 4,
    title: "Football Club",
    description: "Football Club",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.sporteasy.net/",
  },
  {
    id: 5,
    title: "Boxing Club",
    description: "Boxing Club",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.enforcerfitnessclub.com/",
  },
  {
    id: 6,
    title: "LongStoryShort",
    description: "LongStoryShort",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.consumermobile",
  },
  {
    id: 7,
    title: "Coaching App",
    description: "Coaching App",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.insudofactory.athleteanalyzer&hl=en",
  },
  {
    id: 8,
    title: "Healthcare app",
    description: "VCDoctor",
    image: "/images/projects/8.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://itunes.apple.com/us/app/vcdoctor/id1220404225?ls=1&mt=8",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
