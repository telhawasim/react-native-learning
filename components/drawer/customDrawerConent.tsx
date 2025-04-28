import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hello, Halal</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        onPress={() => {
          console.log("Logout clicked");
        }}
        style={{ marginTop: 20, padding: 20 }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
