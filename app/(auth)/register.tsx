import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import EmailTextfield from "@/components/shared/emailTextfield";
import PasswordTextfield from "@/components/shared/passwordTextfield";
import AppButton from "@/components/shared/appButton";
import { router } from "expo-router";
import BackButton from "@/components/shared/backButton";
import NameTextfield from "@/components/shared/nameTextfield";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
                  Sign Up
                </Text>
                <Text className="color-white font-Sen-Regular text-[16px]">
                  Please sign up to get started
                </Text>
              </View>
            </View>

            <View className="bg-white rounded-t-[24px] px-[24] pt-7 pb-[60] gap-[30]">
              <NameTextfield value={name} setValue={setName} />
              <EmailTextfield value={email} setValue={setEmail} />
              <PasswordTextfield
                title="PASSWORD"
                value={password}
                setValue={setPassword}
              />
              <PasswordTextfield
                title="RE-TYPE PASSWORD"
                value={confirmPassword}
                setValue={setConfirmPassword}
              />
              <AppButton title="SIGN UP" onPress={() => {}} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
