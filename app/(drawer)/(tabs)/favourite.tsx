import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDivider from "@/components/appDivider";
import FavouriteRow from "@/components/favourite/favouriteRow";
import ErrorModal from "@/components/modals/errorModal";

const Favourite = () => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full">
        <View className="gap-[20] items-center">
          <Text className="font-Sen-Bold text-[24px]">Favourite</Text>
          <AppDivider />
        </View>
        <ScrollView>
          <FavouriteRow />
          <FavouriteRow />
          <FavouriteRow />
          <FavouriteRow />
          <FavouriteRow />
          <FavouriteRow />
          <TouchableOpacity onPress={() => setIsErrorModalOpen(true)}>
            <Text>Error</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />
    </SafeAreaView>
  );
};

export default Favourite;
