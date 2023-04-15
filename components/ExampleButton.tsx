import { useState } from "react";
import { Button } from "react-native";

export function ExampleButton(props: { title: string }) {
  const [counter, setCounter] = useState(0);
  return (
    <Button
      title={`${props.title} ${counter}`}
      onPress={() => setCounter(counter + 1)}
    />
  );
}
/*
<View />
<Text>tefdkfjdkf</Text>
<Image />
*/
