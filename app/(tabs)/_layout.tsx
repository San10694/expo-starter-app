import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Animated, Easing } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

function AnimatedIcon({ name, color, focused }: { name: string; color: string; focused: boolean }) {
  const scale = React.useRef(new Animated.Value(focused ? 1.2 : 1)).current;

  React.useEffect(() => {
    Animated.timing(scale, {
      toValue: focused ? 1.2 : 1,
      duration: 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <IconSymbol size={28} name={name} color={color} />
    </Animated.View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            borderTopWidth: 0,
            backgroundColor: 'transparent',
          },
          android: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            elevation: 10,
          },
        }),
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name="house.fill" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Buy Again',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name="add.shopping.cart" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name="video.collection" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'You',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name="person-outline" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
