import { Icon } from "@iconify-icon/react";

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
    // { icon: "devicon:linux", name: "Linux" },
    // { icon: "devicon:linuxmint", name: "Linux Mint" },
    { icon: "vscode-icons:file-type-jest", name: "Jest" },
    { icon: "vscode-icons:file-type-vitest", name: "Vitest" },
  ];

  return (
    <div className="m-2 my-8 text-stone-700">
      <h1 className="text-4xl">
        Hello,
        <br /> I'm <span className="italic">Selorm</span>!
      </h1>
      <h3 className="text-2xl font-extrabold italic">A Frontend Developer.</h3>
      <p className="my-6">
        I am a frontend developer with a passion for creating beautiful✨ and
        functional web applications. I love to learn new technologies and
        improve my skills💪. I am currently learning Java and Spring boot to
        expand my knowledge.😼
      </p>
      <h3 className="text-2xl font-extrabold">
        What are some of the technologies I use?
      </h3>
      <ul className="techs flex flex-wrap justify-center gap-4 p-1.5 py-5">
        {icons.map((icon) => (
          <li
            key={icon.name}
            className="flex items-center transition-transform duration-300 ease-out transform hover:scale-115 hover:text-shadow-stone-400 hover:text-shadow-sm"
          >
            <Icon
              className="tech shrink-0"
              icon={icon.icon}
              width="32"
              height="32"
            />
            &nbsp;
            <span className="text-sm font-semibold">{icon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
