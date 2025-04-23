import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';

const useNotificationPermission = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkPermission = async () => {
    setLoading(true);
    const settings = await Notifications.getPermissionsAsync();
    setHasPermission(settings.granted || settings.ios?.status === 3); // 3 === GRANTED on iOS
    setLoading(false);
  };

  const requestPermission = async () => {
    const settings = await Notifications.requestPermissionsAsync();
    const granted = settings.granted || settings.ios?.status === 3;
    setHasPermission(granted);
    return granted;
  };

  useEffect(() => {
    checkPermission();
  }, []);

  return {
    hasPermission,
    loading,
    checkPermission,
    requestPermission,
  };
};

export default useNotificationPermission;
