import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Projects() {
  const projectsData = [
    {
      image: "/pam.png",
      projectName: "Personal Apparel Market",
      projectLink: "https://clothing-ec.vercel.app/",
      projectDescription:
        "私は友人が経営するアパレルブランドの携わっています。しかし、経営が全くうまくいっていませんでした。そこで、お客様に商品を届ける機会が不足していたり、商品の宣伝がうまくいっていないことが課題であると感じたので、効果的な商品の宣伝とお客様との接点を提供するプラットフォームを作成しました。",
      projectTech: [
        "Next.js",
        "Typescript",
        "PlanetScale",
        "Stripe",
        "TailWindCSS",
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
        "Ruby on Rails",
        "Typescript",
        "MySQL",
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
                  <Link href={projectLink} legacyBehavior>
                    <a className="project-image-overlay" />
                  </Link>
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
