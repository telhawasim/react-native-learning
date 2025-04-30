import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/shared/backButton";
import { icons } from "@/constants/icons";
import { router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import OngoingRow from "@/components/orders/ongoingRow";
import HistoryRow from "@/components/orders/historyRow";

const MyOrders = () => {
  const renderScene = SceneMap({
    first: () => (
      <FlatList
        className="px-6 pt-6"
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <OngoingRow />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ gap: 24, paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      />
    ),
    second: () => (
      <FlatList
        className="px-6 pt-6"
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <HistoryRow />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ gap: 24, paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      />
    ),
  });
  const routes = [
    { key: "first", title: "Ongoing" },
    { key: "second", title: "History" },
  ];
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-6">
        <View className="flex-row items-center gap-[16]">
          <BackButton
            isBackgroundWhite={false}
            icon={icons.back}
            onPress={() => {
              router.back();
            }}
          />
          <Text className="text-[17px] font-Sen-Regular">My Orders</Text>
        </View>
        <BackButton
          isBackgroundWhite={false}
          icon={icons.options}
          onPress={() => {}}
        />
      </View>
      <View className="flex-1">
        <TabView
          commonOptions={{
            label: ({ route, focused }) => (
              <Text
                className={`text-[14px] ${
                  focused ? "font-Sen-Bold" : "font-Sen-Regular"
                } ${focused ? "text-primary" : "text-inactiveTab"}`}
              >
                {route.title}
              </Text>
            ),
          }}
          style={{ flex: 1, paddingTop: 10 }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{
                backgroundColor: "#ffffff",
                height: 45,
                marginHorizontal: 24,
                elevation: 0,
              }}
              indicatorStyle={{
                backgroundColor: "#FF7622",
                height: 2,
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;
