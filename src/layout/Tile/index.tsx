import React, { useEffect, useState } from "react";

interface TileProps {
  value: number | null; // Valor do tile (ex.: 2, 4, 8, etc.)
  isNew: boolean; // Se o tile é novo
  isMerged: boolean; // Se o tile foi mesclado
  position: [number, number]; // Posição no tabuleiro (linha, coluna)
}

const Tile: React.FC<TileProps> = ({ value, isNew, isMerged, position }) => {
  const [classes, setClasses] = useState<string>("");

  // Atualiza as classes CSS sempre que o estado do tile mudar
  useEffect(() => {
    if (value === null) {
      setClasses("grid-square");
    } else {
      let klass = `tile tile_${position[0]}${position[1]} value_${value}`;
      if (isMerged) klass += " merged";
      if (isNew) klass += " new";
      setClasses(klass);
    }
  }, [value, isNew, isMerged, position]);

  return <div className={classes}></div>;
};

export default Tile;
