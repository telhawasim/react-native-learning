import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface FoodDetailSizeProps {
  size: string;
  isSelected: boolean;
  onPress: () => void;
}

const FoodDetailSize = ({ size, isSelected, onPress }: FoodDetailSizeProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`w-[48] h-[48] ${
          isSelected ? "bg-primary" : "bg-searchBG"
        } rounded-full items-center justify-center`}
      >
        <Text
          className={`${
            isSelected ? "font-Sen-Bold" : "font-Sen-Regular"
          } text-[16px] ${isSelected ? "text-white" : "text-black"}`}
        >
          {size}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodDetailSize;
