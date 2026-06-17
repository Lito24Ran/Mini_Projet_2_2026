import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface SubmitButtonProps {
  onPress?: () => void;
}

export default function SubmitButton({ onPress }: SubmitButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.submitButtonText}>Valider et Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 115, // Placé pile au-dessus de ta Navbar (qui est à bottom: 30 + sa hauteur)
    left: '8%',   // Légèrement plus serré sur les côtés pour un style élégant
    right: '8%',
  },
  submitButton: {
    backgroundColor: '#0b1640', // Même bleu nuit premium que la Navbar
    height: 50,
    borderRadius: 25, // Forme de pilule arrondie
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Ombre pour ton Redmi Note 13
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});