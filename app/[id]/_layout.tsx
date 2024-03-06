import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import List from "@/components/List";

export default function TabLayout() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}>
        <List />
      </View>
      <View style={{ flex: 1 }}>
        <Tabs>
          <Tabs.Screen name="index" options={{ title: "Profile" }} />
          <Tabs.Screen name="settings" options={{ title: "Settings" }} />
          <Tabs.Screen name="other" options={{ title: "Other" }} />
        </Tabs>
      </View>
    </View>
  );
}
