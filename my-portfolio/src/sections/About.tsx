import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <>
      <motion.div
        className="about"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <div className="about" id="about">
          <div className="title">
            <h2>About me</h2>
          </div>
          <div className="about-grid">
            <div className="about-grid-info">
              <p className="about-grid-info-text">
                芝浦工業大学システム理工学部数理科学科3年生の河合桜汰と申します。協調制御研究室に配属されており、
                研究ではpythonを用いた数理最適化やグラフ最適化について学びます。
                <br />
                大学2年生の2月頃から本格的にプログラミングの勉強を始め、
                現在は、ノウンズ株式会社でフロントエンドエンジニアとして長期インターンをしています。
                主な開発言語はTypeScript、Reactです。
                <br />
                また、個人開発では友人が経営するアパレルブランドの課題を解決するためのECサイトを開発しました。
                使用技術はNext.js,TypeScript,TailWind,PlanetScale,Stripeなどです。
              </p>
              <p className="about-grid-info-text">
                私のブランドの課題としてはお客様に洋服を届ける機会が不足していたり、商品の宣伝がうまくいっていないことが挙げられました。
                <br />
                そこで、効果的な商品の宣伝とお客様との接点を提供するプラットフォームが必要であると考えました。
                <br />
                そのため、この課題を解決するためにも、ユーザー登録一つで簡単に商品の出品ができて、お客様との接点を提供できるアプリケーションを作成しました。
                <br />
              </p>

              <p className="about-grid-info-text">
                下記は私が使用したことのある主な言語や技術です。
              </p>
              <ul className="about-grid-info-list">
                <li className="about-grid-info-list-item">MATLAB</li>
                <li className="about-grid-info-list-item">Next.js</li>
                <li className="about-grid-info-list-item">React</li>
                <li className="about-grid-info-list-item">Typescript</li>
                <li className="about-grid-info-list-item">Express</li>
                <li className="about-grid-info-list-item">Ruby on Rails</li>
                <li className="about-grid-info-list-item">MongoDB</li>
                <li className="about-grid-info-list-item">TailWind</li>
                <li className="about-grid-info-list-item">CSS,SCSS</li>
              </ul>
            </div>
            <div className="about-grid-photo">
              <div className="overlay"></div>
              <div className="overlay-border"></div>
              <div className="about-grid-photo-container">
                <Image src="/myprofile.jpeg" alt="myprofile" fill />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
