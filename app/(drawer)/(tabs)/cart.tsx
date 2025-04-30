import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDivider from "@/components/shared/appDivider";
import CartRow from "@/components/cart/cartRow";

const Cart = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="w-full">
        <View className="gap-[20] items-center">
          <Text className="font-Sen-Bold text-[24px]">My Cart</Text>
          <AppDivider />
        </View>
        <FlatList
          data={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ]}
          renderItem={({ item }) => (
            <CartRow
              onPressCross={() => {}}
              onPressMinus={() => {}}
              onPressAdd={() => {}}
            />
          )}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={{ paddingBottom: 60 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
