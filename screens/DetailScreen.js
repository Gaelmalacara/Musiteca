import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
    const { album } = route.params;

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: album.image }} style={styles.image} />
                <Text style={styles.name}>{album.name}</Text>
                <Text style={styles.artist}>{album.artist}</Text>
                <Text style={styles.genre}>{album.genre}</Text>
                <Text style={styles.date}>{album.date}</Text>
                <Text style={styles.description}>{album.description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // fondo oscuro tipo reproductor
  },
  image: {
    width: '100%',
    height: 280,
    borderBottomWidth: 2,
    borderBottomColor: '#ff4081', // acento neón bajo la portada
  },
  artist: {
    padding: 20,
  },
  genre: {
    color: '#ffeb3b', // amarillo reflectores
    fontWeight: '700',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', // título en blanco brillante
    marginBottom: 14,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#d1c4e9', // lila suave para lectura
    lineHeight: 26,
    textAlign: 'justify',
  },
  date: {
    fontSize: 16,
    color: '#555',
    lineHeight: 26,
  }
});
