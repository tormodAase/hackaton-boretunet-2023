import { Pressable } from "react-native";
import { COLORS } from "../colors/colors";
import { Typography } from "./Typography";
import { useState } from "react";


export function BoretunetChip(props: {title: string}) {
    const [selected, setSelected] = useState(false);
    return <Pressable
            onPress={() => setSelected(!selected)}
            style={{
                borderRadius: 32,
                backgroundColor: selected ? COLORS.MAIN_YELLOW_PRIMARY : COLORS.LIGHT_GREY,
                borderWidth: 2,
                borderColor: selected? COLORS.MAIN_YELLOW_SECONDARY : COLORS.DARK_GREY,
                justifyContent: "center",
                alignItems: "center"
            }}
    >
        <Typography variant="BUTTON">{props.title}</Typography>
    </Pressable>
}