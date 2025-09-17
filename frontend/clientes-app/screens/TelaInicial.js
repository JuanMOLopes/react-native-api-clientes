import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App de Clientes</Text>
      <Text style={styles.subtitle}>
        Use o menu lateral para navegar entre as funcionalidades.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 16,
  },
});