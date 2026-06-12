import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatalogScreen from './screens/CatalogScreen';
import DetailScreen from './screens/DetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Catalog"
        screenOptions={{
          headerStyle: { 
            backgroundColor: '#121212', // fondo oscuro tipo reproductor
            borderBottomWidth: 2,
            borderBottomColor: '#ff4081' // acento neón en la barra
          },
          headerTintColor: '#ffeb3b', // íconos y flechas en amarillo reflectores
          headerTitleStyle: { 
            fontWeight: 'bold',
            fontSize: 20,
            color: '#ffffff', // título en blanco para contraste
            letterSpacing: 1 // estilo moderno, como tipografía de playlist
          },
        }}
      >
        <Stack.Screen name="Catalog" component={CatalogScreen} options={{ title: 'Musiteca' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={({ route }) => ({ title: route.params.album.name })} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favoritos <3' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
