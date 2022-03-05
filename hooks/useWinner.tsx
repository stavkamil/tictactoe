import { useEffect, useState } from "react";

const useWinner = (possibleWin: string[]) => {
  const [winner, setWinner] = useState<string | null>(null);

  const checkForWinner = (possibleWin: string[]) => {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < possibleWins.length; i++) {
      const [a, b, c] = possibleWins[i];
      if (
        possibleWin[a] &&
        possibleWin[a] === possibleWin[b] &&
        possibleWin[a] === possibleWin[c]
      ) {
        return setWinner(possibleWin[a]);
      }
    }
    return setWinner(null);
  };

  useEffect(() => {
    checkForWinner(possibleWin);
  }, [possibleWin]);

  return winner;
};

export default useWinner;
