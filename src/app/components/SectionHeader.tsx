import { ChevronDown } from "react-feather";

export default function SectionHeader({
  title,
  expanded,
  setter,
}: {
  title: string;
  expanded: boolean;
  setter: () => void;
}) {
  return (
    <div className="relative px-5 py-5 w-full">
      <h3 className="lowercase first-letter:uppercase">{title}</h3>
      <button
        onClick={setter}
        className={`absolute flex items-center justify-end pr-5 right-0 top-0 w-full h-full`}
      >
        <ChevronDown
          className={`${
            expanded ? "rotate-180" : ""
          } transition-transform duration-300`}
          size={20}
        ></ChevronDown>
      </button>
    </div>
  );
}
