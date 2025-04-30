import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface RatingProps {
  isSelected: boolean;
  onPress: () => void;
}

const Rating = ({ isSelected, onPress }: RatingProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="w-[48] h-[48] bg-white rounded-full justify-center items-center border border-searchTagBorder">
        <Image
          className="w-[18] h-[18]"
          source={icons.star}
          resizeMode="contain"
          tintColor={isSelected ? "#FF7622" : "#EDEDED"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Rating;
