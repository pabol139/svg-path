import { useState } from "react";
import { usePathObject } from "@/context/PathContext";
import { scale, translate } from "@/utils/pathUtils";
import { CollapsedSection } from "@/components/CollapsedSection";
import { TransformRow } from "@/components/transformations/TransformRow";

type Coordinates = {
  translate: AxisValues;
  rotate: AxisValues;
  scale: AxisValues;
};

type Axis = "x" | "y";

type AxisValues = {
  x: string;
  y: string;
};

type Action = "translate" | "rotate" | "scale";

export default function TransformSection() {
  const { pathObject, updateCommands } = usePathObject();

  const [coordinates, setCoordinates] = useState<Coordinates>({
    translate: {
      x: "0",
      y: "0",
    },
    rotate: {
      x: "0",
      y: "0",
    },
    scale: {
      x: "1",
      y: "1",
    },
  });

  const updatePosition = (action: Action, axis: Axis, value: string) => {
    setCoordinates((prev) => {
      const finalValue = parseFloat(value) || "";
      return {
        ...prev,
        [action]: { ...prev[action], [axis]: finalValue },
      };
    });
  };

  const handleTranslate = () => {
    updateCommands(
      translate(
        [...pathObject.commands],
        coordinates["translate"].x,
        coordinates["translate"].y
      )
    );
  };
  const handleRotate = () => {
    // updateCommands(
    //   rotate(path, coordinates["rotate"].x, coordinates["rotate"].y)
    // );
  };
  const handleScale = () => {
    updateCommands(
      scale(
        [...pathObject.commands],
        coordinates["scale"].x,
        coordinates["scale"].y
      )
    );
  };

  return (
    <CollapsedSection title="Transforms">
      <div className="px-5 pb-5 space-y-4">
        <TransformRow
          title="Translate"
          action="translate"
          coordinates={coordinates}
          updatePosition={updatePosition}
          handleTransform={handleTranslate}
        ></TransformRow>
        <TransformRow
          title="Scale"
          action="scale"
          coordinates={coordinates}
          updatePosition={updatePosition}
          handleTransform={handleScale}
        ></TransformRow>
      </div>
    </CollapsedSection>
  );
}
