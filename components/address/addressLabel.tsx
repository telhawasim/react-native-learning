import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface AddressLabelProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

const AddressLabel = ({ label, isSelected, onPress }: AddressLabelProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`w-[94] h-[45] rounded-full ${
          isSelected ? "bg-primary" : "bg-textFieldBG"
        } items-center justify-center`}
      >
        <Text
          className={`font-Sen-Regular text-[14px] ${
            isSelected ? "text-white" : "text-black"
          }`}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddressLabel;
