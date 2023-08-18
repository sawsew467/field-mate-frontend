import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { saveImage } from "../apis";

function Result({ capturedImage, analysisResult, imageUri }) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const widthPhoto = 420;
  const xCenter = analysisResult.bounding_box[0] * widthPhoto;
  const yCenter = analysisResult.bounding_box[1] * widthPhoto;
  const boxWidth = analysisResult.bounding_box[2] * widthPhoto;
  const boxHeight = analysisResult.bounding_box[3] * widthPhoto;
  const x1 = {
    x: xCenter - boxWidth / 2,
    y: yCenter - boxHeight / 2,
  };
  useEffect(() => {
    switch (analysisResult.class) {
      case "Healthy":
        setOption("Healthy");
        break;
      case "BrownSpot":
        setOption("Brown Spot");
        break;
      case "Hispa":
        setOption("Hispa");
        break;
      case "LeafBlast":
        setOption("Leaf Blast");
        break;
    }
  }, []);
  const [option, setOption] = useState("Hispa");
  const handleSaveImage = async () => {
    try {
      setLoading(true);
      const body = {
        collectionName: option,
        imageUrl: capturedImage,
        x_center: analysisResult.bounding_box[0],
        y_center: analysisResult.bounding_box[1],
        width: analysisResult.bounding_box[2],
        height: analysisResult.bounding_box[3],
      };
      const res = await saveImage(body);
      console.log("Image saved");
      console.log(res);
      navigation.goBack()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // console.log("imageUri", imageUri);
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(109, 181, 87, 0.47)",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginBottom: 12,
            marginTop: 12,
          }}
        >
          {option}
        </Text>
        {imageUri && (
          <View
            style={{
              width: 420,
              height: 420,
              position: "relative",
            }}
          >
            <View
              style={{
                width: boxWidth,
                height: boxHeight,
                position: "absolute",
                top: x1.y,
                left: x1.x,
                zIndex: 2,
                borderWidth: boxWidth === 0 || boxHeight === 0 ? 0 : 2,
                borderColor: "red",
                backgroundColor: "transparent",
              }}
            ></View>
            <Image
              source={{ uri: imageUri }}
              style={{
                width: 420,
                height: 420,
                display: "flex",
                position: "absolute",
                zIndex: 1,
              }}
            />
          </View>
        )}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.albumButton,
                borderWidth: option === "Healthy" ? 2 : 0,
              }}
            >
              <Text
                style={{
                  ...styles.albumText,
                  color: option === "Healthy" ? "#6DB557" : "#000",
                  fontWeight: option === "Healthy" ? "bold" : "normal",
                }}
              >
                Healthy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.albumButton,
                borderWidth: option === "Brown Spot" ? 2 : 0,
              }}
            >
              <Text
                style={{
                  ...styles.albumText,
                  color: option === "Brown Spot" ? "#6DB557" : "#000",
                  fontWeight: option === "Brown Spot" ? "bold" : "normal",
                }}
              >
                Brown Spot
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.albumButton,
                borderWidth: option === "Leaf Blast" ? 2 : 0,
              }}
            >
              <Text
                style={{
                  ...styles.albumText,
                  color: option === "Leaf Blast" ? "#6DB557" : "#000",
                  fontWeight: option === "Leaf Blast" ? "bold" : "normal",
                }}
              >
                Leaf Blast
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.albumButton,
                borderWidth: option === "Hispa" ? 2 : 0,
              }}
            >
              <Text
                style={{
                  ...styles.albumText,
                  color: option === "Hispa" ? "#6DB557" : "#000",
                  fontWeight: option === "Hispa" ? "bold" : "normal",
                }}
              >
                Hispa
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              paddingTop: 24,
              paddingBottom: 24,
              width: "50%",
              backgroundColor: "#224F9A",
            }}
            onPress={handleSaveImage}
          >
            <Text
              style={{
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Lưu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingTop: 24,
              paddingBottom: 24,
              width: "50%",
              backgroundColor: "#E2783A",
            }}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={{
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Hủy
            </Text>
          </TouchableOpacity>
        </View>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#6DB557" />
          </View>
        )}
      </View>
    </>
  );
}

export default Result;

const styles = StyleSheet.create({
  albumButton: {
    width: "50%",
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 22,
    paddingRight: 22,
    borderColor: "#6DB557",
    backgroundColor: "#FFF",
  },
  albumText: {
    textAlign: "center",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
});
