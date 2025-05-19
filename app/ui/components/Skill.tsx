import React from "react";
import { Icon } from "@iconify/react";

interface SkillArg {
  name: string;
  icon: string;
}

export default function Skill({ icon}: { icon: SkillArg }) {
  return (
    <li className="tech flex items-center gap-0.5">
      <Icon className="tech-icon" icon={icon.icon}/>
      <span className="text-sm font-bold">{icon.name}</span>
    </li>
  );
}
