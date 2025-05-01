import { View, Text } from "react-native";
import React from "react";
import AppDivider from "../shared/appDivider";
import AppButton from "../shared/appButton";

const OngoingRow = () => {
  return (
    <View className="gap-[16]">
      <Text className="text-[14px] font-Sen-Regular">Food</Text>
      <AppDivider />
      <View className="flex-row flex-1 gap-[16] items-center">
        <View className="w-[60] h-[60] bg-contentColor rounded-[8]"></View>
        <View className="flex-1 gap-[10]">
          <View className="flex-row justify-between">
            <Text className="text-[14px] font-Sen-Bold">Pizza Hut</Text>
            <Text className="text-[14px] text-skipColor underline">
              #162432
            </Text>
          </View>
          <View className="flex-row gap-[14] items-center">
            <Text className="text-[14px] font-Sen-Bold">$35.25</Text>
            <View className="w-[1] h-[16] bg-verticalDivider"></View>
            <Text className="text-[12px] font-Sen-Regular text-skipColor">
              03 Items
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row flex-1 gap-[30] mt-[8]">
        <View className="flex-1">
          <AppButton title="Track Order" height={48} onPress={() => {}} />
        </View>
        <View className="flex-1">
          <AppButton
            title="Cancel"
            isOutlined={true}
            height={48}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default OngoingRow;
