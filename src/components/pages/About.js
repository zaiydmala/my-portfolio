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
      <div className="flex  flex-col items-center gap-10">
        <img
          src={ProfilePic}
          className="w-48 rounded-full md:w-56"
          style={{ border: "3px solid #3d997d" }}
          alt="profile"
        />
        <p className="max-w-sm font-medium text-white sm:text-sm">
          I'm a programmer that enjoys the thrill of
          learning with a passion to create interactive and minimalist web designs 
          that are visually appealing and easy to use.
          I love applying responsive design principles and watching my webpages shrink into mobile screens and still look amazing. 
          It feels oddly satisfying. I think in a way I am kind of like those web pages;<br/><br/>
          <span>I am moldable, but I still keep my creative flare intact 🔥</span><br/><br/>
          Click here for my{" "}
          <span>
            <a href="https://drive.google.com/file/d/1SFI3StDbgbJgZiK5807YfrVhaeVjwD7p/view?usp=share_link" target="_blank" rel="noreferrer">
              Resume
            </a>
          </span>

        </p>
        

        {/* <p className="max-w-sm font-medium text-white">
           Click here for my{" "}
          <span>
            <a href="https://drive.google.com/file/d/1bmmmHys9qyAPDQPZDvY2f5mY6AY6pa1k/view?usp=share_link" target="_blank" rel="noreferrer">
              Resume
            </a>
          </span>
        </p> */}
      </div>
    </section>
  );
};

export default About;
