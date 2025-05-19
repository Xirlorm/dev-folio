import Note from "@/ui/components/Note";
import Link from "next/link";

function About() {
  return (
    <main>
      <section>
        <h2>🧑‍💻 Who I am</h2>
        <p>
          I'm a self-taught frontend developer based in Ghana, driven by perseverance and
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
      </section>{" "}
      <Note>
        I'm currently open to new opportunities, feel free to{" "}
        <Link href="/contact">reach out</Link> if you'd like to work together
        or have a tech conversation!
      </Note>
      <section className="tech-stacks">
        <h2>🛠️ Tech Stack</h2>
        <div>
          Here's a look at the tools I use and those I'm currently exploring:
          <div>
            <strong>Languages</strong> <br /> HTML, CSS, JavaScript, TypeScript
          </div>
          <div>
            <strong>Frameworks & Libraries</strong> <br /> React, Next.JS, Tailwind CSS,
            Sass
          </div>
          <div>
            <strong>Version Control</strong> <br /> Git, GitHub
          </div>
          <div>
            <strong>Tools & Platforms</strong> <br /> Vite, Webpack, VS Code,
            Neovim, Netlify, Vercel
          </div>
          <div>
            <strong>Systems</strong> <br /> Linux, Linux Mint, Ubuntu
          </div>
          <div>
            <strong>In Progress</strong> <br />Java, Spring Boot, Figma, GIMP, Inkscape
          </div>
        </div>
      </section>
      <section>
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
      </section>
      <section>
        <h2>🚧 Current Focus</h2>
        <div>
          <ul>
            <li>Deepening my skills in React and component architecture</li>
            <li>
              Learning Java & Spring Boot to expand into full-stack development
            </li>
            <li>Exploring Framer Motion for smooth UI animation</li>
            <li>Building polished, responsive portfolio projects</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>🎨 Outside of code</h2>
        <p>
          Beyond programming, I enjoy exploring and learning 3D modeling in
          Blender, learning to create digital art in GIMP which I hope would
          improve my works in web development, and experimenting with music in
          LMMS. I love expressing creativity across different mediums.
        </p>
      </section>
    </main>
  );
}

export default About;
