import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface LogoutButtonProps {
  onPress: () => void;
}

const LogoutButton = ({ onPress }: LogoutButtonProps) => {
  return (
    <TouchableOpacity
      className="h-[67] bg-logoutBG mt-[52] mx-6 rounded-[19] justify-center"
      onPress={onPress}
    >
      <View className="relative flex-row items-center justify-center">
        <Image
          className="absolute left-6 w-[20] h-[20]"
          resizeMode="contain"
          source={icons.logout}
        />
        <Text className="font-Sen-SemiBold text-[18px] text-primary">
          Log Out
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LogoutButton;
