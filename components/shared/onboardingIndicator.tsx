import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface OnboardingIndicatorProps {
  isSelected: boolean;
}

const OnboardingIndicator = ({ isSelected }: OnboardingIndicatorProps) => {
  const bgColor = useSharedValue("#FFE1CE");

  useEffect(() => {
    bgColor.value = withTiming(isSelected ? "#FF7622" : "#FFE1CE", {
      duration: 200,
    });
  }, [isSelected]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: bgColor.value,
    };
  });

  return (
    <Animated.View
      className={`w-[10] h-[10] rounded-full ${
        isSelected ? "bg-primary" : "bg-unselectedIndicator"
      }`}
      style={animatedStyle}
    ></Animated.View>
  );
};

export default OnboardingIndicator;
