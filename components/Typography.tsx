import { Text } from "react-native";
import { COLORS } from "../colors/colors";
import { PropsWithChildren } from "react";

type TypographyVariants =
  | "HEADER_PRIMARY"
  | "HEADER_SECONDARY"
  | "HEADER_TERTIARY"
  | "BUTTON";

export const Typography = (
  props: PropsWithChildren<{ color?: string; variant: TypographyVariants }>
) => {
  let fontSize, color, fontFamily;
  fontSize = 18;
  color = COLORS.TEXT_DEFAULT;
  fontFamily = "VesperLibre-Medium";
  if (props.variant === "BUTTON") {
    fontSize = 18;
    color = COLORS.TEXT_DEFAULT;
    fontFamily = "VesperLibre-Bold";
  }
  return <Text style={{ fontSize, color, fontFamily }}>{props.children}</Text>;
};
