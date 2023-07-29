import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <>
      <motion.div
        className="contact"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
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
      </motion.div>
    </>
  );
}

export default Contact;
