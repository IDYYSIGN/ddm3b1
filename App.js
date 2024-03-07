import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Leidi 29/02/24</Text>
      <Text>Clone do projeto aula 04-03</Text>
      <title>Titulo 3b1 lado b</title>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
