import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { RefObject, useRef, useState } from "react";
import OtpTextFields from "@/components/otpTextFields";
import { useRouter } from "expo-router";
import BackButton from "@/components/backButton";
import AppButton from "@/components/appButton";

const Verification = () => {
  const router = useRouter();
  const [codes, setCodes] = useState<string[] | undefined>(Array(4).fill(""));
  const refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const [errorMessages, setErrorMessages] = useState<string[]>();
  const onChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      setErrorMessages(undefined);
      const newCodes = text.split("");
      setCodes(newCodes);
      refs[3]!.current?.focus();
      return;
    }
    setErrorMessages(undefined);
    const newCodes = [...codes!];
    newCodes[index] = text;
    setCodes(newCodes);
    if (text !== "" && index < 3) {
      refs[index + 1]!.current?.focus();
    }
  };

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
                  Verification
                </Text>
                <Text className="color-white font-Sen-Regular text-[16px]">
                  We have sent a code to our email
                </Text>
                <Text className="color-white font-Sen-Bold text-[16px]">
                  example@gmail.com
                </Text>
              </View>
            </View>
            <View className="bg-white rounded-t-[24px] px-[24] pt-7 pb-[60] gap-[20]">
              <View className="flex-row justify-between items-center">
                <Text className="color-mainGB font-Sen-Regular text-[13px]">
                  CODE
                </Text>
                <TouchableOpacity>
                  <Text className="font-Sen-Bold text-[14px] underline">
                    Resend Code
                  </Text>
                </TouchableOpacity>
              </View>
              <OtpTextFields
                codes={codes!}
                refs={refs}
                errorMessages={errorMessages}
                onChangeCode={onChangeCode}
              />
              <View className="mt-4">
                <AppButton title="SEND CODE" onPress={() => {}} />
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Verification;
