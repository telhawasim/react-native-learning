import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import BackButton from "../backButton";
import { icons } from "@/constants/icons";

interface SearchHeaderProps {
  onPressBack: () => void;
  onPressCart: () => void;
}

const SearchHeader = ({ onPressBack, onPressCart }: SearchHeaderProps) => {
  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row gap-4 items-center">
        <BackButton isBackgroundWhite={false} onPress={onPressBack} />
        <Text className="font-Sen-Regular text-[17px]">Search</Text>
      </View>
      <TouchableOpacity onPress={onPressCart}>
        <View className="w-[45] h-[45] bg-appleColor rounded-full justify-center items-center">
          <Image
            className="w-[20] h-[20]"
            resizeMode="contain"
            source={icons.cart}
          />
          <View className="absolute top-[-5] right-[-5] w-[25] h-[25] bg-primary rounded-full justify-center items-center">
            <Text className="font-Sen-Bold text-[16px] color-white">2</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;
