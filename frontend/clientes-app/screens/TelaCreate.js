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

export default function TelaCreate() {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  // Estado para carregamento e erro
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  // Função para lidar com o envio do formulário
  const criarCliente = async () => {
    if (!nome || !cpf || !email || !telefone) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, cpf, email, telefone }),
      });

      if (resposta.ok) {
        Alert.alert("Sucesso", "Cliente criado com sucesso!");

        // Limpa os campos do formulário
        setNome("");
        setCpf("");
        setEmail("");
        setTelefone("");
      } else {
        Alert.alert(
          "Erro",
          "Foi possível acessar a API, porém ocorreu um erro ao criar o cliente."
        );
      }
    } catch (error) {
      setErro(`Erro ao criar cliente: ${error.message}`);
    } finally {
      setCarregando(false);
    }
  };

  if (erro) {
    return <Text>{erro}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Novo Cliente</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      {/* Se carregando == true, mostra o indicador de carregamento, senão mostra o botão para criar o cliente */}
      {carregando ? (
        <ActivityIndicator size="large" color="#353839" />
      ) : (
        <TouchableOpacity onPress={criarCliente}>
          <Text>Criar Cliente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});
