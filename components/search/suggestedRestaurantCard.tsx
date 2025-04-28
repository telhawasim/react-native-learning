import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface SuggestedRestaurantCardProps {
  tag: string;
}

const SuggestedRestaurantCard = ({ tag }: SuggestedRestaurantCardProps) => {
  return (
    <View className="gap-4">
      <View className="flex-row items-center gap-[10]">
        <View className="w-[60] h-[50] bg-contentColor rounded-lg"></View>
        <View className="gap-[6]">
          <Text className="font-Sen-Regular text-[16px]">{tag}</Text>
          <View className="flex-row gap-1 items-center">
            <Image className="w-[15] h-[15]" source={icons.rating} />
            <Text className="font-Sen-Regular text-[16px]">4.7</Text>
          </View>
        </View>
      </View>
      <View className="w-full h-[1.5px] bg-searchTagBorder"></View>
    </View>
  );
};

export default SuggestedRestaurantCard;
