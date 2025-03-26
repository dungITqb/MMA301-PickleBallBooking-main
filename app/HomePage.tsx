import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function HomePage() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Icon name="map-marker" size={16} color="black" />
          <Text style={styles.locationText}> DA NANG</Text>
        </View>
        <Text style={styles.welcomeText}>WELCOME BACK, Smoggy</Text>
      </View>

      {/* Venue Cards */}
      <VenueCard
        title="Hotfut SPR City"
        location="Stephenson Road, Premblar"
        imageSource={require("../assets/venue1.png")}
        onPress={() => router.push("/TurfView")}
      />
      <VenueCard
        title="Hotfut Vivira Mall"
        location="OMR Road, Navalur"
        imageSource={require("../assets/venue2.png")}
        onPress={() => router.push("/TurfView")}
      />
      <VenueCard
        title="Play Champs Badminton"
        location="OMR Road, Navalur"
        imageSource={require("../assets/venue3.png")}
        onPress={() => router.push("/TurfView")}
      />
      <VenueCard
        title="Hello how are you"
        location="OMR Road, Navalur"
        imageSource={require("../assets/venue4.png")}
        onPress={() => router.push("/TurfView")}
      />
    </ScrollView>
  );
}

/* Reusable VenueCard Component */
const VenueCard = ({ title, location, imageSource, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.venueCard}>
    <Image source={imageSource} style={styles.venueImage} />
    <View style={styles.venueDetails}>
      <Text style={styles.venueTitle}>{title}</Text>
      <Text style={styles.venueLocation}>{location}</Text>
    </View>
  </TouchableOpacity>
);

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  venueCard: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },
  venueImage: {
    width: "100%",
    height: 150,
  },
  venueDetails: {
    padding: 10,
  },
  venueTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  venueLocation: {
    fontSize: 14,
    color: "#666",
  },
});
