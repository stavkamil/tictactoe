import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Box.styles";

interface Props {
  sign: string;
  handlePress: (index: number) => void;
  index: number;
}

export const Box: React.FC<Props> = ({ sign, handlePress, index }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(index)} style={styles.wrapper}>
      <Text style={styles.text}>{sign.toUpperCase() || ""}</Text>
    </TouchableOpacity>
  );
};
