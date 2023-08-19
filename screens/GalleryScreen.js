import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import RecentAlbum from "../components/RecentAlbum";
import HealthyAlbum from "../components/HealthyAlbum";
import BrownSpotAlbum from "../components/BrownSpotAlbum";
import HispaAlbum from "../components/HispaAlbum";
import BlastAlbum from "../components/BlastAlbum";
import BottomTabNavigator from "../BottomTabNavigator";
import BottomNav from "../components/BottomNav";
import { getAllImages } from "../apis";

const GalleryScreen = () => {
  const [imageData, setImageData] = useState([])
  const getData = async () => {
    const res = await getAllImages();
    setImageData(res);
  }
  useEffect(()=> {
    getData()
  },[])
  console.log("imageData:", imageData);
  return (
    <ScrollView>
      <View
        style={{
          padding: 12,
          backgroundColor: "#fff",
          position: 'relative',
          flex: 1,
          paddingBottom: 130,
        }}
      >
        <RecentAlbum imageData={imageData}></RecentAlbum>
        <HealthyAlbum imageData={imageData}></HealthyAlbum>
        <BrownSpotAlbum imageData={imageData}></BrownSpotAlbum>
        <HispaAlbum imageData={imageData}></HispaAlbum>
        <BlastAlbum imageData={imageData}></BlastAlbum>
      </View>
    </ScrollView>
  );
};

export default GalleryScreen;
