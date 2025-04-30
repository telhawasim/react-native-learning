import { TouchableOpacity, Text } from "react-native";
import React from "react";

interface AppButtonProps {
  title: string;
  isOutlined?: boolean;
  height?: number;
  onPress: () => void;
}

const AppButton = ({
  title,
  isOutlined = false,
  height = 62,
  onPress,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      className={`w-full h-[${height}] ${
        isOutlined ? "bg-white" : "bg-primary"
      } rounded-xl justify-center border border-primary`}
      onPress={onPress}
    >
      <Text
        className={`${
          isOutlined ? "text-primary" : "text-white"
        } font-Sen-Bold text-[16px] text-center`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
