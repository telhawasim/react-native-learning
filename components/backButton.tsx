import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface BackButtonProps {
  onPress: () => void;
  isBackgroundWhite?: boolean;
}

const BackButton = ({ onPress, isBackgroundWhite = true }: BackButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        className={`h-[50] w-[50] rounded-full ${
          isBackgroundWhite ? "bg-white" : "bg-sidebarBG"
        } justify-center items-center`}
        onPress={onPress}
      >
        <Image className="w-[10] h-[15]" source={icons.back} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
