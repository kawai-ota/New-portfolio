import React from "react";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            芝浦工業大学システム理工学部数理科学科3年生の河合桜汰と申します。4年生からは
            協調制御研究室への配属が確定しており、数理最適化を用いた機械学習の研究をします。
            <br />
            大学2年生の2月頃から本格的にプログラミングの勉強を始め、
            現在は、Knowns株式会社でフロントエンドエンジニアとして長期インターンをしています。
            主な開発言語はTypeScript、Next.jsです。
            <br />
            また、個人開発では塾向けのB to
            Bサービス、旅行をより楽しんでもらえる様なB to
            Cサービスを開発しています。
            使用技術はNext.js,React,Express,TypeScript,TailWind,Prisma,MongoDB,NextAuth,JWT,Pusherなどです。
          </p>
          <p className="about-grid-info-text">
            私たちの時代はどんどんと年金制度も崩壊してきて、一生働き続けるということが当たり前の時代になってくると思っています。
            <br />
            だからこそ、働くときは仕事に熱中できてイキイキと働けるように、休みの日には思いきり楽しめるように、そのような生活を私は提供したいと考えています。
            <br />
            そのため、B to
            Bサービスでは塾向けのサービスを作成していて、無駄な業務を省き、講師の皆様がより働きやすくなる様なサービスを開発しています。
            <br />
            また、B to
            Cサービスでは旅行時に使用でき、各地のホテル、観光地、グルメ、お土産などを一覧で見れたり、お土産のリスト、持ち物リスト、タイムスケージュールなどを管理でき、旅行がより楽しくなるようなサービスを開発しています。
          </p>

          <p className="about-grid-info-text">
            下記リンクは私がポートフォリオ制作中のちょっとしたメモや制作過程を記したブログです。是非ご覧ください。
            <Link
              className="link"
              target="_blank"
              href="https://qiita.com/outahehe"
            >
              My blog!
            </Link>
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
  );
}

export default About;
