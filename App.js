import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <BottomTabNavigator />
  );
}
