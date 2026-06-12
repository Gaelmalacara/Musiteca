import React, { useState} from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { albums } from '../data/albums';

export default function FavoritesScreen({ route }) {
    const navigation = useNavigation();
    const { favoriteIds } = route.params;
    const [query, setQuery] = useState('');

    const favoriteAlbums = albums.filter(albums => favoriteIds.includes(albums.id));

    const filtered = favoriteAlbums.filter(albums => albums.name.toLowerCase().includes(query.toLowerCase()));

    if (favoriteIds.length === 0) {
        return (
            <View style={styles.empty}>
                <Text style={styles.emptyText}>No tienes canciones favoritas</Text>
            
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={ () => navigation.goBack()}
                >
                    <Text style={styles.backBtnText}>Volver</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
                    <Text style={styles.count}>
                        {favoriteIds.length} canciones favoritas {favoriteIds.length !== 1 ? 'es': ''} guardadas {favoriteIds.length !== 1 ? 'son': ''} 
                    </Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Buscar canciones..."
                value={query}
                onChangeText={setQuery}
            />

            <FlatList
            data={ filtered }
            keyExtractor={ (item) => item.id }
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Detail', { album: item })}
                    style={styles.card}
                >
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardName}>{item.name}</Text>
                        <Text style={styles.cardArtist}>{item.artist}</Text>
                        <Text style={styles.cardGenre}>{item.genre}</Text>
                    </View>
                </TouchableOpacity>
            )}
            contentContainerStyle={{ paddingBottom: 30 }}
            ListEmptyComponent={
                <Text style={styles.noResults}> No se encontraron canciones "{query}" </Text>
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e2f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        borderRadius: 16,
        backgroundColor: '#1e1e2f',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 4,
        padding: 12,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#ff4081',
    },
    cardInfo: {
        marginLeft: 12,
    },
    cardName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cardArtist: {
        fontSize: 16,
        color: '#d1c4e9',
    },
    cardGenre: {
        fontSize: 14,
        color: '#d1c4e9',
    },
    searchInput: {
        height: 40,
        borderColor: '#ff4081',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    noResults: {
        marginTop: 20,
        fontSize: 18,
        color: '#d1c4e9',
    },
    empty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e1e2f',
    },
    emptyText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
    },
    backBtn: {
        backgroundColor: '#ff4081',
        padding: 10,
        borderRadius: 20,
    },
    backBtnText: {
        color: '#ffffff',
        fontSize: 16,
    },
    count: {
        fontSize: 16,
        color: '#d1c4e9',
        marginBottom: 10,
    }
});