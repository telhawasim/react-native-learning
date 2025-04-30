import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface BackButtonProps {
  onPress: () => void;
  isBackgroundWhite?: boolean;
  icon?: ImageSourcePropType;
}

const BackButton = ({
  onPress,
  isBackgroundWhite = true,
  icon = icons.back,
}: BackButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        className={`h-[50] w-[50] rounded-full ${
          isBackgroundWhite ? "bg-white" : "bg-sidebarBG"
        } justify-center items-center`}
        onPress={onPress}
      >
        <Image className="w-[16] h-[15]" resizeMode="contain" source={icon} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
