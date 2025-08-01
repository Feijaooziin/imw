import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { DrawerSceneWrapper } from "../components/drawer-Scene-wrapper";
import { Header } from "../components/Header";

const livros = [
  // Antigo Testamento
  { nome: "Gênesis", codigo: "genesis", capitulos: 50 },
  { nome: "Êxodo", codigo: "exodo", capitulos: 40 },
  { nome: "Levítico", codigo: "levitico", capitulos: 27 },
  { nome: "Números", codigo: "numeros", capitulos: 36 },
  { nome: "Deuteronômio", codigo: "deuteronomio", capitulos: 34 },
  { nome: "Josué", codigo: "josue", capitulos: 24 },
  { nome: "Juízes", codigo: "juizes", capitulos: 21 },
  { nome: "Rute", codigo: "rute", capitulos: 4 },
  { nome: "1 Samuel", codigo: "1samuel", capitulos: 31 },
  { nome: "2 Samuel", codigo: "2samuel", capitulos: 24 },
  { nome: "1 Reis", codigo: "1reis", capitulos: 22 },
  { nome: "2 Reis", codigo: "2reis", capitulos: 25 },
  { nome: "1 Crônicas", codigo: "1cronicas", capitulos: 29 },
  { nome: "2 Crônicas", codigo: "2cronicas", capitulos: 36 },
  { nome: "Esdras", codigo: "esdras", capitulos: 10 },
  { nome: "Neemias", codigo: "neemias", capitulos: 13 },
  { nome: "Ester", codigo: "ester", capitulos: 10 },
  { nome: "Jó", codigo: "jo", capitulos: 42 },
  { nome: "Salmos", codigo: "salmos", capitulos: 150 },
  { nome: "Provérbios", codigo: "proverbios", capitulos: 31 },
  { nome: "Eclesiastes", codigo: "eclesiastes", capitulos: 12 },
  { nome: "Cantares", codigo: "cantares", capitulos: 8 },
  { nome: "Isaías", codigo: "isaias", capitulos: 66 },
  { nome: "Jeremias", codigo: "jeremias", capitulos: 52 },
  { nome: "Lamentações", codigo: "lamentacoes", capitulos: 5 },
  { nome: "Ezequiel", codigo: "ezequiel", capitulos: 48 },
  { nome: "Daniel", codigo: "daniel", capitulos: 12 },
  { nome: "Oséias", codigo: "oseias", capitulos: 14 },
  { nome: "Joel", codigo: "joel", capitulos: 3 },
  { nome: "Amós", codigo: "amos", capitulos: 9 },
  { nome: "Obadias", codigo: "obadias", capitulos: 1 },
  { nome: "Jonas", codigo: "jonas", capitulos: 4 },
  { nome: "Miquéias", codigo: "miqueias", capitulos: 7 },
  { nome: "Naum", codigo: "naum", capitulos: 3 },
  { nome: "Habacuque", codigo: "habacuque", capitulos: 3 },
  { nome: "Sofonias", codigo: "sofonias", capitulos: 3 },
  { nome: "Ageu", codigo: "ageu", capitulos: 2 },
  { nome: "Zacarias", codigo: "zacarias", capitulos: 14 },
  { nome: "Malaquias", codigo: "malaquias", capitulos: 4 },

  // Novo Testamento
  { nome: "Mateus", codigo: "mateus", capitulos: 28 },
  { nome: "Marcos", codigo: "marcos", capitulos: 16 },
  { nome: "Lucas", codigo: "lucas", capitulos: 24 },
  { nome: "João", codigo: "joao", capitulos: 21 },
  { nome: "Atos", codigo: "atos", capitulos: 28 },
  { nome: "Romanos", codigo: "romanos", capitulos: 16 },
  { nome: "1 Coríntios", codigo: "1corintios", capitulos: 16 },
  { nome: "2 Coríntios", codigo: "2corintios", capitulos: 13 },
  { nome: "Gálatas", codigo: "galatas", capitulos: 6 },
  { nome: "Efésios", codigo: "efesios", capitulos: 6 },
  { nome: "Filipenses", codigo: "filipenses", capitulos: 4 },
  { nome: "Colossenses", codigo: "colossenses", capitulos: 4 },
  { nome: "1 Tessalonicenses", codigo: "1tessalonicenses", capitulos: 5 },
  { nome: "2 Tessalonicenses", codigo: "2tessalonicenses", capitulos: 3 },
  { nome: "1 Timóteo", codigo: "1timoteo", capitulos: 6 },
  { nome: "2 Timóteo", codigo: "2timoteo", capitulos: 4 },
  { nome: "Tito", codigo: "tito", capitulos: 3 },
  { nome: "Filemom", codigo: "filemom", capitulos: 1 },
  { nome: "Hebreus", codigo: "hebreus", capitulos: 13 },
  { nome: "Tiago", codigo: "tiago", capitulos: 5 },
  { nome: "1 Pedro", codigo: "1pedro", capitulos: 5 },
  { nome: "2 Pedro", codigo: "2pedro", capitulos: 3 },
  { nome: "1 João", codigo: "1joao", capitulos: 5 },
  { nome: "2 João", codigo: "2joao", capitulos: 1 },
  { nome: "3 João", codigo: "3joao", capitulos: 1 },
  { nome: "Judas", codigo: "judas", capitulos: 1 },
  { nome: "Apocalipse", codigo: "apocalipse", capitulos: 22 },
];

