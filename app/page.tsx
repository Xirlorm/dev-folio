"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Tech from "../components/Tech";
import { techStacks } from "../lib/techStacks";
import { contacts } from "../lib/contacts";

export default function Page() {
  const { setActivePage } = useContext(UserContext);

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
          👋 I&apos;m a front-end web developer with a passion for creating
          beautiful✨ and functional⚙️ web applications... I love learning new
          technologies and improving my skills💪. I&apos;m on a journey🚀 to
          become a full-stack developer, I am currently learning Java and Spring
          Boot.
        </p>
      </section>
      <section>
        <h2>My Tech Stack</h2>
        <ul className="tech-stack">
          {techStacks.map((icon) => (
            <Tech icon={icon} key={icon.name} />
          ))}
        </ul>
      </section>
      <section className="font-bold my-2">
        Like what you see? 👀
        <br />
        <Link href="/about" onClick={() => setActivePage("/about")}>
          Let&apos;s get acquainted
        </Link>
      </section>
      <section className="featured-projects">
        <h2>Featured projects</h2>
        <div className="bg-gray-200 text-center rounded-md p-1.5">
          Coming soon...
        </div>
      </section>
      <section id="contacts" className="contacts">
        <h2>Connect with me</h2>
        <div>
          <ul className="my-5">
            {contacts.map((contact) => (
              <li key={contact.name}>
                <Link href={contact.link}>
                  <Icon
                    className="contact-icon"
                    icon={contact.icon}
                    width={28}
                  />
                  <span>{contact.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
