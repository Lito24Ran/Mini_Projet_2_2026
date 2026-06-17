import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Searchbar() {
  return (
    <View style={styles.searchContainer}>
      {/* Icône Loupe avec repère à gauche */}
      <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
        <FontAwesome5 name="search-location" size={22} color="#a0a0a0" />
      </TouchableOpacity>

      {/* Champ de texte pour la recherche */}
      <TextInput
        style={styles.input}
        placeholder="Recherche"
        placeholderTextColor="#a0a0a0"
      />

      {/* Icône Profil (Avatar) à droite */}
      <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
        <FontAwesome name="user" size={24} color="#c0c0c0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    top: 50, // Positionne la barre en haut de l'écran (ajuste selon la barre de statut)
    left: '4%', // Marges latérales pour qu'elle s'étire bien comme sur ton image
    right: '4%',
    height: 55,
    // Couleur blanche avec opacité (0.85) pour voir la carte en transparence derrière
    backgroundColor: 'rgba(255, 255, 255, 0.85)', 
    borderRadius: 27.5, // Donne la forme parfaitement ovale
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    // Bordure fine optionnelle si tu veux accentuer le contour
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    // Effet d'ombre discret pour la faire ressortir de la carte
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  iconButton: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1, // Prend tout l'espace disponible entre les deux icônes
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#333333',
  },
});