import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface TagProps {
  name: string;
  isSelected?: boolean;
  onPress?: () => void;
}

const Tag = ({ name, isSelected, onPress }: TagProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-[20] py-[14] border border-searchTagBorder rounded-full ${
        isSelected ? "bg-primary" : "bg-white"
      }`}
    >
      <Text
        className={`font-Sen-Regular text-[16px] ${
          isSelected ? "text-white" : "text-black"
        }`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Tag;
