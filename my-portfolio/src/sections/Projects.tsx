import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "For Cram Teacher",
      projectLink: "https://netlify.com",
      projectDescription:
        "このアプリは塾の講師や教室長など、塾で勤務されている方々に向けて作成しました。私が勤務していた塾ではデジタル化が進んでおらず、紙で講師のスケジュールやタスクを管理したり、有給申請を紙で行い、教室長のチェックをもらうなど無駄な業務が多かった職場でした。そこで無駄な業務を無くして、講師の方々や教室長の負担を減らしたいと考えてこのサービスを作成しました。",
      projectTech: [
        "React",
        "Redux",
        "Next.js",
        "Typescript",
        "Express",
        "MongoDB",
        "SCSS",
        "Prisma",
        "NextAuth",
      ],
    },
    {
      image: "/project2.png",
      projectName: "Let's Fun!",
      projectLink: "https://netlify.com",
      projectDescription:
        "このアプリは旅行者に向けて作成しています。旅行は「どこに行こうか、何を食べようか、どんなお土産があるのか」などを調べることも旅行の醍醐味であると思っています。そのため、旅行を調べる段階から更に楽しんでもらいたいと考えてこのアプリを作成しました。近くのホテル、グルメ、お土産などを調べたり、持ち物リスト、スケジュール管理表などを実装します。",
      projectTech: [
        "React",
        "Redux",
        "Next.js",
        "Typescript",
        "Express",
        "MongoDB",
        "SCSS",
        "Prisma",
        "NextAuth",
      ],
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>My Work</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Project Name</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
