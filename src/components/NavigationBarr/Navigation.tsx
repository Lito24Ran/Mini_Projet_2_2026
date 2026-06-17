import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function Navbar() {
  return (
    <View style={styles.navbarContainer}>
      
      <TouchableOpacity style={styles.navButton} activeOpacity={0.7}>
        <FontAwesome name="home" size={28} color="#ffffff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} activeOpacity={0.7}>
        <View style={styles.plusIconBg}>
          <AntDesign name="plus" size={24} color="#344163" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} activeOpacity={0.7}>
        <FontAwesome5 name="bell" size={26} color="#515d7d" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    bottom: 30,
    left: '5%',
    right: '5%',
    height: 70,
    backgroundColor: '#0b1640', 
    borderRadius: 35, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  plusIconBg: {
    width: 36,
    height: 36,
    backgroundColor: '#263359', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});