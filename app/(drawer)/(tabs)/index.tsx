import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import MainHeader from "@/components/main/mainHeader";
import CategoryCard from "@/components/main/categoryCard";
import RestaurantCard from "@/components/main/restaurantCard";
import { router, useNavigation } from "expo-router";

const Home = () => {
  var isAndroid = Platform.OS === "android";
  const navigation = useNavigation();

  return (
    <ScrollView className="bg-white">
      <SafeAreaView
        className={`px-6 ${isAndroid ? "pt-[6]" : ""}`}
        edges={["top"]}
      >
        <MainHeader
          onPressSidebar={() => {
            //@ts-ignore
            navigation.openDrawer();
          }}
          onPressCart={() => {
            router.push("/cart");
          }}
          onPressAddress={() => {
            console.log("Address has been clicked");
          }}
        />
        <View className="flex-row mt-6">
          <Text className="font-Sen-Regular text-[16px]">Hey Halal, </Text>
          <Text className="font-Sen-Bold text-[16px]">Good Afternoon!</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push("/search");
          }}
        >
          <View className="flex-row w-full h-[62] gap-3 items-center bg-searchBG rounded-xl mt-5 px-6">
            <Image className="w-[15] h-[15]" source={icons.search} />
            <Text className="font-Sen-Regular text-[14px] color-skipColor">
              Search dishes, restaurants
            </Text>
          </View>
        </TouchableOpacity>
        <View className="flex-row justify-between mt-8 items-center">
          <Text className="font-Sen-Regular text-[20px]">All Categories</Text>
          <TouchableOpacity className="flex-row gap-2 items-center">
            <Text className="font-Sen-Regular text-[16px]">See All</Text>
            <Image
              className="w-[10] h-[10]"
              resizeMode="contain"
              source={icons.arrowRight}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          className="pt-[56] pb-1"
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={() => (
            <CategoryCard
              width={144}
              onPress={() => {
                router.push("/categoryDetail");
              }}
            />
          )}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
        />
        <View className="flex-row justify-between my-6 items-center">
          <Text className="font-Sen-Regular text-[20px]">Open Restaurants</Text>
          <TouchableOpacity className="flex-row gap-2 items-center">
            <Text className="font-Sen-Regular text-[16px]">See All</Text>
            <Image
              className="w-[10] h-[10]"
              resizeMode="contain"
              source={icons.arrowRight}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          className="pt-[5] pb-3"
          data={[1, 2, 3]}
          renderItem={() => (
            <RestaurantCard
              onPress={() => {
                router.push("/restaurantDetail");
              }}
            />
          )}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 28 }}
          scrollEnabled={false}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
