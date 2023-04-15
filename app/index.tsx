import { View } from "react-native";
import { BjarteButton } from "../components/BjarteButton";
import { Typography } from "../components/Typography";

export default function StartPage() {
  return <View>
      <Typography variant="BUTTON">Start Page</Typography>
      <BjarteButton variant="PRIMARY" title="Primary" onPress={()=>{}}></BjarteButton>
      <BjarteButton variant="SECONDARY" title="Secondary" onPress={()=>{}}></BjarteButton>
    </View>;
}
