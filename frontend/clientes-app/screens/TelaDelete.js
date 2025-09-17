import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";

// Importa a URL da API de um arquivo separado
import API_URL from "../API_URL";

export default function TelaDelete() {
  // Estado para armazenar o ID do cliente
  const [id, setId] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  // Função para deletar um cliente
  const deletarCliente = async () => {
    if (!id) {
      Alert.alert("Erro", "Por favor, insira um ID válido.");
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (resposta.ok) {
        Alert.alert("Sucesso", "Cliente deletado com sucesso!");
        setId("");
      } else {
        Alert.alert("Erro", "Cliente não encontrado ou erro ao deletar.");
      }
    } catch (error) {
      setErro(`Erro ao deletar cliente: ${error.message}`);
    } finally {
      setCarregando(false);
    }
  };

  // Se houver um erro, mostra a mensagem de erro
  if (erro) {
    return <Text>{erro}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deletar Cliente</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o ID do cliente"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />

      {carregando ? (
        <ActivityIndicator size="large" color="#353839" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={deletarCliente}>
          <Text style={styles.buttonText}>Deletar Cliente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
