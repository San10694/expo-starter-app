import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function Profile() {
  const goToLogin = () => {
    router.push("/login"); // or use router.replace("/login") if you don't want back navigation
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/ogw/AF2bZygjhkryt3O8ET-updrEWh2Sf42mj0Bsp3XqlPoRz6Xe66w=s32-c-mo",
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>Sandeep</Text>
              <Text style={styles.member}>Member since 1 year</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.logButton}>
            <Text style={styles.logText}>Log And Earn</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.coinsBox}>
          <Text style={styles.coinsText}>1082 coins</Text>
        </View>

        <View style={styles.buyAgainBox}>
          <View>
            <Text style={styles.buyAgainTitle}>Gaps can delay results</Text>
            <Text style={styles.buyAgainSubtitle}>
              Order Now, Stay Consistent!
            </Text>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Again</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.grid}>
          {[
            { icon: "document-text-outline", label: "My Plan" },
            { icon: "trending-up-outline", label: "Hair Progress" },
            { icon: "cube-outline", label: "Orders" },
            { icon: "help-circle-outline", label: "Help & Support" },
            { icon: "call-outline", label: "Book a Call" },
            { icon: "nutrition-outline", label: "Diet Plan" },
          ].map((item, index) => (
            <TouchableOpacity style={styles.gridItem} key={index}>
              <Ionicons name={item.icon} size={24} color="black" />
              <Text style={styles.gridText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.menuBox}>
          {["All Products", "Terms & Policies", "Read More"].map(
            (item, index) => (
              <TouchableOpacity style={styles.menuItem} key={index}>
                <Text style={styles.menuText}>{item}</Text>
                <Ionicons name="chevron-forward" size={18} color="#666" />
              </TouchableOpacity>
            )
          )}
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={goToLogin}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.version}>Version 1.8.2</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.light.brandSeconday,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  member: {
    color: "#666",
  },
  logButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  logText: {
    fontWeight: "bold",
  },
  coinsBox: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  coinsText: {
    fontSize: 16,
    color: "#fbbf24",
    fontWeight: "bold",
  },
  buyAgainBox: {
    margin: 16,
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buyAgainTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buyAgainSubtitle: {
    color: "#dcedc8",
  },
  buyButton: {
    backgroundColor: "#cddc39",
    padding: 10,
    borderRadius: 8,
  },
  buyButtonText: {
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 8,
  },
  gridItem: {
    backgroundColor: Colors.light.brandSeconday,
    padding: 16,
    borderRadius: 12,
    width: "30%",
    alignItems: "center",
    marginVertical: 8,
  },
  gridText: {
    marginTop: 8,
    textAlign: "center",
  },
  menuBox: {
    margin: 16,
    backgroundColor: "#fafafa",
    borderRadius: 12,
    paddingVertical: 8,
    elevation: 1,
    shadowColor: "#ccc",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: "#e57373",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    elevation: 2,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    alignItems: "center",
    padding: 16,
  },
  version: {
    color: "#888",
    fontWeight: "bold",
  },
});
