export default function Command({
  letter,
  coordinates,
}: {
  letter: string;
  coordinates: string[];
}) {
  return (
    <div className="flex">
      <div className="rounded-tl-md text-sm px-2 py-1 w-8 bg-purple text-center rounded-bl-md">
        {letter}
      </div>
      {coordinates.map((coordinate, key) => {
        return (
          <div
            key={key}
            className="flex items-center bg-secondary text-xs border-r border-gray300 w-10 justify-center  last:rounded-tr-md last:rounded-br-md last:border-none"
          >
            <span className="">{coordinate}</span>
          </div>
        );
      })}
    </div>
  );
}
