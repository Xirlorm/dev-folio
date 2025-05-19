import { Icon } from "@iconify/react";
import { Heart } from "react-feather";

function Footer() {
  return (
    <footer className="">
      <p>
        &copy;2025{" "}
        <span className="text-shadow-stone-300 dark:text-shadow-stone-900 text-shadow-lg font-bold">
          &lt;Selorm/&gt;
        </span>
        . <br />
        All rights reserved.
      </p>
      <p>
        Made with <Heart className="inline text-blue-400 font-bold" size={16} />{" "}
        by Selorm.
      </p>
      <div className="list-none flex gap-4 my-2.5">
        <a href="">
          <Icon
            icon="simple-icons:github"
            width={26}
            height={22}
            className="text-blue-400"
          />
        </a>
        <a href="">
          <Icon
            icon="simple-icons:linkedin"
            width={26}
            height={22}
            className="text-blue-400"
          />
        </a>
        <a href="">
          <Icon
            icon="simple-icons:x"
            width={26}
            height={22}
            className="text-blue-400"
          />
        </a>
        <a href="mailto:https://xirlorm@gmail.com">
          <Icon
            icon="simple-icons:gmail"
            width={26}
            height={22}
            className="text-blue-400"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
