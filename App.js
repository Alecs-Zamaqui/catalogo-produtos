import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const PRODUTOS = [
  { id: '1', nome: 'Caderno Universitário 10 Matérias', preco: 'R$ 24,90' },
  { id: '2', nome: 'Caneta Esferográfica Azul', preco: 'R$ 2,50' },
  { id: '3', nome: 'Mochila Escolar Reforçada', preco: 'R$ 119,90' },
  { id: '4', nome: 'Calculadora Científica', preco: 'R$ 68,00' },
  { id: '5', nome: 'Estojo Organizador Duplo', preco: 'R$ 29,90' },
  { id: '6', nome: 'Marca-Texto Pastel (Kit 4 un.)', preco: 'R$ 18,50' },
  { id: '7', nome: 'Garrafa Térmica Inox 750ml', preco: 'R$ 74,90' },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.precoProduto}>{item.preco}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.titulo}>Catálogo de Produtos</Text>
      <Text style={styles.subtitulo}>
        {PRODUTOS.length} itens disponíveis
      </Text>

      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6B7280',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    flex: 1,
    marginRight: 12,
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#047857',
  },
});