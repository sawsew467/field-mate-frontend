import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import GalleryScreen from "./screens/GalleryScreen";
import CameraScreen from "./screens/CameraScreen";
import Account from "./screens/AccountScreen";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Result from "./screens/Result";
// import CameraStack from "./screens/CameraScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ onPress }) => (
  <TouchableOpacity
    style={{
      top: 0,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#6DB557",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("./assets/icons/camera.png")}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: "#fff",
        }}
      />
    </View>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  const [capturedImage, setCapturedImage] = useState(null); 

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            // position: "absolute",
            // bottom: 25,
            // left: 20,
            // right: 20,
            backgroundColor: "#ffffff",
            // borderRadius: 15,
            height: 90,
            ...styles.shadow,
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <Tab.Screen
          name="Thư viện"
          component={GalleryScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                <Image
                  source={require("./assets/icons/gallery.png")}
                  resizeMode="contain"
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? "#6DB557" : "#748c94" },
                  ]}
                />
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? "#6DB557" : "#748c94" },
                  ]}
                >
                  Thư viện
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Máy ảnh"
          component={CameraScreen}
          options={{
            headerShown: false,
            tabBarStyle: {
              display: "none",
            },
            tabBarIcon: () => (
              <Image
                source={require("./assets/icons/camera.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#fff",
                }}
              />
            ),
            tabBarButton: (props) => (
              <CustomTabBarButton {...props}></CustomTabBarButton>
            ),
          }}
        />
        <Tab.Screen
          name="Tài khoản"
          component={Account}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                <Image
                  source={require("./assets/icons/account.png")}
                  resizeMode="contain"
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? "#6DB557" : "#748c94" },
                  ]}
                />
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? "#6DB557" : "#748c94" },
                  ]}
                >
                  Tài khoản
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
  tabLabel: {
    fontSize: 12,
  },
});

export default BottomTabNavigator;
