import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Chat({ navigation }) {
  return (
    <View style={styles.profile}>
      <Text>This is a chat screen</Text>
      <Button onPress={() => navigation.navigate("Chat")} title="Next" />
    </View>
  );
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
