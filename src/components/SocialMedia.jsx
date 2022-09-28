import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/caleb-kyama-774b901a8/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a
          href="https://twitter.com/caleb.kyama"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsTwitter />
        </a>
      </div>

      <div>
        <a
          href="https://www.instagram.com/the_only_kyama/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
