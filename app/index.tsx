import { useState } from "react";
import { InputField } from "../components/InputField";
import { Typography } from "../components/Typography";
import { Image, Modal, SafeAreaView, View } from "react-native";
import { COLORS } from "../colors/colors";
import BackgroundImage from "../assets/saaas.png";

export default function StartPage() {
  const [value, setValue] = useState("");
  return (
    <View
      style={{
        backgroundColor: COLORS.BACKGROUND_DEFAULT,
        flex: 1,
      }}
    >
      <Image
        source={BackgroundImage}
        resizeMode="cover"
        style={{ width: "100%", height: "70%" }}
      />
      <SafeAreaView style={{ position: "absolute" }}>
        <View
          style={{
            padding: 16,
          }}
        >
          <Typography variant="TITLE">App name</Typography>
        </View>
      </SafeAreaView>
      <Modal transparent>
        <View
          style={{
            backgroundColor: COLORS.BACKGROUND_DEFAULT,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            marginTop: "100%",
            padding: 16,
            paddingTop: 32,
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 16 }}>
            <View>
              <Typography variant="BUTTON">Brukernavn</Typography>
              <InputField placeholder="Brukernavn" />
            </View>
            <View>
              <Typography variant="BUTTON">Passord</Typography>
              <InputField placeholder="Passord" secureTextEntry />
            </View>
          </View>
          <View style={{ gap: 16 }}></View>
        </View>
      </Modal>
    </View>
  );
}
