import { Viewbox } from "../types/Viewbox";
import ViewboxSection from "./Section_viewbox";
import TransformSection from "./Section_transform";
import PathSection from "./Section_path";
import StyleSection from "./Section_style";
import CommandsSection from "./Section_commands";

type SiderbarProps = {
  viewbox: Viewbox;
  updateViewbox: (key: keyof Viewbox, value: string) => void;
};

export default function Sidebar({ viewbox, updateViewbox }: SiderbarProps) {
  return (
    <aside className="absolute overflow-auto border-l bg-primary border-secondary top-0 right-0 h-full text-tertiary w-full max-w-[var(--aside-width)]">
      <PathSection />

      <ViewboxSection viewbox={viewbox} updateViewbox={updateViewbox} />

      <TransformSection />

      <StyleSection />

      <CommandsSection />
    </aside>
  );
}
