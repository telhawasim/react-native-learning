import { View, Text, TextInput } from "react-native";
import React from "react";

interface NameTextfieldProps {
  value: string;
  setValue: (text: string) => void;
}

const NameTextfield = ({ value, setValue }: NameTextfieldProps) => {
  return (
    <View className="w-full">
      <Text className="color-mainGB font-Sen-Regular text-[13px]">NAME</Text>
      <View className="bg-textFieldBG rounded-[10px] h-[62] justify-center mt-3">
        <TextInput
          className="mx-[19] font-Sen-Regular text-[16px]"
          placeholder="telha wasim"
          placeholderTextColor="#A0A5BA"
          keyboardType="default"
          autoCapitalize="words"
          autoCorrect={false}
          value={value}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
};

export default NameTextfield;
