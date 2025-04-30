import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/shared/backButton";
import { icons } from "@/constants/icons";
import RestaurantTag from "@/components/main/restaurantTag";
import FoodDetailSize from "@/components/foodDetail/foodDetailSize";
import IngredientCard from "@/components/foodDetail/ingredientCard";
import AppButton from "@/components/shared/appButton";
import { router } from "expo-router";
const FoodDetail = () => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(0);
  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
          <View className="px-6">
            <View className="flex-row items-center gap-4">
              <BackButton
                isBackgroundWhite={false}
                onPress={() => {
                  router.back();
                }}
              />
              <Text className="font-Sen-Regular text-[18px]">Details</Text>
            </View>
            <View className="relative w-full h-[184px] bg-contentColor rounded-[32] mt-8">
              <TouchableOpacity
                className="absolute bottom-[20] right-[20] w-[45] h-[45] bg-white/20 rounded-full items-center justify-center"
                onPress={() => {
                  console.log("heart");
                }}
              >
                <Image
                  tintColor={"white"}
                  className="w-[25] h-[25]"
                  source={icons.heartUnselected}
                />
              </TouchableOpacity>
            </View>
            <View className="self-start flex-row items-center gap-[12] mt-6 h-[47] px-[20] border-2 border-searchTagBorder rounded-full">
              <Image className="h-[25] w-[25]" source={icons.restaurant} />
              <Text className="font-Sen-Regular text-[14px]">
                Uttora Coffee House
              </Text>
            </View>
            <View className="mt-[20] gap-[7]">
              <Text className="font-Sen-Bold text-[20px]">
                Pizza Calzone European
              </Text>
              <Text className="font-Sen-Regular text-[14px] text-textFieldPlaceholder">
                Prosciutto e funghi is a pizza variety that is topped with
                tomato sauce.
              </Text>
            </View>
            <View className="flex-row items-center gap-[36] mt-[20]">
              <RestaurantTag
                icon={icons.rating}
                text={"4.5"}
                isBold={true}
                isDelivery={false}
              />
              <RestaurantTag
                icon={icons.delivery}
                text={"Free"}
                isBold={false}
                isDelivery={true}
              />
              <RestaurantTag
                icon={icons.clock}
                text={"30 min"}
                isBold={false}
                isDelivery={false}
              />
            </View>
            <View className="flex-row mt-[20] gap-4 items-center">
              <Text className="font-Sen-Regular text-[13px]">SIZE:</Text>
              <View className="flex-row gap-[10]">
                <FoodDetailSize
                  size={"10''"}
                  isSelected={selectedSize === 0}
                  onPress={() => setSelectedSize(0)}
                />
                <FoodDetailSize
                  size={"14''"}
                  isSelected={selectedSize === 1}
                  onPress={() => setSelectedSize(1)}
                />
                <FoodDetailSize
                  size={"16''"}
                  isSelected={selectedSize === 2}
                  onPress={() => setSelectedSize(2)}
                />
              </View>
            </View>
            <View className="mt-[20] gap-[20]">
              <Text className="font-Sen-Regular text-[13px]">INGREDIENTS:</Text>
              <View className="flex-row gap-[19]">
                <IngredientCard />
                <IngredientCard />
                <IngredientCard />
                <IngredientCard />
                <IngredientCard />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View className="gap-6 mt-[8] bg-textFieldBG rounded-t-[24] pt-[20] px-6 pb-[30]">
        <View className="flex-row justify-between">
          <Text className="font-Sen-Regular text-[28px]">$32</Text>
          <View className="flex-row items-center bg-cartQuantityBG h-[48] rounded-full px-[14]">
            <TouchableOpacity
              className="h-[24] w-[24] bg-white/20 rounded-full items-center justify-center"
              onPress={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <Text className="font-Sen-Bold text-[18px] color-white">-</Text>
            </TouchableOpacity>
            <Text className="font-Sen-Bold text-[16px] color-white mx-[20]">
              {quantity}
            </Text>
            <TouchableOpacity
              className="h-[24] w-[24] bg-white/20 rounded-full items-center justify-center"
              onPress={() => {
                setQuantity(quantity + 1);
              }}
            >
              <Text className="font-Sen-Bold text-[18px] color-white">+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <AppButton
          title="ADD TO CART"
          onPress={() => {
            console.log("add to cart");
          }}
        />
      </View>
    </View>
  );
};

export default FoodDetail;
