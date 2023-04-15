import { useRef } from "react";
import { Pressable, TextInput } from "react-native";
import { COLORS } from "../colors/colors";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";

export const InputField = (props: {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry: boolean;
}) => {
  const textInputRef = useRef<TextInput>(null);
  return (
    <Pressable
      onPress={() => textInputRef.current?.focus()}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.LIGHT_GREY,
        borderBottomWidth: 2,
        borderColor: COLORS.MAIN_YELLOW_PRIMARY,
        height: 48,
        paddingHorizontal: 8,
        gap: 8,
        alignItems: "center",
        borderRadius: 6,
      }}
    >
      <TextInput
        ref={textInputRef}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
      />
      {props.secureTextEntry && (
        <MaterialCommunityIcon
          name="eye-off-outline"
          size={22}
          color={COLORS.TEXT_DEFAULT}
        />
      )}
    </Pressable>
  );
};
