import MapComponents from '@/components/map/mapViews'; 
import Navbar from '@/components/NavigationBarr/Navigation';
import { View, StyleSheet,Text} from 'react-native';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <MapComponents />
      <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Permet à la vue (et à la carte) de prendre tout l'écran
  },
});

export default Homepage;