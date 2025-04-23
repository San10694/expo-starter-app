import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsReady(true), 0); // defer navigation till mount
  }, []);

  useEffect(() => {
    if (isReady) {
      const isLoggedIn = false;
      router.replace(isLoggedIn ? "/(tabs)" : "/login");
    }
  }, [isReady]);

  return null;
}