export default function Bible3() {
  const scheme = useColorScheme();
  const darkMode = scheme === "dark";

  const [livro, setLivro] = useState(livros[0]);
  const [capitulo, setCapitulo] = useState(1);
  const [resultado, setResultado] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    buscarBiblia(livro.codigo, capitulo);
  }, [livro, capitulo]);

  const buscarBiblia = async (livroCod: string, cap: number): Promise<void> => {
    setCarregando(true);
    setResultado("");

    try {
      const url = `https://bible-api.com/${livroCod}+${cap}?translation=almeida`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.text) {
        setResultado(data.text);
      } else {
        setResultado("Texto não encontrado.");
      }
    } catch (error) {
      setResultado("Erro na busca.");
    }

    setCarregando(false);
  };

  const proximoCapitulo = () => {
    if (capitulo < livro.capitulos) {
      setCapitulo(capitulo + 1);
    }
  };

  const capituloAnterior = () => {
    if (capitulo > 1) {
      setCapitulo(capitulo - 1);
    }
  };

  return (
    <DrawerSceneWrapper>
      <Header title="bíblia" />
      <View style={styles.container}>
        <Text style={styles.label}>Livro</Text>
        <Picker
          selectedValue={livro.codigo}
          style={styles.picker}
          onValueChange={(itemValue) => {
            const novoLivro =
              livros.find((l) => l.codigo === itemValue) || livros[0];
            setLivro(novoLivro);
            setCapitulo(1);
          }}
        >
          {livros.map((item) => (
            <Picker.Item
              key={item.codigo}
              label={item.nome}
              value={item.codigo}
            />
          ))}
        </Picker>

        <Text style={styles.label}>Capítulo</Text>
        <Picker
          selectedValue={capitulo}
          style={styles.picker}
          onValueChange={(itemValue) => setCapitulo(itemValue)}
        >
          {Array.from({ length: livro.capitulos }, (_, i) => (
            <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
          ))}
        </Picker>

        <ScrollView style={styles.resultBox}>
          {carregando ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <Text style={styles.result}>{resultado}</Text>
          )}
        </ScrollView>
        <View style={styles.navButtons}>
          <TouchableOpacity style={styles.navButton} onPress={capituloAnterior}>
            <Text style={styles.navButtonText}>⬅ Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={proximoCapitulo}>
            <Text style={styles.navButtonText}>Próximo ➡</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    backgroundColor: "#efefef",
  },
  label: {
    fontSize: 14,
    marginTop: 10,
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 2,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 36,
  },
  navButton: {
    backgroundColor: "#0683bd",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  navButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  result: {
    fontSize: 18,
    lineHeight: 26,
  },
});
