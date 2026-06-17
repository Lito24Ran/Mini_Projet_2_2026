import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Searchbar() {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
        <FontAwesome5 name="search-location" size={22} color="#a0a0a0" />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Recherche"
        placeholderTextColor="#a0a0a0"
      />

      <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
        <FontAwesome name="user" size={24} color="#c0c0c0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    top: 50,
    left: '4%', 
    right: '4%',
    height: 55,

    backgroundColor: 'rgba(255, 255, 255, 0.85)', 
    borderRadius: 27.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
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
    flex: 1, 
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#333333',
  },
});