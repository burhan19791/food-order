import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function SignUp() {
  return (
    <View>
      <Text>Sign Up</Text>
      <Button title='Sign In' onPress={() => router.push("/sign-in")} />
    </View>
  );
}
