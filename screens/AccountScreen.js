import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const AccountScreen = () => {
  return (
    <ScrollView style={{
      flex: 1,
    }}>
      <View
        style={{
          padding: 12,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          height: 678
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          ></View>
          <Image
            source={require("../assets/avatar.png")}
            resizeMode="contain"
            style={{
              width: 140,
              height: 140,
              borderRadius: 140,
            }}
          ></Image>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/icons/logout.png")}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
              }}
            ></Image>
            <Text
              style={{
                color: "#E2783A",
                fontSize: 16,
              }}
            >
              Đăng xuất
            </Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "600",
            marginBottom: 16,
          }}
        >
          Trần Văn Bảo Thắng
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Số điện thoại
            </Text>
            <Text
              style={{
                fontSize: 16,
                opacity: 0.5,
              }}
            >
              0828828497
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Tổng lưu trữ
            </Text>
            <Text
              style={{
                fontSize: 16,
                opacity: 0.5,
              }}
            >
              375 ảnh
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Mật khẩu
            </Text>
            <Text
              style={{
                fontSize: 16,
                opacity: 0.5,
              }}
            >
              ************
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
