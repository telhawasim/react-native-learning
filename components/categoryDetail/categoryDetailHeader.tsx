import { View, Text } from "react-native";
import React from "react";
import BackButton from "../backButton";

interface CategoryDetailHeaderProps {
  onPressBack: () => void;
}
const CategoryDetailHeader = ({ onPressBack }: CategoryDetailHeaderProps) => {
  return (
    <View className="flex-row gap-[17] items-center">
      <BackButton isBackgroundWhite={false} onPress={onPressBack} />
      <View className="h-[50] border-2 border-searchTagBorder rounded-full px-[18] justify-center">
        <Text className="font-Sen-Bold text-[16px]">BURGER</Text>
      </View>
    </View>
  );
};

export default CategoryDetailHeader;
