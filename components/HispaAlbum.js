import React from "react";
import { View, Image, Text, ScrollView } from "react-native";

const HispaAlbum = ({imageData}) => {
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
            fontWeight: 600,
          }}
        >
          Hispa
        </Text>
        <Text
          style={{
            fontSize: 14,
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
          {imageData
            .filter((image) => image.collectionName === "Hispa")
            .map((image) => (
              <Image
                source={{ uri: image.imageUrl }}
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 80,
                }}
              ></Image>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HispaAlbum;
