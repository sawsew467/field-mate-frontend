import React from "react";
import { View, StyleSheet } from "react-native";

function BottomNav() {
  return (
    <>
      <View
        style={{
          position: "absolute",
          bottom: 200,
          left: 20,
          right: 20,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
          display: "flex",
          alignItems: "center",
        }}
      >
      </View>
    </>
  );
}

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

export default BottomNav;
