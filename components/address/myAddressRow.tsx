import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface MyAddressRowProps {
  onPressEdit: () => void;
}
const MyAddressRow = ({ onPressEdit }: MyAddressRowProps) => {
  return (
    <View className="flex-row w-full h-[101] bg-textFieldBG rounded-[12] items-center px-[15]">
      <View className="w-[55] h-[55] bg-contentColor rounded-full"></View>
      <View className="flex-1 ml-[14] gap-[9]">
        <View className="flex-row justify-between items-center">
          <Text className="font-Sen-Regular text-[14px]">HOME</Text>
          <View className="flex-row gap-[16]">
            <TouchableOpacity onPress={onPressEdit}>
              <Image
                className="w-[19] h-[19]"
                resizeMode="contain"
                source={icons.edit}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                className="w-[19] h-[19]"
                resizeMode="contain"
                source={icons.delete}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="font-Sen-Regular text-[14px] text-textFieldPlaceholder">
          42-G Hameed Park Johar Town, Lahore, Pakistan
        </Text>
      </View>
    </View>
  );
};

export default MyAddressRow;
