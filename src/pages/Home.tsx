import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import Skill from "../components/Skill";

function Home() {
  const icons = [
    { icon: "devicon:html5", name: "HTML5" },
    { icon: "devicon:css3", name: "CSS3" },
    { icon: "devicon:javascript", name: "JavaScript" },
    { icon: "devicon:typescript", name: "TypeScript" },
    { icon: "devicon:react", name: "React" },
    { icon: "devicon:tailwindcss", name: "TailwindCSS" },
    { icon: "devicon:sass", name: "Sass" },
    { icon: "devicon:git", name: "Git" },
    { icon: "devicon:github", name: "GitHub" },
    { icon: "devicon:vitejs", name: "ViteJS" },
    { icon: "devicon:webpack", name: "Webpack" },
    { icon: "devicon:vscode", name: "VSCode" },
    { icon: "devicon:neovim", name: "Neovim" },
    { icon: "devicon:linux", name: "Linux" },
    { icon: "devicon:linuxmint", name: "Linux Mint" },
    { icon: "vscode-icons:file-type-jest", name: "Jest" },
    { icon: "vscode-icons:file-type-vitest", name: "Vitest" },
  ];

  return (
    <div className="m-0 text-stone-700 flex flex-col gap-4">
      <section className="my-6">
        <h1 className="text-4xl">
          Hello,
          <br /> I'm Selorm,
        </h1>
        <h3 className="text-2xl font-extrabold">
          A <span className="text-gray-400">Frontend Developer</span>.
        </h3>
        <p className="my-4">
          👋 I'm a front-end web developer with a passion for creating
          beautiful✨ and functional⚙️ web applications... I love learning new
          technologies and improving my skills💪. I'm on a journey🚀 to become a
          full-stack developer, I am currently learning Java and Spring Boot.
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-extrabold">My Tech Stack</h3>
        <ul className="tech-stack">
          {icons.map((icon) => (
            <Skill icon={icon} />
          ))}
        </ul>
      </section>
      <section className="font-extrabold text-md my-2">
        👉 <Link to="/about">Read more about me</Link>
      </section>
      <section className="my-6 ">
        <h3 className="text-2xl font-extrabold">Featured Projects</h3>
        <div className="bg-gray-100 p-1.5 rounded-sm flex justify-center">
          Coming soon...
        </div>
      </section>
      <section id="contacts" className="contacts">
        <h3 className="text-2xl font-extrabold my-2">How do you reach me?</h3>
        <ul className="">
          <li>
            <Link to="https://www.reddit.com/user/xirlohm">
              <Icon
                className="contact-icon"
                icon="simple-icons:reddit"
                width="28"
                height="28"
              />
              <h3>Reddit</h3>
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/xirlorm">
              <Icon
                className="contact-icon"
                icon="simple-icons:linkedin"
                width="28"
                height="28"
              />
              <h3>LinkedIn</h3>
            </Link>
          </li>
          <li>
            <Link to="https://x.com/Xirlorm">
              <Icon
                className="contact-icon"
                icon="simple-icons:x"
                width="28"
                height="28"
              />
              <h3>X</h3>
            </Link>
          </li>
          <li>
            <Link to="mailto:https://xirlorm@gmail.com">
              <Icon
                className="contact-icon"
                icon="simple-icons:gmail"
                width="28"
                height="28"
              />
              <h3>Email</h3>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Home;
