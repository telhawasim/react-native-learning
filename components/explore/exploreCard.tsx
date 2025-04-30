import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface ExploreCardProps {
  width: number;
}

const ExploreCard = ({ width }: ExploreCardProps) => {
  return (
    <View
      style={{ width: width }}
      className="h-[250] border border-divider rounded-[18] items-center justify-between p-4"
    >
      <View className="w-full items-center">
        <View className="w-[110] h-[110] bg-contentColor rounded-[12]"></View>
        <View className="w-full gap-[5] items-start mt-3">
          <Text className="font-Sen-Bold text-[16px]">Egg Chicken Red</Text>
          <Text className="font-Sen-Regular text-[14px] text-priceColor">
            4pcs, Price
          </Text>
        </View>
      </View>
      <View className="flex-row justify-between w-full items-center">
        <Text className="font-Sen-SemiBold text-[18px]">$1.99</Text>
        <TouchableOpacity className="w-[46] h-[46] bg-primary rounded-[17] items-center justify-center">
          <Image
            source={icons.add}
            resizeMode="contain"
            className="w-[20] h-[20]"
            tintColor={"#FFFFFF"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExploreCard;
