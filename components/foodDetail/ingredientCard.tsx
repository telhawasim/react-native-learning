import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const IngredientCard = () => {
  return (
    <View className="w-[50] h-[50] bg-ingredientsBG rounded-full items-center justify-center">
      <Image
        className="w-[25] h-[25]"
        resizeMode="contain"
        source={icons.salt}
      />
    </View>
  );
};

export default IngredientCard;
