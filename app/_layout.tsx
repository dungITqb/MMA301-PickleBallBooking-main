import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BottomTabNavigator() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00be76",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderColor: "#ddd",
          height: 60,
          paddingBottom: 5,
        },
        headerStyle: {
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderColor: "#ddd",
          height: 70,
        },
        headerTitleAlign: "center",
      }}
    >
      {/* Home Screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="th-large" size={size} color={color} />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="th-large"
                size={22}
                color="#00be76"
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="HomePage"
        options={{
          title: "Turf",
          tabBarIcon: ({ color, size }) => (
            <Icon name="map" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="paymentSuccess"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="paymentOption"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="savePassword"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="TurfView"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="TurfBooking"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="BookingScreen"
        options={{
          title: "Booking",
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar-check-o" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="BookingSummary"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="FavoriteScreen"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="forgetPassword"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
