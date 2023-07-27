import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { BiBookOpen } from "react-icons/bi";
import Link from "next/link";

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
    <div className="social-icons">
      <ul className="social-icons-list">
        {SocialIcons.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank" //異なるブラウザで遷移させたいので付加する
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
