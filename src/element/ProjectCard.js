import React from "react";
import portfolioGif from "../../src/assets/portfolionew.gif";
import noteItDownGif from "../../src/assets/noteitdownnew.gif";
import rpsGif from "../../src/assets/rpsnew.gif";
import weatherAppGif from "../../src/assets/weatherappnew.gif";
import showerThoughtsGif from "../../src/assets/showerthoughtsnew.gif";
import dndGif from "../../src/assets/dungeonsanddragonsnew.gif";
const ProjectCard = (props) => {
  return (
    <section className="grid gap-10 sm:gap-2 md:grid-cols-2 lg:grid-cols-3">
      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-300 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "layout") &&
            "block") ||
          "-translate-x-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={portfolioGif}
          alt="portfolio project"
          className={`col-span-2 rounded-t  `}
        />

        <button className="col-span-2 place-self-center hover:bg-gray-900">
          <a
            href="https://github.com/zaiydmala/my-portfolio"
            target="_blank"
            rel="noreferrer"
            alt="Live"
          >
            {" "}
            Repository
          </a>
        </button>

        <p className="col-span-2 p-4">
          Well, you're already here! This project was built with React and
          TailwindCSS
        </p>
      </div>

      <div
        className={`grid w-80 scale-100 grid-cols-2  rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "logic") &&
            "block") ||
          "-translate-y-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={noteItDownGif}
          alt="note it down project"
          className={`col-span-2 rounded-t  `}
        />

        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://github.com/zaiydmala/todo-notes"
            target="_blank"
            rel="noreferrer"
            alt="Repository"
          >
            Repository{" "}
          </a>
        </button>

        <button className="hover:bg-gray-900">
          <a
            href="https://zaiydmala.github.io/todo-notes/"
            target="_blank"
            rel="noreferrer"
            alt="Live"
          >
            Live{" "}
          </a>
        </button>

        <p className="col-span-2 p-4">
          NoteItDown, built using Javascript and data-fns to store notes on local storage.
        </p>
      </div>
      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "layout") &&
            "block") ||
          "translate-x-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={weatherAppGif}
          alt="weather app project"
          className={`col-span-2 rounded-t  `}
        />

        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://github.com/zaiydmala/weather-app"
            target="_blank"
            rel="noreferrer"
            alt="Repository"
          >
            Repository{" "}
          </a>
        </button>

        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://zaiydmala.github.io/weather-app/"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Live
          </a>
        </button>

        <p className="col-span-2 p-4">
          WeatherApp, uses HTML geolocation and fetches data from openweather API.
        </p>
      </div>
      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "layout") &&
            "block") ||
          "translate-y-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={showerThoughtsGif}
          alt="admin dashboard"
          className={`col-span-2 rounded-t  `}
        />
        <button className="hover:bg-gray-900">
          <a
            href="https://github.com/zaiydmala/shower-thoughts"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Repository
          </a>
        </button>
        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://showerrthoughts.vercel.app"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Live
          </a>
        </button>
        <p className="col-span-2 p-4">
          A social media feed built with ReactJS and Firebase for backend and authentication.
        </p>
      </div>
      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "logic") &&
            "block") ||
          "-translate-x-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={rpsGif}
          alt="rock paper scissors project"
          className={`col-span-2 rounded-t  `}
        />
        <button className="hover:bg-gray-900">
          <a
            href="https://github.com/zaiydmala/rock-paper-scissors"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Repository
          </a>
        </button>
        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://zaiydmala.github.io/rock-paper-scissors"
            target="_blank"
            rel="noreferrer"
            alt="Repository"
          >
            Live
          </a>
        </button>
        <p className="col-span-2 p-4">
          Play classic rock, paper, scissors game built using Vanilla Javascript.
        </p>
      </div>
      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "logic") &&
            "block") ||
          "translate-x-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={dndGif}
          alt="block talk project animated"
          className={`col-span-2 rounded-t  `}
        />
        <button className="hover:bg-gray-900">
          <a
            href="https://github.com/zaiydmala/dungeonsanddragons"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Repository
          </a>
        </button>
        <button className="hover:bg-gray-900">
          <a
            href="https://zaiydmala.github.io/dungeonsanddragons/"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Live
          </a>
        </button>
        <p className="col-span-2 p-4">
          WizardvMonsters - designed by learning Factory functions, classes & closures.
        </p>
      </div>
    </section>
  );
};

export default ProjectCard;
