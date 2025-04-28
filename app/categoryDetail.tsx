import { View, Text, ScrollView, FlatList, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CategoryDetailHeader from "@/components/categoryDetail/categoryDetailHeader";
import CategoryDetailPopularCard from "@/components/categoryDetail/categoryDetailPopularCard";
import RestaurantCard from "@/components/main/restaurantCard";

const CategoryDetail = () => {
  const width = Dimensions.get("window").width;
  const gapSpacing = 21;
  const cardWidth = (width - gapSpacing - 55) / 2;

  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView className="px-6">
        <CategoryDetailHeader onPressBack={() => router.back()} />
        <Text className="font-Sen-Regular mt-6 text-[20px]">
          Popular Burgers
        </Text>
        <FlatList
          className="pt-[55]"
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item }) => (
            <CategoryDetailPopularCard
              onPress={() => {
                router.push("/foodDetail");
              }}
              width={cardWidth}
              onPressAddCart={() => {
                console.log("add cart");
              }}
            />
          )}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 55 }}
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={{ gap: 16, marginBottom: 10 }}
        />
        <Text className="font-Sen-Regular text-[20px] mt-4">
          Open Restaurants
        </Text>
        <FlatList
          className="mt-[16]"
          data={[1, 2, 3]}
          renderItem={({ item }) => <RestaurantCard />}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
          scrollEnabled={false}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default CategoryDetail;
