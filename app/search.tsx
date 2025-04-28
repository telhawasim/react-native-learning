import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { icons } from "@/constants/icons";
import SearchHeader from "@/components/search/searchHeader";
import SearchTags from "@/components/search/searchTags";
import SuggestedRestaurantCard from "@/components/search/suggestedRestaurantCard";
import PopularFoodCard from "@/components/search/popularFoodCard";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const screenWidth = Dimensions.get("window").width;
  const cardSpacing = 15;
  const cardWidth = (screenWidth - cardSpacing - 60) / 2;

  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView className="px-6">
        <SearchHeader
          onPressBack={() => {
            router.back();
          }}
          onPressCart={() => {}}
        />
        <View className="flex-row w-full h-[62] bg-searchBG rounded-[10] mt-7 justify-between items-center px-6 gap-3">
          <View className="flex-row items-center gap-3">
            <Image
              className="w-[15] h-[15]"
              resizeMode="contain"
              source={icons.search}
            />
            <TextInput
              placeholder="Seach dishes, restaurants"
              placeholderTextColor={"#A0A5BA"}
              className="font-Sen-Regular text-[14px]"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <Image className="w-[20] h-[20]" source={icons.clearText} />
            </TouchableOpacity>
          )}
        </View>
        <Text className="mt-6 font-Sen-Regular text-[20px]">
          Recent Keywords
        </Text>
        <FlatList
          data={["Pizza", "Burger", "Salad", "Sushi", "Pasta"]}
          renderItem={({ item }) => {
            return <SearchTags tag={item} />;
          }}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-3"
          contentContainerStyle={{ gap: 10 }}
        />
        <Text className="mt-6 font-Sen-Regular text-[20px]">
          Suggested Restaurants
        </Text>
        <FlatList
          data={[
            "Pansi Restaurant",
            "American Spicy Burger Shop",
            "Cafenio Coffee Shop",
          ]}
          renderItem={({ item }) => {
            return <SuggestedRestaurantCard tag={item} />;
          }}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          className="mt-3"
          contentContainerStyle={{ gap: 10 }}
          scrollEnabled={false}
        />
        <Text className="mt-6 font-Sen-Regular text-[20px]">
          Popular Fast Food
        </Text>
        <FlatList
          data={["Pizza", "Burger", "Salad", "Sushi", "Pasta"]}
          renderItem={({ item }) => {
            return <PopularFoodCard width={cardWidth} />;
          }}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          className="pt-[55]"
          contentContainerStyle={{ gap: 50, paddingBottom: 10 }}
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={{ gap: 15 }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Search;
