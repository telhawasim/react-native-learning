import { View, Text, TextInput } from "react-native";
import React from "react";

interface EmailTextfieldProps {
  value: string;
  setValue: (value: string) => void;
}

const EmailTextfield = ({ value, setValue }: EmailTextfieldProps) => {
  return (
    <View className="w-full">
      <Text className="color-mainGB font-Sen-Regular text-[13px]">EMAIL</Text>
      <View className="bg-textFieldBG rounded-[10px] h-[62] justify-center mt-3">
        <TextInput
          className="mx-[19] font-Sen-Regular text-[16px]"
          placeholder="example@gmail.com"
          placeholderTextColor="#A0A5BA"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
};

export default EmailTextfield;
