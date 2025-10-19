import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await signOut(auth);
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo(a) 💜</Text>
      <Button title="Sair" color="#9c27b0" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ce93d8",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4a0072",
  },
});
