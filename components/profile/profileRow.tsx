import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppDivider from "../appDivider";
import { icons } from "@/constants/icons";

interface ProfileRowProps {
  title: string;
  onPress: () => void;
}

const ProfileRow = ({ title, onPress }: ProfileRowProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <View className="flex-row justify-between py-[20] px-[20] items-center">
          <View className="flex-row gap-[20] items-center">
            <Image
              source={icons.cart}
              resizeMode="contain"
              className="w-[20] h-[20]"
              tintColor={"#000000"}
            />
            <Text className="font-Sen-SemiBold text-[18px]">{title}</Text>
          </View>
          <Image
            source={icons.rightArrow}
            resizeMode="contain"
            className="w-[14] h-[14]"
          />
        </View>
        <AppDivider />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileRow;
