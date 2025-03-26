import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { ChevronLeft, ArrowRight } from "lucide-react-native";

export default function BookingSummary() {
  const [selectedSport, setSelectedSport] = useState("5 v 5");
  const [selectedPlayers, setSelectedPlayers] = useState(10);
  const totalAmount = 1020;
  const advanceAmount = 220;
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Event details */}
      <View style={{ marginBottom: 5 }}>
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
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#333",
              marginLeft: 12,
            }}
          >
            SKY LAND TURF,{" "}
            <Text style={{ color: "#6B7280", fontSize: 20 }}>Ayanavaram</Text>
          </Text>
        </View>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 24,
                color: "black",
                fontWeight: "bold",
                marginRight: 25,
              }}
            >
              Sep 15
            </Text>
            <Text
              style={{
                fontSize: 21,
                color: "black",
                fontWeight: "bold",
                paddingTop: 3,
              }}
            >
              09:00pm - 10:00pm
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "#00BE76",
                padding: 10,
                borderRadius: 20,
                alignSelf: "flex-start",
                marginTop: 10,
                color: "white",
                fontWeight: "bold",
                height: 35,
                paddingTop: 7,
                fontSize: 16,
                marginRight: 20,
              }}
            >
              Box Cricket
            </Text>
            <Text
              style={{
                backgroundColor: "#00BE76",
                padding: 10,
                borderRadius: 20,
                alignSelf: "flex-start",
                marginTop: 10,
                color: "white",
                fontWeight: "bold",
                height: 35,
                paddingTop: 7,
                fontSize: 16,
              }}
            >
              5 v 5 Pitches
            </Text>
          </View>
        </View>
      </View>

      {/* Bill Details */}
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bill Details</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Slot Cost</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>₹1,200</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Venue Offer</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
            -₹200
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Service Fee</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>₹20</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "green", fontSize: 20 }}>
            Total
          </Text>
          <Text style={{ fontWeight: "bold", color: "green", fontSize: 20 }}>
            ₹{totalAmount}
          </Text>
        </View>
      </View>
      <View>
        {/* Payment Options */}
        <View style={{ marginBottom: 10, padding: 15, marginTop: -10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Payment Options
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 15,
                borderRadius: 5,
                alignItems: "center",
                width: 265,
              }}
            >
              <View
                style={{
                  backgroundColor: "#999",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{ color: "black", fontWeight: "500", fontSize: 21 }}
                >
                  Advance
                </Text>
              </View>
              <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
                ₹{advanceAmount}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 15,
                borderRadius: 5,
                alignItems: "center",
                width: 265,
                borderColor: "green", // Để viền giống ảnh
              }}
            >
              <View
                style={{
                  backgroundColor: "#00be76",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "500", fontSize: 21 }}
                >
                  Full Amount
                </Text>
              </View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#00be76",
                }}
              >
                ₹{totalAmount}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sport Type Selection */}
        <View style={{ marginBottom: 10, padding: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            What will you be playing?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            {["4 v 4", "5 v 5", "6 v 6", "7 v 7", "8 v 8", "9 v 9"].map(
              (sport) => (
                <TouchableOpacity
                  key={sport}
                  style={[
                    {
                      paddingVertical: 5,
                      paddingHorizontal: 15,
                      borderRadius: 20,
                      alignItems: "center",
                    },
                    selectedSport === sport
                      ? { backgroundColor: "#00BE76" } // Nền xanh cho sport được chọn
                      : { backgroundColor: "transparent" }, // Nền trong suốt cho sport chưa chọn
                  ]}
                  onPress={() => setSelectedSport(sport)}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: selectedSport === sport ? "white" : "black", // Đổi màu chữ khi chọn
                    }}
                  >
                    {sport}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>

        {/* Players Selection */}
        <View style={{ marginBottom: 5, padding: 15 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              alignSelf: "flex-start", // Căn chữ về đầu
            }}
          >
            How many players?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
              alignItems: "center",
              gap: 56, // Khoảng cách đều giữa các số
            }}
          >
            {[8, 9, 10, 11, 12, 13, 14].map((num) => (
              <TouchableOpacity
                key={num}
                onPress={() => setSelectedPlayers(num)}
              >
                <View style={{ alignItems: "center", minHeight: 70 }}>
                  {selectedPlayers === num ? (
                    <View style={{ alignItems: "center", marginBottom: 5 }}>
                      {/* Vòng tròn trên cùng */}
                      <View
                        style={{
                          backgroundColor: "#00BE76",
                          width: 50,
                          height: 50,
                          borderRadius: 25,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 18,
                          }}
                        >
                          {num}
                        </Text>
                      </View>
                      {/* Mũi nhọn tam giác */}
                      <View
                        style={{
                          width: 0,
                          height: 0,
                          borderLeftWidth: 10,
                          borderRightWidth: 10,
                          borderBottomWidth: 15,
                          borderStyle: "solid",
                          borderLeftColor: "transparent",
                          borderRightColor: "transparent",
                          borderBottomColor: "#00BE76",
                        }}
                      />
                      {/* Hộp giá tiền */}
                      <View
                        style={{
                          backgroundColor: "#00BE76",
                          paddingHorizontal: 12,
                          paddingVertical: 5,
                          borderRadius: 15,
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: -1, // Đẩy lên để nối với mũi nhọn
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          Rs.102 /
                        </Text>
                        <Text style={{ color: "white", fontSize: 14 }}>
                          {" "}
                          👤{" "}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "black",
                        minHeight: 5, // Giữ số thẳng hàng
                        textAlignVertical: "center",
                      }}
                    >
                      {num}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Cancellation Policy */}
        <View style={{ marginBottom: -5, padding: 15, marginTop: -20 }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            Cancellation Policy
          </Text>
          <Text style={{ color: "black", fontSize: 17, fontWeight: "500" }}>
            Cancel before{" "}
            <Text style={{ color: "green", fontSize: 17, fontWeight: "500" }}>
              15th Sep, 4:00 pm
            </Text>
            to avail a refund. Service fee is non-refundable.
          </Text>
          <Text style={{ color: "black", fontSize: 17, fontWeight: "500" }}>
            If you cancel after the above time, you will lose the entire amount
            paid.
          </Text>
        </View>

        {/* Proceed to Pay */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#10B981",
          }}
        >
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "400",
                marginLeft: 12,
              }}
            >
              Full Amout
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 23,
                fontWeight: "bold",
                marginLeft: 12,
              }}
            >
              ₹{totalAmount}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 16,
              backgroundColor: "#10B981",
              height: 70,
            }}
          >
            {/* Nút PROCEED */}
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => navigation.navigate("paymentOption")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginRight: 10,
                }}
              >
                PROCEED TO PAY
              </Text>
              <ArrowRight size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
