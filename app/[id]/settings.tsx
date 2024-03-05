import { useLocalSearchParams, useGlobalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  const localParams = useLocalSearchParams();
  const globalParams = useGlobalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings:</Text>
      <Text style={styles.title}>Local param id: {localParams.id}</Text>
      <Text style={styles.title}>Global param id: {globalParams.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
