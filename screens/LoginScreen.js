import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace("Home");
    } catch (error) {
      Alert.alert("Erro", "Email ou senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cicilia 💜</Text>

      <Input
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope", color: "#fff" }}
        value={email}
        onChangeText={setEmail}
        inputStyle={{ color: "#fff" }}
      />

      <Input
        placeholder="Senha"
        leftIcon={{ type: "font-awesome", name: "lock", color: "#fff" }}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        inputStyle={{ color: "#fff" }}
      />

      <Button
        title="Entrar"
        buttonStyle={styles.button}
        onPress={handleLogin}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.textLink}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a1b9a",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#9c27b0",
    borderRadius: 10,
  },
  textLink: {
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
  },
});
