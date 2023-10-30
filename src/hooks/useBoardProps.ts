import { useState } from "react";
import { DEFAULT_COLOR_INDEX } from "../constants";

export const useBoardProps = () => {
  const [boardTitle, setBoardTitle] = useState<string>("");
  const [boardColor, setBoardColor] = useState<number>(DEFAULT_COLOR_INDEX);

  const handleChangeTitle = (text: string) => {
    setBoardTitle(text);
  };

  const handleChangeColor = (number: number) => {
    setBoardColor(number);
  };

  return {
    boardTitle,
    boardColor,
    handleChangeTitle,
    handleChangeColor,
  };
};