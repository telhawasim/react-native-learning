import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import EmailTextfield from "@/components/emailTextfield";
import PasswordTextfield from "@/components/passwordTextfield";
import { icons } from "@/constants/icons";
import AppButton from "@/components/appButton";
import SocialButton from "@/components/socialButton";
import { router } from "expo-router";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

  return (
    <View className="flex-1 bg-mainBG justify-between">
      <View className="mt-[130]">
        <Text className="color-white font-Sen-Bold text-[30px] text-center">
          Log In
        </Text>
        <Text className="color-white font-Sen-Regular text-[16px] text-center mt-1">
          Please sign in to your existing account
        </Text>
      </View>
      <View className="bg-white w-full pt-7 px-7 rounded-t-[24px] gap-6 pb-[39]">
        <EmailTextfield value={email} setValue={setEmail} />
        <PasswordTextfield
          title="PASSWORD"
          value={password}
          setValue={setPassword}
        />
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-[10]">
            <TouchableOpacity
              onPress={() => setIsRememberMeChecked(!isRememberMeChecked)}
            >
              <Image
                source={
                  isRememberMeChecked ? icons.checkedBox : icons.unCheckedBox
                }
                className="w-[20] h-[20]"
                tintColor={"#FF7622"}
              />
            </TouchableOpacity>
            <Text className="color-rememberMeColor">Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/(auth)/forgot")}>
            <Text className="font-Sen-Regular text-[14px] color-primary">
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-2">
          <AppButton
            title="LOG IN"
            onPress={() => {
              router.push("/(drawer)/(tabs)");
            }}
          />
        </View>
        <View className="flex-row justify-center items-center gap-2 mt-2">
          <Text className="color-skipColor font-Sen-Regular text-[16px]">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Text className="color-primary font-Sen-Bold text-[14px]">
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="font-Sen-Regular text-[16px] text-center color-skipColor">
          Or
        </Text>
        <View className="flex-row justify-center items-center gap-8">
          <SocialButton
            icon={icons.facebook}
            onPress={() => {
              console.log("facebook");
            }}
            backgroundColor="bg-facebookColor"
          />
          <SocialButton
            icon={icons.twitter}
            onPress={() => {
              console.log("twitter");
            }}
            backgroundColor="bg-twitterColor"
          />
          <SocialButton
            icon={icons.apple}
            onPress={() => {
              console.log("apple");
            }}
            backgroundColor="bg-appleColor"
          />
        </View>
      </View>
    </View>
  );
};

export default index;
