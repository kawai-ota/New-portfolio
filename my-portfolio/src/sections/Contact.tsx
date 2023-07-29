import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">My Contact</h2>
      <h2 className="contact-sub-title">Contact For Me!</h2>
      <p className="contact-text">
        下記が私の連絡メールアドレスになっております。よろしくお願いいたします。
      </p>
      <div className="contact-cta">
        <Button text="Contact" link="mailto:bv21053@shibaura-it.ac.jp" />
      </div>
    </div>
  );
}

export default Contact;
