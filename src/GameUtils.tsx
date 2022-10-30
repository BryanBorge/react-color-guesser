// Valid hex digits are 0-9 and A-F
const hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

/**
 * Generates a valid 6 digit hex number without the leading pound sign
 * @returns Random hex color
 */
const generateRandomColor = () => {
  return new Array(6)
    .fill("")
    .map(() => hexDigits[Math.floor(Math.random() * hexDigits.length)])
    .join("");
};

/**
 * Generates an array with 4 random colors. One of which is the correct answer.
 * Returns an object containing the answer and the color array
 * @returns answer: string, colors: string[]
 */
export const generateColorsWithAnswer = () => {
  const answer = `#${generateRandomColor()}`;
  //Randomly sort the colors so the answer isnt always first
  const colors = [
    answer,
    `#${generateRandomColor()}`,
    `#${generateRandomColor()}`,
    `#${generateRandomColor()}`,
  ].sort(() => 0.5 - Math.random());

  return { answer, colors };
};
