import { Icon } from "@iconify/react";
import Skill from "@/ui/components/Skill";
import Link from "next/link";

export default function Page() {
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
    <main className="home">
      <section className="my-6">
        <h1 className="text-4xl">
          Hello,
          <br /> I&apos;m Selorm,
        </h1>
        <h2>
          A{" "}
          <span className="text-gray-400 dark:text-zinc-400">
            Frontend Developer
          </span>
          .
        </h2>
        <p className="my-4">
          👋 I'm a front-end web developer with a passion for creating
          beautiful✨ and functional⚙️ web applications... I love learning new
          technologies and improving my skills💪. I'm on a journey🚀 to become a
          full-stack developer, I am currently learning Java and Spring Boot.
        </p>
      </section>
      <section>
        <h2>My Tech Stack</h2>
        <ul className="tech-stack">
          {icons.map((icon) => (
            <Skill icon={icon} key={icon.name} />
          ))}
        </ul>
      </section>
      <section className="font-extrabold text-md my-2">
        Like what you see? 👀{" "}
        <Link href="/about">Let's get acquainted</Link>
      </section>
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="bg-gray-200 text-center rounded-md p-1.5">
          Coming soon...
        </div>
      </section>
      <section id="contacts" className="contacts">
        <h2>How do you reach me?</h2>
        <div>
          <ul>
            {/* remove and place into own component, use loop to create them before showing them here.
          Do same for tech stacks too */}
            <li>
              <Link href="https://www.reddit.com/user/xirlohm">
                <Icon
                  className="contact-icon"
                  icon="simple-icons:reddit"
                  height={28}
                  width={28}
                />
                <span>Reddit</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/xirlorm">
                <Icon
                  className="contact-icon"
                  icon="simple-icons:linkedin"
                  height={28}
                  width={28}
                />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link href="https://x.com/Xirlorm">
                <Icon
                  className="contact-icon"
                  icon="simple-icons:x"
                  height={28}
                  width={28}
                />
                <span>X</span>
              </Link>
            </li>
            <li>
              <Link href="mailto:https://xirlorm@gmail.com">
                <Icon
                  className="contact-icon"
                  icon="simple-icons:gmail"
                  height={28}
                  width={28}
                />
                <span>Email</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
