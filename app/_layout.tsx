import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Sen-Regular": require("../assets/fonts/Sen-Regular.ttf"),
    "Sen-Bold": require("../assets/fonts/Sen-Bold.ttf"),
    "Sen-Medium": require("../assets/fonts/Sen-Medium.ttf"),
    "Sen-SemiBold": require("../assets/fonts/Sen-SemiBold.ttf"),
    "Sen-ExtraBold": require("../assets/fonts/Sen-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
