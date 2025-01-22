export default function Input({ leftText }: { leftText: string }) {
  return (
    <div className="relative">
      <label
        htmlFor={leftText}
        className="absolute uppercase w-9 text-gray200 left-0 top-0 bottom-0 flex items-center justify-center border-r border-gray300"
      >
        {leftText}
      </label>
      <input
        id={leftText}
        className="rounded-md text-sm py-2 pr-3 pl-12 max-w-28 bg-secondary"
        type="text"
      />
    </div>
  );
}
