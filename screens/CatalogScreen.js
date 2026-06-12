import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { albums } from '../data/albums';
import AlbumCard from '../components/AlbumCard';

export default function CatalogScreen() {
    const navigation = useNavigation();

    const [query, setQuery] = useState('');

    const [favorites, setFavorites] = useState([]);

    const filtered = albums.filter((album) => album.name.toLowerCase().includes(query.toLowerCase()));

    const toggleFavorite = (id) => {
        setFavorites(prev => 
            prev.includes(id)
            ? prev.filter(item => item !== id)
            : [...prev, id]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <View>
                    <Text style={styles.header}> Musiteca </Text>
                    <Text style={styles.subtitle}> Catalógo de álbums </Text>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Favorites', { favoriteIds : favorites })}
                    style={styles.favBadge}
                >
                    <Text style={styles.favBadgeText}> ❤️ (favorites.length)</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.searchInput}
                placeholder="Buscar..."
                value={query}
                onChangeText={setQuery}
            />

            <FlatList
                data={filtered}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>   (
                    <AlbumCard 
                        album={item} 
                        isFavorite={favorites.includes(item.id)}
                        onToggleFav={toggleFavorite}    
                    />
                )}
                contentContainerStyle={styles.list}
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
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    subtitle: {
        fontSize: 18,
        color: '#d1c4e9',
    },
    searchInput: {
        height: 40,
        borderColor: '#ff4081',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '80%',
    },
    list: {
        padding: 10,
    },
    favBadge: {
        backgroundColor: '#ff4081',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    favBadgeText: {
        color: '#ffffff',
        fontWeight: 'bold',
    }
});