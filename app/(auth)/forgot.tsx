import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState } from "react";
import BackButton from "@/components/shared/backButton";
import { useRouter } from "expo-router";
import EmailTextfield from "@/components/shared/emailTextfield";
import AppButton from "@/components/shared/appButton";

const Forgot = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 bg-mainBG justify-between">
            <View className="px-[24] pt-[60]">
              <BackButton onPress={() => router.dismiss()} />
              <View className="w-full justify-center items-center gap-1 mt-[23]">
                <Text className="color-white font-Sen-Bold text-[30px]">
                  Forgot Password
                </Text>
                <Text className="color-white font-Sen-Regular text-[16px]">
                  Please enter email to your existing account
                </Text>
              </View>
            </View>

            <View className="bg-white rounded-t-[24px] px-[24] pt-7 pb-[60] gap-[39]">
              <EmailTextfield value={email} setValue={setEmail} />
              <AppButton title="SEND CODE" onPress={() => {}} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Forgot;
