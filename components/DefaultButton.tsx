import { Pressable, View } from "react-native";
import { Text } from "react-native";
import { COLORS } from "../colors/colors";

export function DefaultButton(props: { title: string, onPress: () => void} ) {
  return (
    <View style={{
        flex:1,
    }}
    >
        <Pressable
            onPress={props.onPress}
            style={{
                backgroundColor: COLORS.MAIN_YELLOW_PRIMARY,
                borderRadius: 6,
                paddingHorizontal: 24,
                paddingVertical: 16,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>{props.title}</Text>
        </Pressable>
    </View>
  );
}
