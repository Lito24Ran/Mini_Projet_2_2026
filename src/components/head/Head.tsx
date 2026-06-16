import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Head = () => {
  return (
    <View style={styles.safeContainer}>
        <View style={styles.headerContainer}>
            
            <View style={styles.profileSection}>
            <Image 
                source={{ uri: 'https://placeholder.com' }} 
                style={styles.avatar} 
            />
            <View style={styles.textContainer}>
                <Text style={styles.nameText}>Sahondra</Text>
                <Text style={styles.roleText}>Étudiante</Text>
            </View>
            </View>

            <View style={styles.actionSection}>
            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name='qr-code-outline' size={24} color="#000" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="notifications-outline" size={24} color="#000" />
                <View style={styles.notificationDot} />
            </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

export default Head


const styles = StyleSheet.create({
  safeContainer: {
    paddingTop: 50, 
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5, 
    marginRight: 12,
  },
  textContainer: {
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  roleText: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  actionSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
    position: 'relative', // Nécessaire pour positionner la pastille verte
  },
  notificationDot: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 8,
    height: 8,
    backgroundColor: '#00FF00', // Vert flash de votre image
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff', // Délimitation propre
  },
});
