import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

// Importa a URL da API de um arquivo separado
import API_URL from "../API_URL";

export default function TelaRead() {
  // Estado para armazenar os dados dos clientes, estado de carregamento e estado de erro
  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  // Efeito colateral para buscar os clientes ao montar o componente
  useEffect(() => {
    // Função assíncrona para buscar os clientes da API
    const procurarClientes = async () => {
      try {
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();
        setClientes(dados);
        setCarregando(false);
      } catch (error) {
        setErro(`Erro ao buscar clientes: ${error.message}`);
        setCarregando(false);
      }
    };
    // Chama a função para buscar os clientes
    procurarClientes();
  }, []);

  // Se estiver carregando, mostra um indicador de atividade
  if (carregando) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Se houver um erro, mostra a mensagem de erro
  if (erro) {
    return <Text>{erro}</Text>;
  }

  // Se tudo estiver ok, mostra a lista de clientes em uma FlatList 
  return (
    <View>
      <Text>GET - Lista de Clientes</Text>

      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.nome}</Text>
            <Text>{item.cpf}</Text>
            <Text>{item.email}</Text>
            <Text>{item.telefone}</Text>
          </View>
        )}
      />
    </View>
  );
}
