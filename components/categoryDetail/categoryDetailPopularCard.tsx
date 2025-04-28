import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface CategoryDetailPopularCardProps {
  width: number;
  onPress: () => void;
  onPressAddCart: () => void;
}

const CategoryDetailPopularCard = ({
  width,
  onPressAddCart,
  onPress,
}: CategoryDetailPopularCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[CategoryDetailPopularCardStyle.card, { width }]}>
        <View className="absolute top-[-40] w-[122] h-[84] bg-contentColor rounded-[15]"></View>
        <View className="absolute bottom-0 w-full px-3 pb-2">
          <Text className="font-Sen-Bold text-[15px] w-full text-start">
            Pizza
          </Text>
          <Text className="font-Sen-Regular text-[13px] color-skipColor mt-1">
            Rose Garden
          </Text>
          <View className="flex-row justify-between items-center pt-1 pb-[5]">
            <Text className="font-Sen-Bold text-[16px]">$40</Text>
            <TouchableOpacity onPress={onPressAddCart}>
              <View className="h-[30] w-[30] rounded-full bg-primary items-center justify-center">
                <Image className="w-[15] h-[15]" source={icons.addCart} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CategoryDetailPopularCardStyle = StyleSheet.create({
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

export default CategoryDetailPopularCard;
