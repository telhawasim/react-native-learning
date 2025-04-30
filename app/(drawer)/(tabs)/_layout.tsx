import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { Image } from "react-native";
import { icons } from "@/constants/icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF7622",
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 76,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          overflow: "visible",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.6,
          shadowRadius: 10,
          elevation: 10,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Shop",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={icons.tabbarHome}
              resizeMode="contain"
              className="w-6 h-6 mr-[2]"
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.tabbarExplore}
              resizeMode="contain"
              className="w-6 h-6"
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.tabbarCart}
              resizeMode="contain"
              className="w-6 h-6 mr-[2]"
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          headerShown: false,
          title: "Favourite",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.tabbarFavorites}
              resizeMode="contain"
              className="w-6 h-6 mr-[2]"
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Account",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.tabbarProfile}
              resizeMode="contain"
              className="w-6 h-6 mr-[2]"
              tintColor={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
