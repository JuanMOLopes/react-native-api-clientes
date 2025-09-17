import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

// Importa a URL da API de um arquivo separado
import API_URL from "../API_URL";

export default function TelaUpdate() {
  // Estados para armazenar os valores dos campos do formulário
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  // Função para atualizar um cliente
  const atualizarCliente = async () => {
    // Se o ID não for fornecido ou nenhum campo para atualizar, mostra um alerta
    if (!id || (!nome && !cpf && !email && !telefone)) {
      Alert.alert(
        "Erro",
        "Por favor, insira o ID e pelo menos um campo para atualizar."
      );
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, cpf, email, telefone }),
      });

      if (resposta.ok) {
        Alert.alert("Sucesso", "Cliente atualizado com sucesso!");
        setId("");
        setNome("");
        setCpf("");
        setEmail("");
        setTelefone("");
      } else {
        Alert.alert("Erro", "Cliente não encontrado ou erro ao atualizar.");
      }
    } catch (error) {
      setErro(`Erro ao atualizar cliente: ${error.message}`);
    } finally {
      setCarregando(false);
    }
  };

  // Se houver um erro, mostra a mensagem de erro
  if (erro) {
    return <Text>{erro}</Text>;
  }

  return (
    <View>
      <Text>Atualizar Cliente</Text>

      <TextInput
        placeholder="ID do Cliente"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Nome (opcional)"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="CPF (opcional)"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Email (opcional)"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Telefone (opcional)"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      {carregando ? (
        <ActivityIndicator size="large" color="#353839" />
      ) : (
        <TouchableOpacity onPress={atualizarCliente}>
          <Text>Atualizar Cliente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
