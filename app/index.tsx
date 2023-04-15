import { View } from "react-native";
import { BjarteButton } from "../components/BjarteButton";
import { ProfilePicture } from "../components/ProfilePicture";
import { Typography } from "../components/Typography";

export default function StartPage() {
  return <View>
      <Typography variant="BUTTON">Start Page</Typography>
      <BjarteButton variant="PRIMARY" title="Primary" onPress={()=>{}}></BjarteButton>
      <BjarteButton variant="SECONDARY" title="Secondary" onPress={()=>{}}></BjarteButton>
      <ProfilePicture source={"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"}></ProfilePicture>
    </View>;
}
