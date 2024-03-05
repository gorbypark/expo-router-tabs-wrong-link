import List from "@/components/List";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "tomato" }}>
      <Text>Index page</Text>
      <List />
    </View>
  );
}
