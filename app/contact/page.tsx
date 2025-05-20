import Note from "@/ui/components/Note";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const contactHeadStyle = "block flex justify-center gap-2 items-center";

export default function Page() {
  return (
    <main>
      <section>
        <h2>Let&apos;s connect!</h2>
        <p>
          I&apos;m always open to new opportunities, collaborations, or freelance
          work.
        </p>
      </section>
      <section className="md:flex md:flex-wrap md:justify-between text-center">
        <div>
          <h3 className={contactHeadStyle}>
            <Icon icon="simple-icons:gmail" className="icon inline" /> Gmail
          </h3>
          <Link href="mailto:https://xirlorm@gmail.com">Xirlorm@gmail.com</Link>
        </div>
        <div>
          <h3 className={contactHeadStyle}>
            <Icon icon="simple-icons:linkedin" className="icon inline" />{" "}
            LinkedIn
          </h3>
          <Link href="">linkedin/in/xirlorm</Link>
        </div>
        <div>
          <h3 className={contactHeadStyle}>
            <Icon icon="devicon-github" className="icon inline" /> Github
          </h3>
          <Link href="https://github.com/Xirlorm">github.com/Xirlorm</Link>
        </div>
        <div>
          <h3 className={contactHeadStyle}>
            <Icon icon="simple-icons:reddit" className="icon inline" /> Reddit
          </h3>
          <Link href="https://reddit.com/user/xirlohm">
            reddit.com/user/xirlohm
          </Link>
        </div>
        <div>
          <h3 className={contactHeadStyle}>
            <Icon icon="simple-icons:x" className="icon inline" /> X
          </h3>
          <Link href="https://x.com/xirlohm">x.com/xirlohm</Link>
        </div>
      </section>
      <section>
        <Note>
          <h3 className="flex items-center gap-1">
            <Icon icon="gis:poi" className="icon inline " /> Location
          </h3>
          Based in Accra, Ghana, I&apos;m available for remote work globally.
        </Note>
      </section>
    </main>
  );
}
