import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/shared/backButton";
import { router } from "expo-router";
import MyAddressRow from "@/components/address/myAddressRow";

const MyAddress = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView className="mx-6">
        <View className="flex-row items-center gap-[16]">
          <BackButton
            isBackgroundWhite={false}
            onPress={() => {
              router.back();
            }}
          />
          <Text className="font-Sen-Regular text-[17px]">My Address</Text>
        </View>
        <View className="mt-[24] gap-[20]">
          <MyAddressRow
            onPressEdit={() => {
              router.navigate("/profile/addAddress");
            }}
          />
          <MyAddressRow onPressEdit={() => {}} />
          <MyAddressRow onPressEdit={() => {}} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MyAddress;
