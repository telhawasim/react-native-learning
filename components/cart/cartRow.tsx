import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface CartRowProps {
  isEditMode: boolean;
}

const CartRow = ({ isEditMode }: CartRowProps) => {
  return (
    <View className="flex-row items-center gap-[20]">
      <View className="w-[136] h-[117] bg-contentColor rounded-[25]"></View>
      <View className="flex-1 gap-[8]">
        <View className="flex-row justify-between items-start">
          <Text
            className="text-[18px] font-Sen-Regular mr-[8]"
            numberOfLines={2}
          >
            Pizza Calzone European
          </Text>
          {isEditMode && (
            <TouchableOpacity className="w-[27] h-[27] bg-deleteColor rounded-full items-center justify-center">
              <Image
                className="w-[9] h-[9]"
                source={icons.cross}
                resizeMode="contain"
                tintColor={"#ffffff"}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text className="text-[20px] font-Sen-Bold">$64</Text>
        <View className="flex-row justify-between items-center">
          <Text className="flex-[18px] font-Sen-Regular text-skipColor">
            14"
          </Text>
          <View className="flex-row gap-[15] items-center">
            <TouchableOpacity className="w-[25] h-[25] bg-skipColor rounded-full items-center justify-center">
              <Image
                className="w-[8] h-[2]"
                source={icons.minus}
                resizeMode="contain"
                tintColor={"#ffffff"}
              />
            </TouchableOpacity>
            <Text className="text-[16px] font-Sen-Bold">1</Text>
            <TouchableOpacity className="w-[25] h-[25] bg-skipColor rounded-full items-center justify-center">
              <Image
                className="w-[8] h-[8]"
                resizeMode="contain"
                source={icons.add}
                tintColor={"#ffffff"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartRow;
