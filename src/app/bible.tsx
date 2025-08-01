import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { DrawerSceneWrapper } from "../components/drawer-Scene-wrapper";
import { Header } from "../components/Header";

export default function Bible() {
  const [livro, setLivro] = useState("");
  const [capitulo, setCapitulo] = useState("");
  const [versiculo, setVersiculo] = useState("");
  const [resultado, setResultado] = useState("");
  const [carregando, setCarregando] = useState(false);

  const buscarBiblia = async () => {
    if (!livro || !capitulo) {
      alert("Informe pelo menos o livro e o capítulo.");
      return;
    }

    setCarregando(true);
    setResultado("");

    try {
      const query = versiculo
        ? `${livro}+${capitulo}:${versiculo}`
        : `${livro}+${capitulo}`;

      const url = `https://bible-api.com/${query}?translation=almeida`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.text) {
        setResultado(data.text);
      } else {
        setResultado("Versículo não encontrado.");
      }
    } catch (error) {
      setResultado("Erro ao buscar versículo.");
    }

    setCarregando(false);
  };

  return (
    <DrawerSceneWrapper>
      <Header name="bíblia" />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Livro (ex: joao)"
          value={livro}
          onChangeText={setLivro}
        />

        <TextInput
          style={styles.input}
          placeholder="Capítulo (ex: 3)"
          keyboardType="numeric"
          value={capitulo}
          onChangeText={setCapitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Versículo (opcional, ex: 16)"
          keyboardType="numeric"
          value={versiculo}
          onChangeText={setVersiculo}
        />

        <Button title="Buscar" onPress={buscarBiblia} />

        <ScrollView style={styles.resultBox}>
          {carregando ? (
            <Text style={styles.result}>Carregando...</Text>
          ) : (
            <Text style={styles.result}>{resultado}</Text>
          )}
        </ScrollView>
      </View>
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 32,
    backgroundColor: "#ddd",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  resultBox: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderRadius: 5,
    maxHeight: 400,
  },
  result: {
    fontSize: 18,
    lineHeight: 26,
  },
});
