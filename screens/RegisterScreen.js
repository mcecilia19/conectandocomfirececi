import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleRegister = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.replace("Home");
    } catch (error) {
      Alert.alert("Erro", "Falha ao criar conta. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta 💜</Text>

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

      <Input
        placeholder="Confirmar Senha"
        leftIcon={{ type: "font-awesome", name: "lock", color: "#fff" }}
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        inputStyle={{ color: "#fff" }}
      />

      <Button
        title="Cadastrar"
        buttonStyle={styles.button}
        onPress={handleRegister}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textLink}>Já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8e24aa",
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
    backgroundColor: "#ab47bc",
    borderRadius: 10,
  },
  textLink: {
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
  },
});
