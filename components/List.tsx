import { Link } from "expo-router";
import { View, Text } from "react-native";
import { useEffect } from "react";

export default function List() {
  return (
    <View>
      <Link href="/1/">id: 1</Link>
      <Link href="/2/">id: 2</Link>
      <Link href="/3/">id: 3</Link>
    </View>
  );
}
