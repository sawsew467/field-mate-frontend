import React from "react";
import { View, Image, Text, ScrollView } from "react-native";

const RecentAlbum = ({ imageData }) => {
  return (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Gần đây
        </Text>
        <Text
          style={{
            fontSize: 14,
            opacity: 0.4,
          }}
        >
          Xem thêm
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <Image
            source={{ uri: imageData[0]?.imageUrl }}
            resizeMode="contain"
            style={{
              width: 152,
              height: 152,
            }}
          ></Image>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              height: 152,
              flexWrap: true,
            }}
          >
            {imageData.map((img, index) => (
              index !== 0 &&
              <Image
                source={{uri: img.imageUrl}}
                resizeMode="contain"
                style={{
                  width: 74,
                  height: 74,
                }}
              ></Image>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecentAlbum;
