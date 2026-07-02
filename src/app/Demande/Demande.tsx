import { View, Text } from 'react-native'
import React from 'react'
import ImageUploader from '@/components/AjoutDemande/ImageUploader'
import Navbar from '@/components/NavigationBarr/Navigation'

const Demande = () => {
  return (
    <View>
        <ImageUploader/>   
        <Navbar/>
    </View>
  )
}

export default Demande