import { View, Text } from "react-native";
import React from "react";
import RestaurantTag from "./restaurantTag";
import { icons } from "@/constants/icons";

const RestaurantCard = () => {
  return (
    <View className="w-full">
      <View className="h-[137] bg-contentColor rounded-[15]"></View>
      <Text className="font-Sen-Regular text-[20px] mt-3">
        Rose Garden Restautant
      </Text>
      <Text className="color-textFieldPlaceholder font-Sen-Regular text-[14px] mt-[2]">
        Burger - Chicken - Riche - Wings
      </Text>
      <View className="flex-row gap-5 mt-[13] items-center">
        <RestaurantTag
          icon={icons.rating}
          text="4.7"
          isBold={true}
          isDelivery={false}
        />
        <RestaurantTag
          icon={icons.delivery}
          text="Free"
          isBold={false}
          isDelivery={true}
        />
        <RestaurantTag
          icon={icons.clock}
          text="20 min"
          isBold={false}
          isDelivery={false}
        />
      </View>
    </View>
  );
};

export default RestaurantCard;
