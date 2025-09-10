import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Alert, ScrollView } from "react-native";

const API_URL = "http://10.136.38.175:3000/clientes";

export default function App() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        Alert.alert("Erro ao buscar clientes", error.message);
      }
    };
    fetchClientes();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Clientes App</Text>
      </View>
      <View style={styles.get}>
        <Text style={styles.title}>Lista de Clientes</Text>
        <FlatList
          data={clientes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.post}></View>
      <View style={styles.put}></View>
      <View style={styles.delete}></View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 - Agatha Aline França, Ana Beatriz Farias Pereira, Juan Matheus
          de Oliveira Lopes
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  get: {
    flex: 1,
    padding: 20,
    backgroundColor: "#C8A2C870",
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  post: {
    flex: 1,
    padding: 20,
    backgroundColor: "#C8A2C870",
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  put: {
    flex: 1,
    padding: 20,
    backgroundColor: "#C8A2C870",
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  delete: {
    flex: 1,
    padding: 20,
    backgroundColor: "#C8A2C870",
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 12,
    textAlign: "center",
    marginTop: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 2,
  },
  email: {
    fontSize: 15,
    color: "#4a5568",
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    height: 80,
    backgroundColor: "#2E2E2E",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  footer: {
    height: 50,
    backgroundColor: "#2E2E2E",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 4,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
  },
});
