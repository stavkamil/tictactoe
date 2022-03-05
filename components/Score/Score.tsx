import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Score.styles";

interface Props {
  player: string;
  winner: string | null;
  handleReset: () => void;
}

export const Score: React.FC<Props> = ({ player, winner, handleReset }) => {
  if (winner) {
    return (
      <>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset Game</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{winner.toUpperCase()} Is The Winner!</Text>
      </>
    );
  }
  return <Text style={styles.text}>{player.toUpperCase()} Is Playing</Text>;
};
