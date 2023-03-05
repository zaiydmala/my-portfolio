import React from "react";
import linkedinIcon from "../../assets/linkedin.svg";
import gmailIcon from "../../assets/gmail.svg";
import githubIcon from "../../assets/github.svg";
import whatsappIcon from "../../assets/whatsapp.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen   gap-10 bg-gray-900 py-20 px-2  sm:gap-0 sm:px-40 lg:grid-cols-2"
    >
      <section className="flex flex-col items-center gap-5">
        <h2
          className="border-solid  text-4xl font-extrabold text-white md:text-6xl xl:text-7xl"
          style={{ borderColor: "#3d997d" }}
        >
          Contact <span>Me!</span>
        </h2>
        
        <section className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/zaiyd-mala/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              className="h-16 w-16 hover:scale-125"
              alt=""
            />
          </a>
          <a href="mailto:zaiydhmala@gmail.com">
            <img src={gmailIcon} className="h-16 w-16 hover:scale-125" alt="" />
          </a>

          <a
            href="https://github.com/zaiydmala"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              className="h-16 w-16 hover:scale-125"
              alt=""
            />
          </a>
        </section>
      </section>
    </section>
  );
};

export default Contact;
