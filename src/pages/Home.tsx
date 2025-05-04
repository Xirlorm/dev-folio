import { Icon } from "@iconify-icon/react";
import { Link, Links } from "react-router-dom";

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
    <div className="m-2 text-stone-700 flex flex-col gap-4">
      <section className="my-6">
        <h1 className="text-4xl">
          Hello,
          <br /> I'm Selorm,
        </h1>
        <h3 className="text-2xl font-extrabold">
          A <span className="text-gray-400">Frontend Developer</span>.
        </h3>
        <p className="my-4">
          👋 I'm a frontend developer with a passion for creating beautiful✨
          and functional⚙️ web applications... I love learning new technologies
          and improving my skills💪. On my journey🚀 to become a full-stack
          developer, I am currently learning Java and Spring Boot, hoping to
          expand my knowledge😼.
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-extrabold">My Tech Stack</h3>
        <ul className="tech-stack">
          {icons.map((icon) => (
            <li key={icon.name} className="tech">
              <Icon
                className="tech-icon"
                icon={icon.icon}
                width="32"
                height="32"
              />
              <div className="tech-name text-sm font-bold">{icon.name}</div>
            </li>
          ))}
        </ul>
      </section>
      <section className="font-extrabold text-md my-2">
        👉 <Link to="/about">Read more about me</Link>
      </section>
      <section id="contacts" className="contacts">
        <h3 className="text-2xl font-extrabold my-2">How do you reach me?</h3>
        <ul className="">
          <li>
            <Link to="">
              <Icon
                icon="simple-icons:reddit"
                width={28}
                height={28}
              />
              <h3>Reddit</h3>
            </Link>
          </li>
          <li>
            <Link to="">
              <Icon
                icon="simple-icons:linkedin"
                width={28}
                height={28}
              />
              <h3>LinkedIn</h3>
            </Link>
          </li>
          <li>
            <Link to="">
              <Icon
                icon="simple-icons:x"
                width={28}
                height={28}
              />
              <h3>Twitter</h3>
            </Link>
          </li>
          <li>
            <Link to="mailto:https://xirlorm@gmail.com">
              <Icon
                icon="simple-icons:gmail"
                width={28}
                height={28}
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
