import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

// Define types for Payment Method
type PaymentMethod = "GPay" | "PhonePe" | "Paytm";

const PaymentOption: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("GPay");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header với nền gradient */}
      <LinearGradient
        colors={["#D4FEE6", "#F8F8F8"]} // Hiệu ứng xanh nhạt
        style={styles.header}
      >
        {/* Nút quay lại */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ChevronLeft size={28} color="black" />
        </TouchableOpacity>

        {/* Tiêu đề và số tiền */}
        <View style={styles.headerContent}>
          <Text style={styles.title}>Payment Options</Text>
          <Text style={styles.amount}>₹1,020</Text>
        </View>

        {/* Bộ đếm thời gian */}
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>03:00</Text>
        </View>
      </LinearGradient>

      {/* UPI Section */}
      <Text style={styles.sectionTitle}>UPI</Text>
      <View style={styles.optionContainer}>
        {renderOption(
          "GPay",
          "GPay",
          require("../assets/GPay.png"),
          selectedMethod,
          setSelectedMethod
        )}
        {renderOption(
          "PhonePe",
          "PhonePe",
          require("../assets/PhonePe.png"),
          selectedMethod,
          setSelectedMethod
        )}
        {renderOption(
          "Paytm",
          "Paytm",
          require("../assets/Paytm.png"),
          selectedMethod,
          setSelectedMethod
        )}
        <TouchableOpacity style={styles.addOption}>
          <Text style={styles.addText}>+ Add New UPI ID</Text>
          <Text style={styles.subText}>
            You need to have a registered UPI ID
          </Text>
        </TouchableOpacity>
      </View>

      {/* Credit / Debit Cards */}
      <Text style={styles.sectionTitle}>Credit & Debit Cards</Text>
      <TouchableOpacity style={styles.addOption}>
        <Text style={styles.addText}>+ Add New Card</Text>
        <Text style={styles.subText}>Save and pay via Cards</Text>
      </TouchableOpacity>

      {/* Net Banking */}
      <Text style={styles.sectionTitle}>Other Options</Text>
      <TouchableOpacity style={styles.addOption}>
        <Text style={styles.addText}>🏦 Net Banking</Text>
        <Text style={styles.subText}>Select from list of banks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.payNowButton}
        onPress={() => navigation.navigate("paymentSuccess")}
      >
        <Text style={styles.payNowText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

// Function render options
const renderOption = (
  key: PaymentMethod,
  label: string,
  icon: any,
  selectedMethod: PaymentMethod,
  setSelectedMethod: React.Dispatch<React.SetStateAction<PaymentMethod>>
) => {
  return (
    <TouchableOpacity
      key={key}
      style={[
        styles.paymentOption,
        selectedMethod === key && styles.selectedOption,
      ]}
      onPress={() => setSelectedMethod(key)}
    >
      <View style={styles.optionContent}>
        {/* Ảnh to hơn */}
        <Image source={icon} style={styles.largeIcon} />
        <Text style={styles.optionText}>{label}</Text>
      </View>

      {/* Nếu phương thức này đang được chọn, hiển thị nút "Pay on ..." */}
      {selectedMethod === key ? (
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay on {label}</Text>
        </TouchableOpacity>
      ) : (
        <RadioButton
          value={key}
          status={selectedMethod === key ? "checked" : "unchecked"}
          color="#00BE76"
          onPress={() => setSelectedMethod(key)}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  headerContent: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00BE76",
  },
  timerContainer: {
    borderWidth: 1,
    borderColor: "#00BE76",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  timerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#00BE76",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    paddingLeft: 15,
  },
  optionContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#F4F4F4",
  },
  selectedOption: {
    backgroundColor: "#E8F5E9",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 15,
  },
  largeIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#00BE76",
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  payButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  addOption: {
    padding: 15,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    marginTop: 10,
  },
  addText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00BE76",
  },
  subText: {
    fontSize: 16,
    color: "#8E8E8E",
    marginTop: 2,
  },
  payNowButton: {
    backgroundColor: "#00BE76",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
    width: 200,
    marginLeft: 200,
  },
  payNowText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default PaymentOption;
