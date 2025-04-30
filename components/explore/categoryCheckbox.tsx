import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface CategoryCheckBoxProps {
  isChecked: boolean;
  title: string;
  onPress: () => void;
}

const CategoryCheckBox = ({
  isChecked,
  title,
  onPress,
}: CategoryCheckBoxProps) => {
  return (
    <View className="flex-row items-center gap-[11]">
      <TouchableOpacity onPress={onPress}>
        <Image
          className="w-[24] h-[24]"
          resizeMode="contain"
          source={isChecked ? icons.checkBoxSelected : icons.checkBox}
        />
      </TouchableOpacity>
      <Text
        className={`font-Sen-Regular text-[16px] ${
          isChecked ? "text-primary" : "text-black"
        }`}
      >
        {title}
      </Text>
    </View>
  );
};

export default CategoryCheckBox;
