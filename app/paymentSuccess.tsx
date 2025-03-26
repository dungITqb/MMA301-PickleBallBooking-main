import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { CheckCircle } from "lucide-react-native";
import QRCode from "react-native-qrcode-svg";

const PaymentSuccess: React.FC = () => {
  const navigation = useNavigation();

  // Dữ liệu giả lập (Có thể thay bằng dữ liệu từ API)
  const bookingDetails = {
    name: "Surendhar P",
    id: "Surendhar_PV",
    mobile: "+91 9500804572",
    sport: "Box Cricket",
    ground: "Sky Land Truf",
    address: "Ayanavaram",
    bookingTime: "9:00 - 10:00 PM",
    players: "5 v 5",
    date: "15-09-2024",
    amount: "Rs. 1020",
    transactionId: "21487987329578",
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={["#DFFFD8", "#FFFFFF"]} style={styles.header}>
        <CheckCircle size={40} color="#00BE76" />
        <Text style={styles.successText}>Congratulations!</Text>
        <Text style={styles.subText}>Your Slot has been booked!</Text>
      </LinearGradient>

      {/* Ticket Section */}
      <View style={styles.ticketContainer}>
        <Text style={styles.ticketTitle}>TICKET</Text>
        <Text style={styles.scanText}>
          Scan this QR on the Scanner Machine When you are in Entrance
        </Text>

        {/* QR Code */}
        <View style={styles.qrContainer}>
          <QRCode value={bookingDetails.transactionId} size={100} />
        </View>

        {/* Booking Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>NAME</Text>
              <Text style={styles.value}>{bookingDetails.name}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>ID</Text>
              <Text style={styles.value}>{bookingDetails.id}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>MOBILE</Text>
              <Text style={styles.value}>{bookingDetails.mobile}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Sport Name</Text>
              <Text style={styles.value}>{bookingDetails.sport}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Turf Ground Name</Text>
              <Text style={styles.value}>{bookingDetails.ground}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Address</Text>
              <Text style={styles.value}>{bookingDetails.address}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Booking Time</Text>
              <Text style={styles.value}>{bookingDetails.bookingTime}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>{bookingDetails.date}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Players</Text>
              <Text style={styles.value}>{bookingDetails.players}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Amount</Text>
              <Text style={styles.value}>{bookingDetails.amount}</Text>
            </View>
          </View>

          <Text style={styles.tran}>Transaction ID</Text>
          <Text style={styles.transactionId}>
            {bookingDetails.transactionId}
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Text style={styles.buttonTextHome}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.buttonText}>Download Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",

    alignItems: "center",
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  successText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00BE76",
    marginTop: 10,
  },
  subText: {
    fontSize: 16,
    color: "#333",
  },
  ticketContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  ticketTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00BE76",
    textAlign: "center",
  },
  scanText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "400",
  },
  qrContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  detailsContainer: {
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingTop: 10,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingLeft: 80,
  },
  column: {
    width: "48%",
  },
  label: {
    fontSize: 16,
    color: "#777",
    fontWeight: "bold",
  },
  value: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
  },
  transactionId: {
    fontSize: 18,
    fontWeight: "800",
    color: "#333",
    marginTop: 5,
    marginLeft: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    padding: 30,
  },
  homeButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 30,
    width: "45%",
    alignItems: "center",
    borderWidth: 1, // Độ dày viền
    borderColor: "green", // Màu viền đen
  },
  downloadButton: {
    backgroundColor: "#00BE76",
    paddingVertical: 10,
    borderRadius: 30,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  tran: {
    fontSize: 20,
    color: "#777",
    fontWeight: "600",
    marginLeft: 210,
  },
  buttonTextHome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00B872",
  },
});

export default PaymentSuccess;
