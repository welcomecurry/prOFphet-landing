import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden z-[20]"
      style={{ transform: "scale(0.9)", marginTop: "-8rem" }}
    >
      <SkillText />
      <div>
        <a
          className="z-1 mt-4 indexgroup flex items-center justify-between gap-4 rounded-lg border border-current bg-white/20 px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
          href="https://chromewebstore.google.com/detail/profphet-ai-chatbot-for-o/omojidakhdcgakihbljcgijdiooihnhg?hl=en"
        >
          <span className="text-white font-medium transition-colors group-hover:text-white">
            {" "}
            Try now!{" "}
          </span>

          <span className="shrink-0 rounded-full border border-indigo-600  bg-gradient-to-r from-purple-500 to-cyan-500 p-2 group-active:border-indigo-500">
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Skills;
