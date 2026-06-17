import { Ionicons } from '@expo/vector-icons'; // Inclus nativement dans Expo
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Zone centrale : Icône et Titre */}
      <View style={styles.centerContent}>
        {/* Conteneur bleu foncé pour la moto */}
        <View style={styles.iconContainer}>
          <Ionicons name="bicycle" size={60} color="#FFFFFF" />
        </View>

        {/* Texte en gras */}
        <Text style={styles.title}>TAXI SCOOT</Text>
      </View>

      {/* Zone basse : Indicateur de chargement circulaire */}
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#1A224C" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, // Pousse légèrement vers le bas pour équilibrer
  },
  iconContainer: {
    width: 140,
    height: 140,
    backgroundColor: '#0F1A4C', // Bleu nuit foncé identique à l'image
    borderRadius: 35, // Bords très arrondis (style squircle)
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    // Ombre légère pour donner du relief (optionnel)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: '900', // Épaisseur maximale pour l'effet "Black"
    color: '#000000',
    letterSpacing: 0.5,
    textTransform: 'uppercase', // Force les majuscules
  },
  loaderContainer: {
    paddingBottom: 60, // Positionne le loader précisément en bas de l'écran
  },
});
