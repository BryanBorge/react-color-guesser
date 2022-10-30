import { useState, useEffect } from "react";

const hexDigits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const generateRandomColor = () => {
  return new Array(6)
    .fill("")
    .map(() => hexDigits[Math.floor(Math.random() * hexDigits.length)])
    .join("");
};

export const useRandomColor = () => {
  const [colors, setColors] = useState<string[]>();
  const [answer, setAnswer] = useState<string>();

  useEffect(() => {
    generateColorsWithAnswer();
  }, []);

  const generateColorsWithAnswer = () => {
    const answer = `#${generateRandomColor()}`;
    setAnswer(answer);
    setColors(
      [
        answer,
        `#${generateRandomColor()}`,
        `#${generateRandomColor()}`,
        `#${generateRandomColor()}`,
      ].sort(() => 0.5 - Math.random()),
    );
  };

  return { answer, colors, generateRandomColor, generateColorsWithAnswer };
};
