import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_KEY = "is_logged_in";

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const stored = await AsyncStorage.getItem(AUTH_KEY);
        setIsLoggedIn(stored === "true");
      } catch (err) {
        console.error("Failed to get login status:", err);
        setIsLoggedIn(false);
      } finally {
        setIsReady(true);
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (isReady && isLoggedIn !== null) {
      router.replace(isLoggedIn ? "/(tabs)" : "/login");
    }
  }, [isReady, isLoggedIn]);

  return null;
}
