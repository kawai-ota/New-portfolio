import React, { useEffect, useState } from "react";

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 3.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: "東京個別指導学院",
      role: "講師",
      start: "2021年4月",
      end: "2023年3月",
      shortDescription: [
        "東京個別指導学院に2年間講師として、小学1年生から高校3年生まで数学、理科、英語を指導し、2年次にはリーダー講師を経験しました",
      ],
    },
    {
      name: "武田塾",
      role: "講師",
      start: "2021年10月",
      end: "2023年3月",
      shortDescription: [
        "講師として、高校1年生から高校3年生までの数学、物理、化学、英語の指導をしました",
      ],
    },
    {
      name: "Alleeks株式会社",
      role: "中期インターン(フロントエンドエンジニア)",
      start: "2023年3月",
      end: "2023年5月",
      shortDescription: [
        "Your Connectというコールセンター向けシステムの運用保守、テストの実施を行ないました。",
      ],
    },
    {
      name: "株式会社ラクス",
      role: "エンジニアインターン",
      start: "2023年7月",
      end: "2023年8月",
      shortDescription: [
        "RAKUS Tech Labという5日間のハッカソンに参加し、チームでチャットアプリを作成しました。チーム内で必要な要件、顧客からの要望を組み込む形で本格的なチーム開発を行い、最終日には発表を行いました。",
      ],
    },
    {
      name: "Knowns株式会社",
      role: "長期インターン(フロントエンドエンジニア)",
      start: "2023年6月",
      end: "現在",
      shortDescription: [
        "Knowns Bizというポイ活アプリのβ版のリニューアルに携わっています。また、8月からは社内システムの改修、9月にはノーコードで書かれているHPをNext.jsを使用して書き換えます。",
      ],
    },
  ];
  return (
    <div className="experience" id="experience">
      <div className="title">
        <h2>My Career</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details-position">
          <h3>
            <span>{experiences[selected].role}</span>
          </h3>
          <p className="exp-details-range">
            {experiences[selected].start}-{experiences[selected].end}
          </p>
          <ul className="exp-details-list">
            {experiences[selected].shortDescription.map(
              (description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
