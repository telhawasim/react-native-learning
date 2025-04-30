import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import CategoryCheckBox from "../explore/categoryCheckbox";
import AppButton from "../shared/appButton";

const FiltersModal = ({
  isVisible,
  onClose,
  isCheckedEggs,
  setIsCheckedEggs,
  isCheckedNoodles,
  setIsCheckedNoodles,
  isCheckedChips,
  setIsCheckedChips,
  isCheckedFastFood,
  setIsCheckedFastFood,
  isCheckedIndividual,
  setIsCheckedIndividual,
  isCheckedCocola,
  setIsCheckedCocola,
  isCheckedIfad,
  setIsCheckedIfad,
  isCheckedKaziFarma,
  setIsCheckedKaziFarma,
}: {
  isVisible: boolean;
  onClose: () => void;
  isCheckedEggs: boolean;
  setIsCheckedEggs: (value: boolean) => void;
  isCheckedNoodles: boolean;
  setIsCheckedNoodles: (value: boolean) => void;
  isCheckedChips: boolean;
  setIsCheckedChips: (value: boolean) => void;
  isCheckedFastFood: boolean;
  setIsCheckedFastFood: (value: boolean) => void;
  isCheckedIndividual: boolean;
  setIsCheckedIndividual: (value: boolean) => void;
  isCheckedCocola: boolean;
  setIsCheckedCocola: (value: boolean) => void;
  isCheckedIfad: boolean;
  setIsCheckedIfad: (value: boolean) => void;
  isCheckedKaziFarma: boolean;
  setIsCheckedKaziFarma: (value: boolean) => void;
}) => {
  var isAndroid = Platform.OS === "android";

  return (
    <Modal visible={isVisible} transparent={false} animationType="slide">
      <View className="bg-white flex-1 items-center">
        <View
          className={`relative flex-row ${
            isAndroid ? "mt-[20]" : "mt-[70]"
          } w-full justify-center items-center`}
        >
          <TouchableOpacity className="absolute left-6 top-2" onPress={onClose}>
            <Image
              className="w-[16] h-[16]"
              resizeMode="contain"
              source={icons.cross}
            />
          </TouchableOpacity>
          <Text className="font-Sen-Bold text-[24px]">Filters</Text>
        </View>
        <View className="mt-[32] w-full flex-1 bg-logoutBG rounded-t-[30] pt-[25] pb-[35] px-6 justify-between">
          <View>
            <Text className="font-Sen-SemiBold text-[24px]">Categories</Text>
            <View className="mt-[25] gap-[20]">
              <CategoryCheckBox
                isChecked={isCheckedEggs}
                onPress={() => setIsCheckedEggs(!isCheckedEggs)}
                title="Eggs"
              />
              <CategoryCheckBox
                isChecked={isCheckedNoodles}
                onPress={() => setIsCheckedNoodles(!isCheckedNoodles)}
                title="Noodles & Pasta"
              />
              <CategoryCheckBox
                isChecked={isCheckedChips}
                onPress={() => setIsCheckedChips(!isCheckedChips)}
                title="Chips & Crisps"
              />
              <CategoryCheckBox
                isChecked={isCheckedFastFood}
                onPress={() => setIsCheckedFastFood(!isCheckedFastFood)}
                title="Fast Food"
              />
            </View>
            <Text className="font-Sen-SemiBold text-[24px] mt-[30]">Brand</Text>
            <View className="mt-[25] gap-[20]">
              <CategoryCheckBox
                isChecked={isCheckedIndividual}
                onPress={() => setIsCheckedIndividual(!isCheckedIndividual)}
                title="Individual Collection"
              />
              <CategoryCheckBox
                isChecked={isCheckedCocola}
                onPress={() => setIsCheckedCocola(!isCheckedCocola)}
                title="Cocola"
              />
              <CategoryCheckBox
                isChecked={isCheckedIfad}
                onPress={() => setIsCheckedIfad(!isCheckedIfad)}
                title="Ifad"
              />
              <CategoryCheckBox
                isChecked={isCheckedKaziFarma}
                onPress={() => setIsCheckedKaziFarma(!isCheckedKaziFarma)}
                title="Kazi Farmas"
              />
            </View>
          </View>
          <AppButton title="Apply Filter" onPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
};

export default FiltersModal;
