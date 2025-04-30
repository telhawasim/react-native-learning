import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface PopularFoodCardProps {
  width: number;
}
const PopularFoodCard = ({ width }: PopularFoodCardProps) => {
  return (
    <View style={[PopularFoodCardStyle.card, { width }]}>
      <View className="absolute top-[-30] w-[122] h-[104] bg-contentColor rounded-[15]"></View>
      <View className="absolute bottom-0 w-full px-3 pb-2">
        <Text className="font-Sen-Bold text-[18px] w-full text-start">
          Pizza
        </Text>
        <View className="flex-row justify-between items-center py-2">
          <Text className="font-Sen-Regular text-[14px] color-skipColor">
            Starting
          </Text>
          <Text className="font-Sen-Regular text-[16px]">$70</Text>
        </View>
      </View>
    </View>
  );
};

const PopularFoodCardStyle = StyleSheet.create({
  card: {
    height: 144,
    backgroundColor: "white",
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    alignItems: "center",
    position: "relative",
    overflow: "visible",
    marginHorizontal: 4,
  },
  androidShadow: {
    elevation: 5,
  },
});

export default PopularFoodCard;
