import { Link } from "react-router-dom";
import Note from "../components/Note";

function About() {
  return (
    <div className="about">
      <div>
        <h2>🧑‍💻 Who I am</h2>
        <p>
          I'm a self-taught frontend developer driven by perseverance and
          curiosity. My passion for programming began in high school, paused
          after graduation, and reignited...without even having a PC.
          <br />
          <br />
          To keep learning, I turned to Termux, running Arch Linux on my Android
          phone with just 1GB of RAM and a quadcore processor. That persistence
          led to my first frontend job, and eventually, my first PC.
          <br />
          <br />
          Whether I'm crafting sleek interfaces or exploring new tech, I
          genuinely enjoy turning ideas into clean, functional code. There's
          nothing quite like seeing your thoughts come to life on screen.
        </p>
        <Note>
          I'm currently open to new opportunities, feel free to{" "}
          <Link to="/#contacts">reach out</Link> if you'd like to work together
          or have a tech conversation!
        </Note>
      </div>
      <div>
        <h2>🛠️ Tech Stack</h2>
        <p>
          Here's a look at the tools I use and those I'm currently exploring:
          <ul>
            <li>
              <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong> React, Tailwind CSS, Sass
            </li>
            <li>
              <strong>Version Control:</strong> Git, GitHub
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Vite, Webpack, VS Code,
              Neovim, Netlify, Vercel
            </li>
            <li>
              <strong>Operating Systems:</strong> Linux, Linux Mint, Ubuntu
            </li>
            <li>
              <strong>In Progress:</strong> Next.js, Java, Spring Boot
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h2>🧠 My creative process</h2>
        <p>
          Sometimes I sketch out ideas on paper, other times I dive right into
          code... I let the moment guide me. When I hit the wall, I either do
          some research if needed or take a break to clear my mind. A walk or
          some memes usually helps and I often return with a new perspective(or
          a lucky guess that works). It can be a cycle but I eventually figure
          it out.
          <br />
          <br /> When inspiration runs dry, I turn to Pinterest for design
          ideas. It helps get the gears turning, but I always aim to create
          something original.
        </p>
      </div>
      <div>
        <h2>🚧 Current Focus</h2>
        <p>
          <ul>
            <li>Deepening my skills in React and component architecture</li>
            <li>
              Learning Java & Spring Boot to expand into full-stack development
            </li>
            <li>Exploring Framer Motion for smooth UI animation</li>
            <li>Building polished, responsive portfolio projects</li>
          </ul>
        </p>
      </div>
      <div>
        <h2>🎨 Outside of code</h2>
        <p>
          Beyond programming, I enjoy exploring and learning 3D modeling in
          Blender, learning to create digital art in GIMP which I hope would
          improve my works in web development, and experimenting with music in
          LMMS. I love expressing creativity across different mediums.
        </p>
      </div>
    </div>
  );
}

export default About;
