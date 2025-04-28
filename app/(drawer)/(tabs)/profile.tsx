import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import AppDivider from "@/components/appDivider";
import ProfileRow from "@/components/profile/profileRow";
import LogoutButton from "@/components/profile/logoutButton";

const Profile = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView>
        <View className="flex-row mx-6 items-center gap-[20]">
          <View className="w-[65] h-[65] rounded-[27] bg-contentColor"></View>
          <View className="gap-[3]">
            <View className="flex-row items-center gap-[10]">
              <Text className="font-Sen-Bold text-[20px]">Halal Mughal</Text>
              <TouchableOpacity>
                <Image
                  source={icons.editProfile}
                  resizeMode="contain"
                  className="w-[16] h-[16]"
                />
              </TouchableOpacity>
            </View>
            <Text className="font-Sen-Regular text-[16px] text-skipColor">
              halal_mughal@gmail.com
            </Text>
          </View>
        </View>
        <View className="mt-[25]">
          <AppDivider />
          <ProfileRow title="Orders" onPress={() => {}} />
          <ProfileRow title="My Details" onPress={() => {}} />
          <ProfileRow title="Delivery Address" onPress={() => {}} />
          <ProfileRow title="Payment Methods" onPress={() => {}} />
          <ProfileRow title="Promo Code" onPress={() => {}} />
          <ProfileRow title="Notifications" onPress={() => {}} />
          <ProfileRow title="Help" onPress={() => {}} />
          <ProfileRow title="About" onPress={() => {}} />
        </View>
        <LogoutButton
          onPress={() => {
            console.log("Logout Pressed...");
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;
