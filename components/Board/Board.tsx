import { Alert, View } from "react-native";
import React, { useState } from "react";
import useWinner from "../../hooks/useWinner";
import { Box } from "../Box";
import { Score } from "../Score";
import { styles } from "./Board.styles";

const defaultBoxes: string[] = Array(9).fill("");

export const Board: React.FC = () => {
  const [boxes, setBoxes] = useState<string[]>(defaultBoxes);
  const [player, setPlayer] = useState<string>("x");
  const winner = useWinner(boxes);

  const handleReset = () => {
    setBoxes(defaultBoxes);
  };

  const handlePress = (index: number) => {
    if (boxes[index] !== "") {
      return Alert.alert("Oww, Already Used");
    }

    let updatedBoxes: string[] = [...boxes];

    if (player === "x") {
      updatedBoxes[index] = "x";
      setPlayer("o");
    } else {
      updatedBoxes[index] = "o";
      setPlayer("x");
    }

    setBoxes(updatedBoxes);
  };

  return (
    <View style={styles.container}>
      <Score player={player} winner={winner} handleReset={handleReset} />
      <View style={styles.wrapper}>
        {boxes.map((sign, index) => (
          <Box
            key={index}
            sign={sign}
            handlePress={handlePress}
            index={index}
          />
        ))}
      </View>
    </View>
  );
};
