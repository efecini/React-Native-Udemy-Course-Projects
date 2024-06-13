import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 80,
        flexDirection: "row",
        width: "100%",
        height: 1000,
        justifyContent: "space-evenly",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
