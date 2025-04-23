import { Colors } from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

//https://cdn-trya.goswirl.live/2524_3.mp4
//https://cdn-trya.goswirl.live/1705300758_3.mp4

export default function LoginScreen() {
  const [mobileNumber, setMobileNumber] = useState("");

  const isValid = /^[0-9]{10}$/.test(mobileNumber);

  const navigateToHome = () => {
    if (isValid) {
      router.push("/(tabs)");
    }
    AsyncStorage.setItem("is_logged_in", "true");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Logo Image */}
      <Image
        source={{ uri: "https://via.placeholder.com/300x200" }}
        style={styles.headerImage}
        resizeMode="contain"
      />

      {/* Traya Title */}
      <Text style={styles.logoText}>Traya.</Text>
      <Text style={styles.tagline}>Hair Loss Solution Backed by Science</Text>
      <Text style={styles.subText}>Log in or Sign up</Text>

      {/* Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text.replace(/[^0-9]/g, ""))}
          placeholderTextColor="#999"
        />
      </View>

      {/* Get OTP Button */}
      <TouchableOpacity
        style={[
          styles.otpButton,
          isValid ? styles.buttonActive : styles.buttonDisabled,
        ]}
        onPress={navigateToHome}
        disabled={!isValid}
      >
        <Text style={[styles.otpText, isValid && { color: "#fff" }]}>
          Log in
        </Text>
      </TouchableOpacity>

      {/* Footer Text */}
      <Text style={styles.footerText}>
        By proceeding, you consent to share your information with Traya and
        agree to Traya’s <Text style={styles.link}>Privacy Policy</Text> and{" "}
        <Text style={styles.link}>Terms of Service</Text>.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "center",
  },
  headerImage: {
    width: "100%",
    height: 180,
    marginBottom: 16,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    textAlign: "center",
    color: "#222",
    marginBottom: 24,
  },
  subText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    alignItems: "center",
  },
  countryCode: {
    fontSize: 16,
    marginRight: 8,
    color: "#444",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  otpButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonActive: {
    backgroundColor: Colors.light.tint,
  },
  buttonDisabled: {
    backgroundColor: "#ddd",
  },
  otpText: {
    color: "#999",
    fontSize: 16,
    fontWeight: "600",
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
    color: "#777",
  },
  link: {
    color: "#000",
    fontWeight: "bold",
  },
});
