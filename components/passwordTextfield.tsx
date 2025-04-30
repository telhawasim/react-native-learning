import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants/icons";
import { red } from "react-native-reanimated/lib/typescript/Colors";

interface PasswordTextfieldProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
}

const PasswordTextfield = ({
  title = "PASSWORD",
  value,
  setValue,
}: PasswordTextfieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className="w-full">
      <Text className="color-mainGB font-Sen-Regular text-[13px]">{title}</Text>
      <View className="bg-textFieldBG px-[19] rounded-[10px] h-[62] mt-3 flex-row items-center justify-between">
        <TextInput
          className="font-Sen-Regular text-[16px]"
          placeholder="********"
          placeholderTextColor="#A0A5BA"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={setValue}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Image
            className="w-[19] h-[14]"
            source={isPasswordVisible ? icons.showPassword : icons.hidePassword}
            tintColor="#A0A5BA"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordTextfield;
