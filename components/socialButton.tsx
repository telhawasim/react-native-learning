import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface SocialButtonProps {
  icon: any;
  onPress: () => void;
  backgroundColor: string;
}

const SocialButton = ({
  icon,
  backgroundColor,
  onPress,
}: SocialButtonProps) => {
  return (
    <TouchableOpacity
      className={`h-[62] w-[62] ${backgroundColor} rounded-full justify-center items-center`}
      onPress={onPress}
    >
      <Image source={icon} />
    </TouchableOpacity>
  );
};

export default SocialButton;
