import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants/icons";
import BackButton from "../shared/backButton";
import {
  FilterFoodModel,
  filterOffers,
  deliveryTimes,
  priceRanges,
} from "@/model/filter_food/filterFoodModel";
import Tag from "../shared/tag";
import AppButton from "../shared/appButton";
import Rating from "../restaurant_detail/rating";
interface FavouriteFoodModalProps {
  visible: boolean;
  onBack: () => void;
  onApply: () => void;
}

const FilterFoodModal = ({
  visible,
  onBack,
  onApply,
}: FavouriteFoodModalProps) => {
  const [selectedOffers, setSelectedOffers] = useState<FilterFoodModel[]>([]);
  const [selectedDeliveryTime, setSelectedDeliveryTime] =
    useState<FilterFoodModel | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] =
    useState<FilterFoodModel | null>(null);
  const [selectedRating, setSelectedRating] = useState<number>(0);

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View className="flex-1 bg-black/40 justify-center items-center">
        <View className="w-[90%] bg-white rounded-[12] p-6">
          <View className="flex-row justify-between items-center">
            <Text className="font-Sen-Regular text-[17px]">
              Filter your search
            </Text>
            <BackButton
              isBackgroundWhite={false}
              icon={icons.cross}
              onPress={onBack}
            />
          </View>
          <View className="mt-[15] gap-[14]">
            <Text className="font-Sen-Regular text-[13px]">OFFERS</Text>
            <View className="flex-row flex-wrap gap-2">
              {filterOffers.map((item) => (
                <Tag
                  key={item.id}
                  name={item.name}
                  isSelected={selectedOffers.includes(item)}
                  onPress={() => {
                    if (selectedOffers.includes(item)) {
                      setSelectedOffers(
                        selectedOffers.filter((offer) => offer.id !== item.id)
                      );
                    } else {
                      setSelectedOffers([...selectedOffers, item]);
                    }
                  }}
                />
              ))}
            </View>
          </View>
          <View className="mt-[32] gap-[14]">
            <Text className="font-Sen-Regular text-[13px]">DELIVER TIME</Text>
            <View className="flex-row flex-wrap gap-2">
              {deliveryTimes.map((item) => (
                <Tag
                  key={item.id}
                  name={item.name}
                  isSelected={selectedDeliveryTime?.id === item.id}
                  onPress={() => {
                    if (selectedDeliveryTime?.id === item.id) {
                      setSelectedDeliveryTime(null);
                    } else {
                      setSelectedDeliveryTime(item);
                    }
                  }}
                />
              ))}
            </View>
          </View>
          <View className="mt-[32] gap-[14]">
            <Text className="font-Sen-Regular text-[13px]">PRICING</Text>
            <View className="flex-row flex-wrap gap-2">
              {priceRanges.map((item) => (
                <Tag
                  key={item.id}
                  name={item.name}
                  isSelected={selectedPriceRange?.id === item.id}
                  onPress={() => {
                    if (selectedPriceRange?.id === item.id) {
                      setSelectedPriceRange(null);
                    } else {
                      setSelectedPriceRange(item);
                    }
                  }}
                />
              ))}
            </View>
          </View>
          <View className="mt-[32] gap-[14] mb-[30]">
            <Text className="font-Sen-Regular text-[13px]">RATING</Text>
            <View className="flex-row items-center gap-[11]">
              {[1, 2, 3, 4, 5].map((item) => (
                <Rating
                  key={item}
                  isSelected={selectedRating >= item}
                  onPress={() => setSelectedRating(item)}
                />
              ))}
            </View>
          </View>
          <AppButton title="FILTER" onPress={onApply} />
        </View>
      </View>
    </Modal>
  );
};

export default FilterFoodModal;
