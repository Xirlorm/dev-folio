import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

interface SkillArg {
  name: string;
  icon: string;
}

function Skill({ icon }: { icon: SkillArg }) {
  return (
    <li key={icon.name} className="tech">
      <Icon className="tech-icon" icon={icon.icon} width="32" height="32" />
      <div className="tech-name text-sm font-bold">{icon.name}</div>
    </li>
  );
}

export default Skill;
