import React from "react";
import ProfilePic from "../../assets/display.JPG";

const About = () => {
  return (
    <section
      className="grid h-screen scroll-px-2 place-items-center bg-gray-900 sm:px-40 md:grid-cols-2"
      id="about"
    >
      <h5 className="  text-6xl font-extrabold text-gray-500 md:text-8xl xl:text-9xl">
        Hello!
        <br />
        World
      </h5>
      <div className="flex  flex-col items-center gap-4">
        <img
          src={ProfilePic}
          className="w-48 rounded-full md:w-56"
          style={{ border: "3px solid #3d997d" }}
          alt="profile"
        />
        <p className="max-w-xs font-medium text-white sm:text-sm">
          I'm a programmer who yearns to build products that solve real-life problems and have a positive impact in society.
          Big fan of applying responsive design principles and watching my webpages shrink into mobile screens yet still look amazing. 
          It feels oddly satisfying. 
        </p>
        <p className="max-w-xs font-medium text-white sm:text-sm">
          In a way I am kind of like those web pages;<span> I am moldable, but I still keep my creative flare intact🔥</span><br/><br/>
          Click here for my{" "}
          <span>
            <a href="https://drive.google.com/file/d/1GP-2WNQifj6trYw2SKYjDJc6UYB0JrJq/view?usp=sharing" target="_blank" rel="noreferrer">
              Resume
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
