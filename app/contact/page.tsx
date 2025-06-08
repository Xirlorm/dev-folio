import Note from "../../components/ui/Note";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { contacts } from "../../data/contacts";

const contactHeadStyle = "block flex justify-center gap-2 items-center";

export default function Page() {
  return (
    <main>
      <section>
        <h2>Let&apos;s connect!</h2>
        <p>
          I&apos;m always open to new opportunities, collaborations, or
          freelance work.
        </p>
      </section>
      <section className="md:flex md:flex-wrap md:justify-between text-center">
        {contacts.map((item) => (
          <div key={item.name}>
            <h3 className={contactHeadStyle}>
              <Icon icon={item.icon} className="icon inline" /> {item.name}
            </h3>
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              {item.link.replace(/https?:\/\//, "").replace(/www\./, "")}
            </Link>
          </div>
        ))}
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
