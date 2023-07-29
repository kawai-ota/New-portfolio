import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { BiBookOpen } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";

function SocialIcons() {
  const SocialIcons = [
    {
      name: "GitHub",
      icon: <FiGithub />,
      link: "https://github.com/kawai-ota",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/otaaaaa0929/",
    },
    {
      name: "MyBlog",
      icon: <BiBookOpen />,
      link: "https://qiita.com/outahehe",
    },
  ];

  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {SocialIcons.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
