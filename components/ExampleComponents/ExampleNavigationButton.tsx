import { useNavigation } from "expo-router";
import { Button } from "react-native";

function ExampleNavigationButton() {
  const navigation = useNavigation();
  return (
    <Button
      title="Navigate to profile page"
      onPress={() => navigation.navigate("profile")}
    />
  );
}
