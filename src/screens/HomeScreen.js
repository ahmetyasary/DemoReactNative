import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {


  const message = "Hoşgeldiniz";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Döviz App</Text>
      <Text style={styles.subTitle}>Cepteki Doğru Birikiminiz..</Text>

      <Text style={styles.content}>{message}</Text>
      <Button style={styles.button}
        title="Haydi Başlayalım.."
        onPress={() => navigation.navigate('Portföyüm')}
      />

      <Button style={styles.button}
        title="Döviz Detayı'na Git"
        onPress={() => navigation.navigate('Döviz Detayı')}
      />

      <Button style={styles.button}
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate('Sayaç')}
      />

      <Button style={styles.button}
        title="Kutu oluşturma"
        onPress={() => navigation.navigate('Kutu')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  title: {
    marginTop: 200,
    fontWeight: '900',
    fontSize: 35
  },

  subTitle: {
    fontSize: 15
  },

  content: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 60
  }
});