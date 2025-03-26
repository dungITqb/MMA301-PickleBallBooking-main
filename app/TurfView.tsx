import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

export default function TurfView() {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false); // State cho nút tim

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Hình ảnh sân + Nút quay về */}
      <View>
        <Image
          source={require("../assets/turfview.png")}
          style={{ width: "100%", height: 200 }}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 10, // Điều chỉnh khoảng cách từ trên xuống
            left: 10, // Điều chỉnh khoảng cách từ trái sang
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền đen mờ để dễ nhìn
            padding: 10,
            borderRadius: 20,
          }}
        >
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Thông tin chi tiết */}
      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            SKY LAND TURF
          </Text>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <Icon
              name="heart"
              size={24}
              color={isFavorite ? "red" : "gray"} // Đổi màu dựa vào trạng thái
            />
          </TouchableOpacity>
        </View>
        <Text style={{ color: "gray" }}>Ayanavaram</Text>

        {/* Đánh giá */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Icon name="star" size={16} color="green" />
          <Text style={{ marginLeft: 5 }}>4.0 [4]</Text>
        </View>

        {/* Địa chỉ */}
        <Text style={{ color: "gray" }}>
          📍13,2nd Cross St, near Indian Bank, VP Colony Branch, ICF South
          Colony,Ayanavaram, Chennai.
        </Text>

        {/* Nút điều hướng & gọi điện */}
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              padding: 10,
              minWidth: 195, // Chiều rộng tối thiểu
              borderRadius: 5,
              marginRight: 5,
            }}
          >
            <Text
              style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
            >
              Get Direction
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#00be76",
              padding: 10,
              minWidth: 45, // Chiều rộng tối thiểu
              maxWidth: 60, // Chiều rộng tối đa
              borderRadius: 5,
              marginLeft: 5,
            }}
          >
            <Icon
              name="phone"
              size={20}
              color="white"
              style={{ textAlign: "center" }}
            />
          </TouchableOpacity>
        </View>

        {/* Ưu đãi giảm giá */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#ddd",
                  padding: 10,
                  borderRadius: 10,
                  flex: 1,
                  marginHorizontal: 5,
                }}
              >
                <Icon name="gift" size={20} color="#00be76" />
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontWeight: "bold" }}>Flatt Rs.200 off</Text>
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    On all slots
                  </Text>
                </View>
              </View>
            ))}
        </View>

        {/* Các môn thể thao */}
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
            Available Sports
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "#00be76",
                color: "#fff",
                padding: 8,
                borderRadius: 20,
                marginRight: 5,
              }}
            >
              Box Cricket
            </Text>
            <Text
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                padding: 8,
                borderRadius: 20,
                marginRight: 5,
              }}
            >
              Cricket
            </Text>
            <Text
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                padding: 8,
                borderRadius: 20,
              }}
            >
              Football
            </Text>
          </View>
        </View>

        {/* Venue Info */}
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
            Venue Info
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                backgroundColor: "#00be76",
                color: "#fff",
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 10,
              }}
            >
              Pitch
            </Text>
            <Text style={{ marginLeft: 5, fontWeight: "bold" }}>• 1 Nets</Text>
          </View>
          <Text>Equipment Provided</Text>
          <Text>Artificial Turf</Text>
        </View>

        {/* Amenities */}
        <View style={{ paddingVertical: 10, marginBottom: 6 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
            Amenities
          </Text>
          <View>
            {[
              { icon: "money", text: "UPI Accepted" },
              { icon: "credit-card", text: "Card Accepted" },
              { icon: "car", text: "Free Parking" },
              { icon: "bath", text: "Toilets" },
              { icon: "shower", text: "Showers" },
            ].map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 5,
                }}
              >
                <Icon
                  name={item.icon}
                  size={20}
                  color="#00be76"
                  style={{ marginRight: 8 }}
                />
                <Text>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Nút chọn thời gian */}
      <TouchableOpacity
        style={{
          backgroundColor: "#00be76",
          padding: 15,
        }}
        onPress={() => navigation.navigate("TurfBooking")} // Chuyển hướng đến TurfBooking
      >
        <Text
          style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
        >
          PROCEED TO SELECT A SLOT
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
