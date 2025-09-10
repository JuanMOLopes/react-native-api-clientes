import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Clientes App</Text>
      </View>
      <View style={styles.get}></View>

      <View style={styles.post}></View>

      <View style={styles.put}></View>

      <View style={styles.delete}></View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 - Agatha Aline França, Ana Beatriz Farias Pereira, Juan Matheus
          de Oliveira Lopes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
