import type { InputHTMLAttributes } from "react";

type InputProps = {
  id: string;
  leftText: string;
  value: string;
  setter: (value: string) => void;
};

export default function Input({
  id,
  leftText,
  value,
  setter,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative flex-1 min-w-0">
      <label
        htmlFor={id}
        className="absolute uppercase w-9 text-gray200 left-0 top-0 bottom-0 flex items-center justify-center border-r border-gray300"
      >
        {leftText}
      </label>
      <input
        id={id}
        className="rounded-md text-sm py-2 pr-3 pl-12 w-full bg-secondary tabular-nums"
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value)}
        {...props}
      />
    </div>
  );
}
