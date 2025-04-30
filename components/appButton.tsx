import { TouchableOpacity, Text } from "react-native";
import React from "react";

interface AppButtonProps {
  title: string;
  onPress: () => void;
}

const AppButton = ({ title, onPress }: AppButtonProps) => {
  return (
    <TouchableOpacity
      className="w-full h-[62] bg-primary rounded-xl justify-center"
      onPress={onPress}
    >
      <Text className="text-white font-Sen-Bold text-[16px] text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
