import { View, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const TextInputComponents = () => {
    
  const [nom, setNom] = useState('');
  const [tarif, setTarif] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');


  return (
    <View style={styles.container}>
        <View style={styles.container_inputText}>
            
            <TextInput
                style={styles.input}
                placeholder='Entrer votre nom'
                onChangeText={setNom}
                value={nom}
            />
            
            <TextInput
                style={styles.input}
                placeholder='Tarif'
                keyboardType='numeric'
                onChangeText={setTarif}
                value={tarif}
            />

            <TextInput
                style={styles.input}
                placeholder='Contact'
                keyboardType='phone-pad' 
                onChangeText={setContact}
                value={contact}
            />
            
            <TextInput
                style={[styles.input, styles.textArea]} 
                placeholder='Description'
                multiline={true} 
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
