import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface MainHeaderProps {
  onPressSidebar: () => void;
  onPressCart: () => void;
  onPressAddress: () => void;
}

const MainHeader = ({
  onPressSidebar,
  onPressCart,
  onPressAddress,
}: MainHeaderProps) => {
  return (
    <View className="flex-row justify-between">
      <View className="flex-row gap-[18] items-center">
        <TouchableOpacity onPress={onPressSidebar}>
          <View className="w-[45] h-[45] bg-sidebarBG rounded-full justify-center items-center">
            <Image className="w-[16] h-[12]" source={icons.sidebar} />
          </View>
        </TouchableOpacity>
        <View className="gap-[3]">
          <Text className="color-primary font-Sen-Bold text-[12px]">
            DELIVER TO
          </Text>
          <TouchableOpacity onPress={onPressAddress}>
            <View className="flex-row items-center gap-2">
              <Text className="font-Sen-Regular text-[14px] color-addressFG">
                Halal Lab office
              </Text>
              <Image
                className="w-[10.75] h-[7.68]"
                source={icons.arrowDown}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onPressCart}>
        <View className="w-[45] h-[45] bg-appleColor rounded-full justify-center items-center">
          <Image
            className="w-[20] h-[20]"
            resizeMode="contain"
            source={icons.cart}
          />
          <View className="absolute top-[-5] right-[-5] w-[25] h-[25] bg-primary rounded-full justify-center items-center">
            <Text className="font-Sen-Bold text-[16px] color-white">2</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
