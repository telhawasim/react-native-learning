import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  Modal,
  Text,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import ExploreCard from "@/components/explore/exploreCard";
import CategoryCheckBox from "@/components/explore/categoryCheckbox";
import AppButton from "@/components/shared/appButton";
import FiltersModal from "@/components/modals/filtersModal";

const Explore = () => {
  const width = Dimensions.get("window").width;
  const cardWidth = (width - 48 - 10) / 2;
  const isAndroid = Platform.OS === "android";
  const [searchText, setSearchText] = useState("");
  const [isFiltersModalVisible, setIsFiltersModalVisible] = useState(false);
  const [isCheckedEggs, setIsCheckedEggs] = useState(false);
  const [isCheckedNoodles, setIsCheckedNoodles] = useState(false);
  const [isCheckedChips, setIsCheckedChips] = useState(false);
  const [isCheckedFastFood, setIsCheckedFastFood] = useState(false);
  const [isCheckedIndividual, setIsCheckedIndividual] = useState(false);
  const [isCheckedCocola, setIsCheckedCocola] = useState(false);
  const [isCheckedIfad, setIsCheckedIfad] = useState(false);
  const [isCheckedKaziFarma, setIsCheckedKaziFarma] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mx-6">
        <View className="flex-row justify-between items-center gap-[20]">
          <View className="flex-row items-center h-[52] justify-between bg-logoutBG rounded-[15] flex-1 px-4">
            <View className="flex-row items-center gap-3 flex-1">
              <Image
                className="w-[18] h-[18]"
                source={icons.search}
                resizeMode="contain"
                tintColor={"#000000"}
              />
              <TextInput
                placeholder="Search"
                className="font-Sen-Regular text-[14px] mr-2 flex-1"
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText("")}>
                <Image
                  className="w-[16] h-[15]"
                  resizeMode="contain"
                  source={icons.clearText}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity onPress={() => setIsFiltersModalVisible(true)}>
            <Image
              className="w-[18] h-[18]"
              source={icons.filter}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          className="mt-4"
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={() => <ExploreCard width={cardWidth} />}
          numColumns={2}
          keyExtractor={(item) => item.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: isAndroid ? 70 : 35,
          }}
          columnWrapperStyle={{ gap: 15 }}
        />
      </View>
      <FiltersModal
        isVisible={isFiltersModalVisible}
        onClose={() => setIsFiltersModalVisible(false)}
        isCheckedEggs={isCheckedEggs}
        setIsCheckedEggs={setIsCheckedEggs}
        isCheckedNoodles={isCheckedNoodles}
        setIsCheckedNoodles={setIsCheckedNoodles}
        isCheckedChips={isCheckedChips}
        setIsCheckedChips={setIsCheckedChips}
        isCheckedFastFood={isCheckedFastFood}
        setIsCheckedFastFood={setIsCheckedFastFood}
        isCheckedIndividual={isCheckedIndividual}
        setIsCheckedIndividual={setIsCheckedIndividual}
        isCheckedCocola={isCheckedCocola}
        setIsCheckedCocola={setIsCheckedCocola}
        isCheckedIfad={isCheckedIfad}
        setIsCheckedIfad={setIsCheckedIfad}
        isCheckedKaziFarma={isCheckedKaziFarma}
        setIsCheckedKaziFarma={setIsCheckedKaziFarma}
      />
    </SafeAreaView>
  );
};

export default Explore;
