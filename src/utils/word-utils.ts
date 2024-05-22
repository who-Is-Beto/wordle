import wordBank from "../word-bank.json";

export const getRandomWord = () => {
  const randomIndex = Math.floor(
    Math.random() * (wordBank as Array<string>).length
  );
  return (wordBank as Array<string>)[randomIndex];
};
