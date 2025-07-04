import { Slot } from "expo-router";
import React, { Suspense } from "react";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Suspense
      fallback={
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Text>Loading...</Text>
        </View>
      }
    >
      <Slot />
    </Suspense>
  );
}
