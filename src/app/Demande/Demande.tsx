import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Button from '@/components/button/Button';

export default function ImageUploader() {
  // Stocke la liste des images sélectionnées (max 2)
  const [images, setImages] = useState<string[]>([]);

  const pickImage = async () => {
    // 1. Vérifie si on a déjà atteint la limite de 2 images
    if (images.length >= 2) {
      Alert.alert("Limite atteinte", "Vous pouvez ajouter 2 images maximum.");
      return;
    }

    // 2. Demande la permission d'accéder à la galerie (géré automatiquement par Expo)
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      Alert.alert("Permission refusée", "Vous devez autoriser l'accès à vos photos pour continuer.");
      return;
    }

    // 3. Ouvre la galerie photo
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Permet de recadrer l'image
      aspect: [4, 3],
      quality: 0.8, // Compresse légèrement pour économiser de la mémoire
    });

    // 4. Si l'utilisateur n'a pas annulé, on ajoute l'image à notre liste
    if (!result.canceled && result.assets && result.assets[0].uri) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  // Fonction pour supprimer une image de la liste
  const removeImage = (indexToRemove: number) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  return (
 <View style={styles.container}>
      <Text style={styles.title}>Ajouter vos images ({images.length}/2)</Text>

      <View style={styles.row}>
        {/* Case cliquable pour ajouter une image (masquée si déjà 2 images) */}
        {images.length < 2 && (
          <TouchableOpacity style={styles.uploadBox} onPress={pickImage} activeOpacity={0.7}>
            <AntDesign name="plus-circle" size={28} color="#515d7d" />
            <Text style={styles.uploadText}>Ajouter</Text>
          </TouchableOpacity>
        )}

        {/* Affichage des miniatures des images sélectionnées */}
        {images.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri: uri }} style={styles.previewImage} />
            {/* Petit bouton rouge en haut à droite pour supprimer l'image */}
            <TouchableOpacity style={styles.deleteButton} onPress={() => removeImage(index)}>
              <FontAwesome name="times-circle" size={22} color="#ff4d4d" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Zone du bouton de validation ou d'envoi */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.submitButton} 
          onPress={() => {
            // C'est ici que tu mettras la logique de validation ou d'envoi des coordonnées
            console.log("Images prêtes à l'envoi :", images);
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.submitButtonText}>Valider</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 130, // Se place juste en dessous de ta Searchbar (ajustable)
    left: '4%',
    right: '4%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#344163',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadBox: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderStyle: 'dashed', // Effet pointillés pour faire "zone de dépôt"
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginRight: 15,
  },
  uploadText: {
    fontSize: 12,
    color: '#515d7d',
    marginTop: 5,
  },
  imageWrapper: {
    position: 'relative',
    marginRight: 15,
  },
  previewImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#ffffff',
    borderRadius: 11,
  },
  buttonContainer: {
    marginTop: 15, // Crée un espace entre les images et le bouton
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#0b1640', // Même bleu nuit que ta Navbar
    height: 45,
    borderRadius: 22.5, // Parfaitement arrondi sur les bords
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});