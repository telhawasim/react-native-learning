import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDivider from "@/components/shared/appDivider";
import CartRow from "@/components/cart/cartRow";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import CartBottomSheet from "@/components/cart/cartBottomSheet";

const Cart = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = (index: number) => {
    console.log(index);
  };
  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      pressBehavior="close"
      opacity={0.4}
    />
  );
  const snapPoints = useMemo(() => ["25%"], []);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="gap-[20] items-center">
        <Text className="font-Sen-Bold text-[24px]">Cart</Text>
        <AppDivider />
      </View>
      <View className="mt-6 mx-6 flex-row justify-between">
        <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
          <Text className="underline font-Sen-Regular text-[16px] text-primary">
            Confirm Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsEditMode(!isEditMode)}>
          <Text
            className={`underline font-Sen-Regular text-[16px] ${
              isEditMode ? "text-completedColor" : "text-primary"
            }`}
          >
            {isEditMode ? "DONE" : "EDIT ITEMS"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        className="mt-6 mx-6"
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <CartRow isEditMode={isEditMode} />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ gap: 30, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
      <BottomSheet
        style={{ flex: 1 }}
        ref={bottomSheetRef}
        index={-1}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        keyboardBehavior="extend"
        keyboardBlurBehavior="restore"
        snapPoints={snapPoints}
      >
        <BottomSheetView>
          <CartBottomSheet />
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Cart;
