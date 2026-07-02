import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// 1. Données de test avec les informations de contact
const DATA = [
  { 
    id: '1', 
    nom: 'Nom Taxi moto', 
    dispo: 'Dispo', 
    lieu: 'Lieu',
    description: 'Excellente moto Yamaha MT-15, idéale pour vos trajets rapides à Antananarivo. Casque fourni et chauffeur expérimenté.',
    telephone: '+261340000000',
    facebookUrl: 'https://facebook.com',
    whatsapp: '+261340000000'
  },
  { 
    id: '2', 
    nom: 'Nom Taxi moto', 
    dispo: 'Dispo', 
    lieu: 'Lieu',
    description: 'Moto compacte et très économique. Parfaite pour éviter les embouteillages aux heures de pointe.',
    telephone: '+261330000000',
    facebookUrl: 'https://facebook.com',
    whatsapp: '+261330000000'
  },
  { 
    id: '3', 
    nom: 'Nom Taxi moto', 
    dispo: 'Dispo', 
    lieu: 'Lieu',
    description: 'Service de transport premium. Moto confortable, entretenue régulièrement et conduite prudente garantie.',
    telephone: '+261320000000',
    facebookUrl: 'https://facebook.com',
    whatsapp: '+261320000000'
  },
];

export default function Datalist() {
  const [modalVisible, setModalVisible] = useState(false);
  const [motoSelectionnee, setMotoSelectionnee] = useState<any | null>(null);

  const selectionnerMoto = (item: any) => {
    setMotoSelectionnee(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.card} 
      activeOpacity={0.7}
      onPress={() => selectionnerMoto(item)}
    >
      <View style={styles.textContainer}>
        <Text style={styles.nomText}>{item.nom}</Text>
        <View style={styles.subTextRow}>
          <Text style={styles.dispoText}>{item.dispo}</Text>
          <Text style={styles.lieuText}>{item.lieu}</Text>
        </View>
      </View>

      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=200' }} 
        style={styles.motoImage} 
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Fenêtre Modale */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            
            {motoSelectionnee && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{motoSelectionnee.nom}</Text>
                  <Text style={styles.modalSubText}>{motoSelectionnee.dispo} • {motoSelectionnee.lieu}</Text>
                </View>

                <View style={styles.divider} />

                {/* Section Description */}
                <View style={styles.modalBody}>
                  <Text style={styles.sectionLabel}>Description :</Text>
                  <Text style={styles.descriptionText}>{motoSelectionnee.description}</Text>
                  
                  <View style={styles.innerDivider} />

                  {/* Nouvelle Section Actions / Contacts */}
                  <Text style={styles.sectionLabel}>Contacter le chauffeur :</Text>
                  <View style={styles.actionsContainer}>
                    
                    {/* Icône Appel / Contact */}
                    <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#2ecc71' }]} activeOpacity={0.7}>
                      <Ionicons name="call" size={24} color="#ffffff" />
                    </TouchableOpacity>

                    {/* Icône Message / SMS */}
                    <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#3498db' }]} activeOpacity={0.7}>
                      <MaterialCommunityIcons name="message-text" size={24} color="#ffffff" />
                    </TouchableOpacity>

                    {/* Icône WhatsApp */}
                    <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#25D366' }]} activeOpacity={0.7}>
                      <FontAwesome name="whatsapp" size={26} color="#ffffff" />
                    </TouchableOpacity>

                    {/* Icône Facebook */}
                    <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#1877F2' }]} activeOpacity={0.7}>
                      <FontAwesome name="facebook" size={24} color="#ffffff" />
                    </TouchableOpacity>

                  </View>
                </View>

                {/* Bouton pour fermer la modale */}
                <TouchableOpacity 
                  style={styles.closeButton} 
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Fermer</Text>
                </TouchableOpacity>
              </>
            )}

          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#f5f5f5', 
    borderRadius: 24,           
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nomText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subTextRow: {
    flexDirection: 'row',
    gap: 15, 
  },
  dispoText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#737373',
  },
  lieuText: {
    fontSize: 15,
    color: '#a3a3a3',
  },
  motoImage: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
  },
  
  // Styles du Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingTop: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  modalHeader: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  modalSubText: {
    fontSize: 15,
    color: '#737373',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 20,
  },
  modalBody: {
    padding: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 15,
    color: '#404040',
    lineHeight: 22,
  },
  innerDivider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 15,
  },
  // Conteneur alignant les boutons d'icônes en ligne
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
  // Style universel des boutons ronds de réseaux/contacts
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2, // Ombre Android
  },
  closeButton: {
    backgroundColor: '#1a1a1a', 
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 15,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});