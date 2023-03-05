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
        <p className="max-w-s font-medium text-white">
          I'm a passionate programmer that enjoys the <span>thrill</span> of
          learning. I have a passion for creating interactive and minimalist web designs 
          that are both visually appealing and easy to use.
          With HTML, CSS, React, JavaScript, TypeScript, Git/Github and Webpack under my belt, 
          I have a strong foundation in web development. 
        </p>
        <p className="max-w-s font-medium text-white">
        I love applying responsive design principles and watching my web pages shrink into mobile screens and still look amazing. 
        It feels oddly satisfying 🤌 I think in a way I am kind of like those web pages;<br/><br/>
        <span>I am moldable, but I still keep my creative flare intact🔥</span>
        </p>

        <p className="max-w-s font-medium text-white">  
          { /* I yearn to build products that solve real life problems, and
          have a positive impact in society at large. Talk to me if you need
          someone with the commitment and eagerness to push your product ahead. */ }
           Click here for my{" "}
          <span>
            <a href="https://drive.google.com/file/d/1bmmmHys9qyAPDQPZDvY2f5mY6AY6pa1k/view?usp=share_link" target="_blank" rel="noreferrer">
              Resume
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
