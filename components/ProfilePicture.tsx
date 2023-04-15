import { Image, View } from "react-native";
import { COLORS } from "../colors/colors";


export function ProfilePicture(props: {source: string}) {
    return <Image style={{
                height: 56,
                width: 56,
                borderRadius: 100
            }} resizeMode={"cover"} source={{uri: props.source}}></Image>
}