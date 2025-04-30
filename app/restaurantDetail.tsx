import { View, Text, ScrollView, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/shared/backButton";
import { router } from "expo-router";
import { icons } from "@/constants/icons";
import Tag from "@/components/shared/tag";
import RestaurantTag from "@/components/main/restaurantTag";
import {
  RestaurantTags,
  RestaurantTagModel,
} from "@/model/restaurant_detail/restaurantDetailModel";
import CategoryCard from "@/components/main/categoryCard";
import FilterFoodModal from "@/components/modals/filterFoodModal";

const RestaurantDetail = () => {
  var width = Dimensions.get("window").width;
  var CardWidth = (width - 48 - 32) / 2;
  const [selectedTag, setSelectedTag] = useState<RestaurantTagModel>(
    RestaurantTags[0]
  );
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView className="px-6">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-[16]">
            <BackButton
              isBackgroundWhite={false}
              onPress={() => {
                router.back();
              }}
            />
            <Text className="font-Sen-Regular text-[17px]">
              Restaurant View
            </Text>
          </View>
          <BackButton
            isBackgroundWhite={false}
            icon={icons.options}
            onPress={() => {
              setFilterModalVisible(true);
            }}
          />
        </View>
        <View className="h-[150] bg-contentColor rounded-[32] mt-6"></View>
        <View className="mt-6 gap-[4]">
          <Text className="font-Sen-Bold text-[20px]">Spicy Restaurant</Text>
          <Text className="font-Sen-Regular text-[14px] text-textFieldPlaceholder">
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
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
        <FlatList
          data={RestaurantTags}
          renderItem={({ item, index }) => (
            <Tag
              name={item.name}
              isSelected={selectedTag.id === item.id}
              onPress={() => setSelectedTag(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-[20]"
          contentContainerStyle={{ gap: 10 }}
        />
        <View className="mt-[25]">
          <Text className="font-Sen-Regular text-[20px]">
            {selectedTag.name} (10)
          </Text>
          <FlatList
            className="pt-[50]"
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={() => (
              <CategoryCard
                width={CardWidth}
                onPress={() => {
                  console.log("category card");
                }}
              />
            )}
            keyExtractor={(item) => item.toString()}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={{ gap: 21 }}
            contentContainerStyle={{ gap: 50, paddingBottom: 10 }}
          />
        </View>
        <FilterFoodModal
          visible={filterModalVisible}
          onBack={() => setFilterModalVisible(false)}
          onApply={() => {
            setFilterModalVisible(false);
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default RestaurantDetail;
