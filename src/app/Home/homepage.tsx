import MapComponents from '@/components/map/mapViews'; 
import Navbar from '@/components/NavigationBarr/Navigation';
import { View, StyleSheet,Text} from 'react-native';
import Searchbar from '@/components/searchBarr/search';
import ImageUploader from '../Demande/Demande';

const Homepage = () => {
  return (
    <View style={styles.container}>
      
      <MapComponents />
      <Searchbar/>
      <Navbar/>
      {/* <ImageUploader/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Permet à la vue (et à la carte) de prendre tout l'écran
  },
});

export default Homepage;