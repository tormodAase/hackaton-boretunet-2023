import { useState } from "react";
import { Pressable, View } from "react-native";
import { COLORS } from "../colors/colors";
import { Typography } from "./Typography";

export function BjarteButton(props: { title: string, onPress: () => void, variant?: "PRIMARY" | "SECONDARY"} ) {
    const variant = props.variant || "PRIMARY";
    console.log(variant);
    const backgroundDefault = variant == "PRIMARY" ? COLORS.MAIN_YELLOW_PRIMARY : COLORS.BACKGROUND_DEFAULT
    const [background, setBackground] = useState(backgroundDefault);


  return (
        <Pressable
            onPress={props.onPress}
            onPressIn={() => setBackground(COLORS.MAIN_YELLOW_SECONDARY)}
            onPressOut={() => setBackground(backgroundDefault)}
            style={{
                backgroundColor: background,
                borderRadius: 6,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: COLORS.MAIN_YELLOW_PRIMARY,
                minHeight: 44,
                
            }}
        >
            <Typography variant="BUTTON">{props.title}</Typography>
        </Pressable>
  );
}
