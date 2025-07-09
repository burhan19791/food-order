import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function _Layout() {
  return (
    <SafeAreaView>
      <Text>Auth Layout</Text>
      <Slot/>
    </SafeAreaView>
  );
}
