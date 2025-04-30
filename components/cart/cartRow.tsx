import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AppDivider from "../shared/appDivider";
import { icons } from "@/constants/icons";

interface CartRowProps {
  onPressCross: () => void;
  onPressMinus: () => void;
  onPressAdd: () => void;
}

const CartRow = ({ onPressCross, onPressMinus, onPressAdd }: CartRowProps) => {
  return (
    <View className="mx-6">
      <View className="flex-row my-[25] items-center">
        <View className="w-[70] h-[65] rounded-xl bg-contentColor"></View>
        <View className=" ml-[25] flex-1">
          <View className="flex-row justify-between items-center">
            <Text className="font-Sen-Bold text-[16px]">Bell Pepper Red</Text>
            <TouchableOpacity onPress={onPressCross}>
              <Image
                className="w-[15] h-[15]"
                tintColor={"#B3B3B3"}
                source={icons.cross}
              />
            </TouchableOpacity>
          </View>
          <Text className="font-Sen-Regular text-[14px] text-priceColor">
            1kg, Price
          </Text>
          <View className="flex-row items-center justify-between mt-[13]">
            <View className="flex-row items-center gap-[17]">
              <TouchableOpacity
                onPress={onPressMinus}
                className="w-[45] h-[45] border border-cartBorder rounded-[17] items-center justify-center"
              >
                <Image
                  className="w-[17] h-[3]"
                  resizeMode="contain"
                  source={icons.minus}
                />
              </TouchableOpacity>
              <Text className="font-Sen-SemiBold text-[16px]">1</Text>
              <TouchableOpacity
                onPress={onPressAdd}
                className="w-[45] h-[45] border border-cartBorder rounded-[17] items-center justify-center"
              >
                <Image
                  className="w-[17] h-[17]"
                  resizeMode="contain"
                  source={icons.add}
                />
              </TouchableOpacity>
            </View>
            <Text className="font-Sen-SemiBold text-[18px]">$4.99</Text>
          </View>
        </View>
      </View>
      <AppDivider />
    </View>
  );
};

export default CartRow;
