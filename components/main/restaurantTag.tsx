import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

interface RestaurantTagProps {
  icon: ImageSourcePropType;
  text: string;
  isBold: boolean;
  isDelivery: boolean;
}

const RestaurantTag = ({
  icon,
  text,
  isBold,
  isDelivery,
}: RestaurantTagProps) => {
  return (
    <View className="flex-row gap-[6] items-center">
      <Image
        className={`${isDelivery ? "w-[23] h-[23]" : "w-[20] h-[20]"}`}
        source={icon}
        resizeMode="contain"
      />
      <Text
        className={`text-[14px] ${
          isBold ? "font-Sen-Bold" : "font-Sen-Regular"
        }`}
      >
        {text}
      </Text>
    </View>
  );
};

export default RestaurantTag;
