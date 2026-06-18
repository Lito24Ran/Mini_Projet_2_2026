import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import TextInputComponents from '@/components/TextInput/TextInputComponents';
import SubmitButton from '@/components/button/Button';


const PublicationPage = () => {
    return (
        <View style = {styles.container}>
                <TextInputComponents/>
                <SubmitButton />
        </View>
    )
}

export default PublicationPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 60, 
        backgroundColor: '#fff', 
    },
    
})