import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import { createUser } from "@/lib/appwrite";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const submit = async () => {
    const { name, email, password } = form;

    if (!email || !password || !name)
      return Alert.alert("Error", "Please enter valid email & password");
    setIsSubmitting(true);
    try {
      await createUser({ email, password, name });

      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter Your Full Name"
        value={form.name}
        onChangeText={(text) => setForm((old) => ({ ...old, name: text }))}
        label="Full Name"
      />
      <CustomInput
        placeholder="Enter Your Email"
        value={form.email}
        onChangeText={(text) => setForm((old) => ({ ...old, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter Your Password"
        value={form.password}
        onChangeText={(text) => setForm((old) => ({ ...old, password: text }))}
        label="Password"
        secureTextEntry={true}
      />
      <CustomButton title="Sign Up" isLoading={isSubmitting} onPress={submit} />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Already Have An Account?
        </Text>
        <Link href="/sign-in" className="base-bold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
}
