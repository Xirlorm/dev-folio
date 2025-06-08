import Tech from "./ui/Tech";

export default function Technologies({
  techStacks,
}: {
  techStacks: { name: string; icon: string }[];
}) {
  return (
    <ul className="tech-stack">
      {techStacks.map((icon) => (
        <Tech icon={icon} key={icon.name} />
      ))}
    </ul>
  );
}
