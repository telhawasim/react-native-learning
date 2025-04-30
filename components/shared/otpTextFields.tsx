import { View, Text, TextInput } from "react-native";
import React, { RefObject } from "react";

interface OTPInputProps {
  codes: string[];
  refs: RefObject<TextInput>[];
  errorMessages: string[] | undefined;
  onChangeCode: (text: string, index: number) => void;
}

const OtpTextFields = ({
  codes,
  refs,
  errorMessages,
  onChangeCode,
}: OTPInputProps) => {
  return (
    <View className="flex w-full flex-row justify-between">
      {codes.map((code, index) => (
        <TextInput
          key={index}
          autoComplete="one-time-code"
          enterKeyHint="next"
          className={`h-[62] w-[62] rounded-[10px] bg-textFieldBG text-center font-Sen-Bold text-[18px] ${
            errorMessages !== undefined
              ? "border border-red-500 text-red-500"
              : "text-titleColor"
          }`}
          inputMode="numeric"
          onChangeText={(text: string) => onChangeCode(text, index)}
          value={code}
          maxLength={index === 0 ? codes.length : 1}
          ref={refs[index]}
          onKeyPress={({ nativeEvent: { key } }) => {
            if (key === "Backspace" && index > 0) {
              onChangeCode("", index - 1);
              refs[index - 1]!.current!.focus();
            }
          }}
        />
      ))}
    </View>
  );
};

export default OtpTextFields;
