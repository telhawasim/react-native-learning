import React from "react";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/drawer/customDrawerConent";

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerType: "slide",
        drawerPosition: "left",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
    </Drawer>
  );
};

export default DrawerLayout;
