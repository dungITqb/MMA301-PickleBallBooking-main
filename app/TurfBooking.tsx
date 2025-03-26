import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ChevronLeft, Percent, ArrowRight } from "lucide-react-native";
import { useNavigation } from "expo-router";

const TurfBooking = ({}) => {
  const [selectedSession, setSelectedSession] = useState("Evening");
  const sessions = ["Twilight", "Morning", "Noon", "Evening"];
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          backgroundColor: "#E3FCEC",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>
          SKY LAND TURF, <Text style={{ color: "#6B7280" }}>Ayanavaram</Text>
        </Text>
      </View>

      <ScrollView style={{ paddingHorizontal: 16 }}>
        {/* Format */}
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 16,
            marginBottom: 10,
          }}
        >
          FORMAT
        </Text>
        <View
          style={{
            backgroundColor: "#00BE76",
            padding: 10,
            borderRadius: 20,
            alignSelf: "flex-start",
            marginTop: 10,
            marginBottom: 15,
            color: "white",
            fontWeight: "bold",
            height: 35,
            paddingTop: 7,
            fontSize: 16,
            marginRight: 30,
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>Box Cricket</Text>
        </View>

        {/* Number of Pitches */}
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 16 }}>
          NO. OF PITCHES
        </Text>
        <View
          style={{
            backgroundColor: "#10B981",
            paddingLeft: 16,
            borderRadius: 15,
            alignSelf: "flex-start",
            marginTop: 4,
            width: 40,
            height: 30,
            paddingTop: 5,
          }}
        >
          <Text
            style={{ color: "white", alignItems: "center", fontWeight: "bold" }}
          >
            1
          </Text>
        </View>

        {/* Date Selection */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 24 }} // Tăng khoảng cách
        >
          {["Sun 15 Sep", "Mon 16 Sep", "Tue 17 Sep", "Wed 18 Sep"].map(
            (date, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  padding: 8,
                  marginRight: 10,
                  backgroundColor: index === 0 ? "#00BE76" : "#F3F4F6",
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: index === 0 ? "white" : "black" }}>
                  {date}
                </Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>

        {/* Offer Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 24, // Tăng khoảng cách
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            width: 170,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#ECFDF5",
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Percent size={20} color="#10B981" />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Flat Rs.200 off
            </Text>
            <Text style={{ fontSize: 12, color: "#6B7280" }}>On all slots</Text>
          </View>
        </View>

        {/* Time Slots */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 24, // Tăng khoảng cách
            marginBottom: 10,
          }}
        >
          {sessions.map((session) => (
            <TouchableOpacity
              key={session}
              onPress={() => setSelectedSession(session)}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 20,
                backgroundColor:
                  selectedSession === session ? "#10B981" : "#E5E7EB",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: selectedSession === session ? "white" : "black",
                }}
              >
                {session}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          {["6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm"].map(
            (time, index) => (
              <Text key={index} style={{ color: "black" }}>
                {time}
              </Text>
            )
          )}
        </View>

        {/* Time Slot Selection */}
        <View
          style={{
            height: 40,
            backgroundColor: "#D1D5DB",
            marginTop: 24, // Tăng khoảng cách
            borderRadius: 8,
            flexDirection: "row",
            overflow: "hidden",
          }}
        >
          <View style={{ flex: 3, backgroundColor: "#D1D5DB" }} />
          <View style={{ flex: 2, backgroundColor: "#10B981" }} />
          <View style={{ flex: 2, backgroundColor: "white" }} />
        </View>
      </ScrollView>

      {/* Bottom Section */}
      <View style={{ backgroundColor: "white" }}>
        {/* Offer Bar */}
        <View
          style={{
            backgroundColor: "#EF4444",
            padding: 12,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Percent size={20} color="white" />
          <Text style={{ color: "white", marginLeft: 8 }}>
            Offer applied! You are saving ₹200
          </Text>
        </View>

        {/* Price & Proceed */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            backgroundColor: "#10B981",
          }}
        >
          {/* Giá và thông tin đặt chỗ */}
          <View>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              ₹1,000{" "}
              <Text
                style={{ textDecorationLine: "line-through", color: "#D1D5DB" }}
              >
                ₹1,200
              </Text>
            </Text>
            {/* Thời gian và số slot */}
            <Text style={{ color: "white", fontSize: 14 }}>
              9 pm - 10 pm • 2 Slots
            </Text>
          </View>

          {/* Nút PROCEED */}
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.navigate("BookingSummary")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              PROCEED
            </Text>
            <ArrowRight size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TurfBooking;
