import { Modal, ModalProps, TouchableOpacity } from "react-native";
import React from "react";
import { View, Text, Image } from "react-native";
import { icons } from "@/constants/icons";
import AppButton from "../appButton";

interface ErrorModalProps extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ErrorModal = ({ isOpen, onClose, ...rest }: ErrorModalProps) => {
  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      statusBarTranslucent
      {...rest}
    >
      <View className="flex-1 bg-black/40 items-center justify-center">
        <View className="w-[90%] bg-white px-6 rounded-[18] items-center justify-center pt-[20]">
          <View className="w-full items-start">
            <TouchableOpacity
              onPress={onClose}
              className="w-[24px] h-[24px] items-center justify-center"
            >
              <Image className="w-[16px] h-[16px]" source={icons.cross} />
            </TouchableOpacity>
          </View>
          <View className="w-[222px] h-[222px] items-center justify-center bg-contentColor rounded-full mt-[16]"></View>
          <View className="mt-[40] gap-[15]">
            <Text className="font-Sen-Bold text-[28px]">Oops! Failed</Text>
            <Text className="font-Sen-Regular text-[16px] text-priceColor">
              Something went wrong.
            </Text>
          </View>
          <View className="w-full gap-[20] mt-[50] mb-[20]">
            <AppButton title="Please Try Again" onPress={() => {}} />
            <TouchableOpacity className="w-full items-center justify-center">
              <Text className="font-Sen-SemiBold text-[18px]">
                Back to home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
