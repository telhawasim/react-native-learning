import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppDivider from "../appDivider";
import { icons } from "@/constants/icons";

const FavouriteRow = () => {
  return (
    <TouchableOpacity>
      <View className="gap-[25] px-6">
        <View className="flex-row justify-between pt-6 items-center">
          <View className="flex-row items-center gap-[30]">
            <View className="w-[31] h-[55] bg-contentColor rounded-[8]"></View>
            <View className="gap-[5]">
              <Text className="font-Sen-Bold text-[16px]">Sprite Can</Text>
              <Text className="font-Sen-Regular text-[14px] text-priceColor">
                325ml, Price
              </Text>
            </View>
          </View>
          <View className="flex-row gap-2 items-center">
            <Text className="font-Sen-SemiBold text-[16px]">$1.50</Text>
            <Image
              className="w-[14] h-[14]"
              resizeMode="contain"
              source={icons.rightArrow}
            />
          </View>
        </View>
        <AppDivider />
      </View>
    </TouchableOpacity>
  );
};

export default FavouriteRow;
