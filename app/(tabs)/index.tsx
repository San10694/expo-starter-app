import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Colors } from "@/constants/Colors";
import GenericBottomSheet from "@/components/BottomSheet";
import useNotificationPermission from "@/hooks/useHandlePermission";
import CustomTextInput from "@/components/Searchbar";

export default function HomeScreen() {
  const [showPermission, setShowPermission] = useState(false);
  const [text, setText] = useState("");
  const { hasPermission, loading, shouldShowPrompt, requestPermission } =
    useNotificationPermission();

  useEffect(() => {
    if (shouldShowPrompt) {
      setTimeout(() => {
        setShowPermission(true);
      }, 1000);
    }
  }, [shouldShowPrompt]);

  console.log("🚀 ~ HomeScreen ~ shouldShowPrompt:", shouldShowPrompt);

  return (
    <ScrollView style={styles.container}>
      <GenericBottomSheet
        isVisible={showPermission}
        title="Small Reminders, Big Results"
        subtitle="Turn on notifications to never lose sight of your hair goals"
        primaryLabel="Enable Notification"
        secondaryLabel="Not Now"
        onPrimaryPress={() => {
          // Enable notifications logic
          setShowPermission(false);
          requestPermission();
        }}
        onSecondaryPress={() => setShowPermission(false)}
      />
      {/* <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Sandeep Tiwari</Text>
      </View> */}
      <CustomTextInput
        label=""
        placeholder="Search for your kit"
        value={text}
        onChangeText={setText}
      />

      {/* Reorder Widget */}
      <View style={styles.widgetBox}>
        <Text style={styles.widgetTitle}>Reorder Your Kit</Text>
        <View style={styles.card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Want To See Results In Time?</Text>
            <Text style={styles.cardText}>
              Gaps can delay results. Order your kit now.
            </Text>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Group_102353236_1.png?v=1691063839",
            }}
            style={styles.cardImage}
          />
        </View>
      </View>

      {/* Need Help Section */}
      <View style={styles.widgetBox}>
        <Text style={styles.widgetTitle}>Need Help?</Text>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpButtonText}>How To Use</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpButtonText}>Diet Plan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Diet Plan Widget */}
      <View style={styles.widgetBox}>
        <Text style={styles.widgetTitle}>Diet Plan</Text>
        <View style={styles.card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardText}>
              Get your digestion on track by eliminating dairy
            </Text>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>View My Plan</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Group_1_1_1.png?v=1691063839",
            }}
            style={styles.cardImage}
          />
        </View>
      </View>

      {/* Traya Heroes Carousel */}
      <View style={styles.widgetBox}>
        <Text style={styles.widgetTitle}>Traya Heroes</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={heroes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.heroCard}>
              <Image
                source={item.image}
                style={styles.heroImage}
                resizeMode="cover"
              />
              <Text style={styles.heroTitle}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      {/* Support CTA */}
      <View style={styles.widgetBox}>
        <Text style={styles.widgetTitle}>We are here for you, always.</Text>
        <Text style={styles.cardText}>Talk to your hair experts for free.</Text>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Chat with us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Book A Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const heroes = [
  {
    id: "1",
    name: "23-Year-Old's Epic Hair Comeback!",
    image: require("../../assets/images/hero-profile.webp"),
  },
  {
    id: "2",
    name: "Results are best, my hair is back on my head",
    image: require("../../assets/images/hero-profile.webp"),
  },
  {
    id: "3",
    name: "Thicker hair, happier me!",
    image: require("../../assets/images/hero-profile.webp"),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f3",
    padding: 16,
    marginVertical: 16,
  },
  header: {
    backgroundColor: Colors.light.tint,
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
  widgetBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 1,
  },
  widgetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: Colors.light.text,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: Colors.light.text,
    marginBottom: 12,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginLeft: 12,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: Colors.light.brandSeconday,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: Colors.light.text,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: Colors.light.brandSeconday,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  secondaryButtonText: {
    color: Colors.light.text,
    fontWeight: "600",
  },
  helpButton: {
    flex: 1,
    backgroundColor: Colors.light.brandSeconday,
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 12,
  },
  helpButtonText: {
    color: Colors.light.text,
    fontWeight: "600",
  },
  heroCard: {
    width: 150,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fafafa",
    elevation: 1,
    padding: 8,
  },
  heroImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  heroTitle: {
    fontSize: 13,
    marginTop: 8,
    fontWeight: "600",
    color: "#444",
  },
});
