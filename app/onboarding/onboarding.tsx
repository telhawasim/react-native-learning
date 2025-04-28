import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import OnboardingIndicator from "../../components/onboardingIndicator";
import AppButton from "../../components/appButton";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <View className="flex-1 bg-white items-center justify-around px-7">
      <View className="w-[240] h-[292] bg-contentColor rounded-2xl mt-20"></View>
      <View>
        <Text className="font-Sen-ExtraBold text-titleColor text-[24px] text-center">
          All your favorites
        </Text>
        <Text className="font-Sen-Regular text-skipColor text-[16px] text-center mt-5">
          Get all your loved foods in one once place, you just place the order
          we do the rest
        </Text>
        <View className="flex-row justify-center pt-8 gap-3 mb-10">
          <OnboardingIndicator isSelected={index == 0} />
          <OnboardingIndicator isSelected={index == 1} />
          <OnboardingIndicator isSelected={index == 2} />
          <OnboardingIndicator isSelected={index == 3} />
        </View>
      </View>
      <View className="w-full">
        <AppButton
          title="NEXT"
          onPress={() => {
            if (index < 3) {
              setIndex(index + 1);
            } else {
              router.push("/(auth)");
            }
          }}
        />
        <TouchableOpacity onPress={() => router.push("/(drawer)/(tabs)")}>
          <Text className="font-Sen-Regular text-[16px] text-center mt-4 text-skipColor">
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
