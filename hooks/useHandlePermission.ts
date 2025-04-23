import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PERMISSION_KEY = 'notification_permission_status';
const TIMESTAMP_KEY = 'notification_last_prompt_time';

// Duration to wait before re-prompting (3 days). Set to 1 min for testing.
const TIME_INTERVAL_MS = 60000;

const useNotificationPermission = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [shouldShowPrompt, setShouldShowPrompt] = useState(false);
  const [loading, setLoading] = useState(true);

  const getNow = () => new Date().getTime();

  const checkPermission = async () => {
    setLoading(true);

    const settings = await Notifications.getPermissionsAsync();
    const granted = settings.granted || settings.ios?.status === 3;
    setHasPermission(granted);

    if (!granted) {
      const now = getNow();
      const lastShown = await AsyncStorage.getItem(TIMESTAMP_KEY);

      const lastShownTime = lastShown ? Number(lastShown) : 0;

      // If enough time has passed, show prompt
      if (now - lastShownTime > TIME_INTERVAL_MS) {
        setShouldShowPrompt(true);
        await AsyncStorage.setItem(TIMESTAMP_KEY, String(now)); // Update prompt timestamp
      }
    }

    setLoading(false);
  };

  const requestPermission = async () => {
    const settings = await Notifications.requestPermissionsAsync();
    const granted = settings.granted || settings.ios?.status === 3;

    setHasPermission(granted);

    // Save permission result and timestamp regardless of outcome
    await AsyncStorage.setItem(PERMISSION_KEY, granted ? 'granted' : 'denied');
    await AsyncStorage.setItem(TIMESTAMP_KEY, String(getNow()));
    setShouldShowPrompt(false);

    return granted;
  };

  useEffect(() => {
    checkPermission();
  }, []);

  return {
    hasPermission,
    loading,
    shouldShowPrompt,
    checkPermission,
    requestPermission,
  };
};

export default useNotificationPermission;
