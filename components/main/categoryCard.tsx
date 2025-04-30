import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface CategoryCardProps {
  width: number;
  onPress: () => void;
}

const CategoryCard = ({ onPress, width }: CategoryCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[CategoryCardStyle.card, { width }]}>
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
    </TouchableOpacity>
  );
};

const CategoryCardStyle = StyleSheet.create({
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

export default CategoryCard;
