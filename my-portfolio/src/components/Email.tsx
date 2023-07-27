import Link from "next/link";
import React from "react";

function Email() {
  return (
    <div className="email">
      <Link href="mailto:bv21053@shibaura-it.ac.jp" className="email-link">
        bv21053@shibaura-it.ac.jp
      </Link>
    </div>
  );
}

export default Email;
