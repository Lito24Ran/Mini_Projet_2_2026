import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Button from '@/components/button/Button';
import Navbar from '@/components/NavigationBarr/Navigation';

export default function ImageUploader() {
  const [images, setImages] = useState<string[]>([]);

  const pickImage = async () => {
    if (images.length >= 2) {
      Alert.alert("Limite atteinte", "Vous pouvez ajouter 2 images maximum.");
      return;
    }

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      Alert.alert("Permission refusée", "Vous devez autoriser l'accès à vos photos pour continuer.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, 
      aspect: [4, 3],
      quality: 0.8, 
    });

    if (!result.canceled && result.assets && result.assets[0].uri) {
      setImages([...images, result.assets[0].uri]);
    }
  };
  const removeImage = (indexToRemove: number) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Ajouter vos images ({images.length}/2)</Text>

        <View style={styles.row}>
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
                <TouchableOpacity style={styles.deleteButton} onPress={() => removeImage(index)}>
                <FontAwesome name="times-circle" size={22} color="#ff4d4d" />
                </TouchableOpacity>
            </View>
            ))}
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.submitButton} 
            onPress={() => {
                console.log("Images prêtes à l'envoi :", images);
            }}
            activeOpacity={0.8}
            >
            <Text style={styles.submitButtonText}>Valider</Text>
            </TouchableOpacity>
        </View>

        {/* <View>
            <Navbar/>
        </View> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 130, 
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
    borderStyle: 'dashed', 
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
    marginTop: 15, 
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#0b1640', 
    height: 45,
    borderRadius: 22.5, 
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
  container_navbar: {
    marginTop : 500
  }
});