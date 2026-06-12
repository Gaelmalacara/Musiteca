import React from 'react';
import { Text, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export default function AlbumCard({ album, isFavorite, onToggleFav }) {
    const navigation = useNavigation();
    
    return (
        <Card containerStyle={styles.card}>
            <Image source={{ uri: album.image }} style={styles.image} />

            <TouchableOpacity
                onPress={() => onToggleFav(album.id)}
                style={styles.favBtn}
            >
                <Text style={ {fontSize: 24} }>{isFavorite ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>

            <Text style={styles.name}>{album.name}</Text>
            <Text style={styles.artist}>{album.artist}</Text>
            <Text style={styles.genre}>{album.genre}</Text>

            <Button
                title="Ver Album"
                buttonStyle={styles.button}
                icon={<Icon name="play" type="octa" color="white" />}
                onPress={() => navigation.navigate("Album", { id: album.id })}
            />
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 12,
        borderRadius: 16,
        backgroundColor: '#1e1e2f', // fondo oscuro tipo escenario
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 4,
        padding: 12,
        alignItems: 'center'
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#ff4081' // borde neón vibrante
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#ffffff', // título en blanco para contraste
        marginTop: 10,
        textAlign: 'center'
    },
    artist: {
        fontSize: 18,
        color: '#d1c4e9', // lila suave para lectura
        marginTop: 4,
        textAlign: 'center'
    },
    genre: {
        fontSize: 16,
        color: '#ffeb3b', // amarillo reflectores
        marginTop: 2,
        textTransform: 'uppercase',
        letterSpacing: 1,
        textAlign: 'center'
    },
    button: {
        backgroundColor: "#ff4081", // botón con acento musical
        marginTop: 12,
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    favBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: 24,
        color: 'white'
    }
});
