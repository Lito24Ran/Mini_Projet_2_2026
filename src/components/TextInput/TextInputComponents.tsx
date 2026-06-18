import { View, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const TextInputComponents = () => {
  // 1. Déclaration des états spécifiques à chaque champ à l'intérieur du composant
  const [nom, setNom] = useState('');
  const [tarif, setTarif] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.container_inputText}>
            {/* Champ Nom */}
            <TextInput
                style={styles.input}
                placeholder='Entrer votre nom'
                onChangeText={setNom}
                value={nom}
            />
            {/* Champ Tarif */}
            <TextInput
                style={styles.input}
                placeholder='Tarif'
                keyboardType='numeric' // Clavier numérique adapté pour un tarif
                onChangeText={setTarif}
                value={tarif}
            />
            {/* Champ Contact */}
            <TextInput
                style={styles.input}
                placeholder='Contact'
                keyboardType='phone-pad' // Clavier adapté pour un numéro de téléphone
                onChangeText={setContact}
                value={contact}
            />
            {/* Champ Description */}
            <TextInput
                style={[styles.input, styles.textArea]} // Style combiné pour agrandir le champ
                placeholder='Description'
                multiline={true} // Permet le retour à la ligne
                numberOfLines={4}
                onChangeText={setDescription}
                value={description}
            />
        </View>
    </View>
  ) 
}

export default TextInputComponents

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
    },
    container_inputText: {
        padding: 20, 
        marginTop: 40,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
        paddingVertical: 10,
    }
})
