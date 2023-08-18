import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Result from "./Result";
import * as ImagePicker from "expo-image-picker";
import { getAIResult } from "../apis";

const Stack = createNativeStackNavigator();

export default function CameraStack() {
  const [capturedImage, setCapturedImage] = useState("");
  const [analysisResult, setAnalysisResult] = useState({});
  const [imageUri, setImageUri] = useState("");

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="camera"
        component={() => (
          <CameraScreen
            setCapturedImage={setCapturedImage}
            setAnalysisResult={setAnalysisResult}
            setImageUri={setImageUri}
          />
        )}
      ></Stack.Screen>
      <Stack.Screen
        name="Kết quả"
        component={() => (
          <Result
            capturedImage={capturedImage}
            analysisResult={analysisResult}
            imageUri={imageUri}
          ></Result>
        )}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export function CameraScreen({
  setCapturedImage,
  setAnalysisResult,
  setImageUri,
}) {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    try {
      setLoading(true);
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      const res = await getAIResult(data);
      setImageUri(data.uri);
      setCapturedImage(data.url);
      setAnalysisResult(res);
      navigation.navigate("Kết quả");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const pickPhoto = async () => {
    try {
      setLoading(true);
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      const res = await getAIResult(data);
      setImageUri(data.uri);
      setCapturedImage(data.url);
      setAnalysisResult(res);
      navigation.navigate("Kết quả");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "demodever");
    try {
      setLoading(true);
      console.log("loading...");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/de41uvd76/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log("upload success");
      const res = await getAIResult(data.url);
      console.log("getAIResult success");
      setCapturedImage(data.url);
      setAnalysisResult(res);
      navigation.navigate("Kết quả");
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.screenContainer}>
      <Camera style={styles.camera} ref={cameraRef} />
      <TouchableOpacity style={styles.captureButton2} onPress={pickPhoto}>
        <Text>Chọn ảnh từ thiết bị</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.captureButton1} onPress={takePhoto}>
        <Text>Chụp ảnh bằng camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate("Thư viện")}
      >
        <Image
          source={require("../assets/icons/close.png")}
          style={styles.closeIcon}
        />
      </TouchableOpacity>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#6DB557" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  captureButton1: {
    position: "absolute",
    bottom: 320,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 64,
    backgroundColor: "#6DB557",
  },
  captureButton2: {
    position: "absolute",
    bottom: 400,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 64,
    backgroundColor: "#6DB557",
  },
  captureIcon: {
    width: 24,
    height: 24,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 30,
    height: 30,
  },
  closeIcon: {
    width: "100%",
    height: "100%",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
});
