import { View, Text, Image, TextInput, Platform } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/shared/backButton";
import { router } from "expo-router";
import { icons } from "@/constants/icons";
import AddressLabel from "@/components/address/addressLabel";
import AppButton from "@/components/shared/appButton";

const AddAddress = () => {
  var isAndroid = Platform.OS === "android";
  const [address, setAddress] = useState(
    "3235 Royal Ln. Mesa, New Jersy 34567"
  );
  const [street, setStreet] = useState("3235 Royal Ln.");
  const [postCode, setPostCode] = useState("34567");
  const [apartment, setApartment] = useState("345");
  const [selectedLabel, setSelectedLabel] = useState("Home");
  return (
    <ScrollView className="flex-1 bg-white">
      <View>
        <View className="relative">
          <View className="h-[295] bg-contentColor"></View>
          <View
            className={`absolute ${
              isAndroid ? "top-[30]" : "top-[60]"
            } left-6 right-0`}
          >
            <BackButton onPress={() => router.back()} />
          </View>
        </View>
        <View className="mt-6 gap-6">
          <View className="px-6 gap-2">
            <Text className="font-Sen-Regular text-[14px]">ADDRESS</Text>
            <View className="flex-row items-center gap-3 bg-textFieldBG h-[50] rounded-[10] px-6">
              <Image className="w-[14] h-[20]" source={icons.pin} />
              <TextInput
                className="font-Sen-Regular text-[14px] flex-1"
                placeholder="Enter your address"
                value={address}
                onChangeText={setAddress}
              />
            </View>
          </View>
          <View className="flex-row items-center px-6 gap-6">
            <View className="flex-1 gap-2">
              <Text className="font-Sen-Regular text-[14px]">STREET</Text>
              <View className="bg-textFieldBG h-[50] rounded-[10] px-6">
                <TextInput
                  className="font-Sen-Regular text-[14px] flex-1"
                  placeholder="Enter your address"
                  value={street}
                  onChangeText={setStreet}
                />
              </View>
            </View>
            <View className="flex-1 gap-2">
              <Text className="font-Sen-Regular text-[14px]">POST CODE</Text>
              <View className=" bg-textFieldBG h-[50] rounded-[10] px-6">
                <TextInput
                  className="font-Sen-Regular text-[14px] flex-1"
                  placeholder="Enter your address"
                  value={postCode}
                  onChangeText={setPostCode}
                />
              </View>
            </View>
          </View>
          <View className="gap-2 px-6">
            <Text className="font-Sen-Regular text-[14px]">APARTMENT</Text>
            <View className=" bg-textFieldBG h-[50] rounded-[10] px-6">
              <TextInput
                className="font-Sen-Regular text-[14px] flex-1"
                placeholder="Enter your address"
                value={apartment}
                onChangeText={setApartment}
              />
            </View>
          </View>
          <View className="px-6 gap-[12]">
            <Text className="font-Sen-Regular text-[14px]">LABEL AS</Text>
            <View className="flex-row items-center gap-[10]">
              <AddressLabel
                label="Home"
                isSelected={selectedLabel === "Home"}
                onPress={() => setSelectedLabel("Home")}
              />
              <AddressLabel
                label="Work"
                isSelected={selectedLabel === "Work"}
                onPress={() => setSelectedLabel("Work")}
              />
              <AddressLabel
                label="Other"
                isSelected={selectedLabel === "Other"}
                onPress={() => setSelectedLabel("Other")}
              />
            </View>
          </View>
          <View className="px-6">
            <AppButton title="SAVE LOCATION" onPress={() => {}} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddAddress;
