import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useLayoutEffect } from "react";
import { View } from "react-native";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "VesperLibre-Black": require("../assets/fonts/VesperLibre-Black.ttf"),
    "VesperLibre-Bold": require("../assets/fonts/VesperLibre-Bold.ttf"),
    "VesperLibre-Medium": require("../assets/fonts/VesperLibre-Medium.ttf"),
    "VesperLibre-Regular": require("../assets/fonts/VesperLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Stack />;
}
