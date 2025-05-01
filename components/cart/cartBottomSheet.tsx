import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import AppButton from "../shared/appButton";
import { icons } from "@/constants/icons";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

const CartBottomSheet = () => {
  return (
    <View className="mx-6">
      <View className="flex-row justify-between">
        <Text className="font-Sen-Regular text-[14px] text-textFieldPlaceholder">
          DELIVERY ADDRESS
        </Text>
        <TouchableOpacity>
          <Text className="font-Sen-Regular text-[14px] text-primary underline">
            EDIT
          </Text>
        </TouchableOpacity>
      </View>
      <View className="w-full h-[62] bg-textFieldBG rounded-[10] mt-[10] justify-center px-6">
        <BottomSheetTextInput
          value="Awesome"
          placeholder="Enter your address"
          placeholderTextColor={"#A0A5BA"}
          className="font-Sen-Regular text-[16px]"
        />
      </View>
      <View className="flex-row justify-between mt-[30] items-center">
        <View className="flex-row gap-[9] items-center">
          <Text className="font-Sen-Regular text-[14px] text-textFieldPlaceholder">
            TOTAL:
          </Text>
          <Text className="text-[30px] font-Sen-Regular">$96</Text>
        </View>
        <TouchableOpacity>
          <View className="flex-row gap-[5] items-center">
            <Text className="font-Sen-Regular text-primary text-[14px]">
              Breakdown
            </Text>
            <Image
              className="w-[10] h-[10]"
              resizeMode="contain"
              source={icons.rightArrow}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className="my-[30]">
        <AppButton title="PLACE ORDER" onPress={() => {}} />
      </View>
    </View>
  );
};

export default CartBottomSheet;
