import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://github.com/deyrahul123/usercontent/blob/main/IMG-20220906-WA0007.jpg?raw=true"
          }
          alt="Founder"
        />

        <h2>Rahul Dey</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          {/* <a href="https://youtube.com/6packprogrammer" target={"blank"}>
            <AiFillYoutube />
          </a> */}
          <a
            href="https://www.linkedin.com/in/rahul-dey-87b31b12a/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/deyrahul123" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
