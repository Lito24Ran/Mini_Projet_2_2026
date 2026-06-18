import MapComponents from '@/components/map/mapViews'; 
import Navbar from '@/components/NavigationBarr/Navigation';
import { View, StyleSheet,Text} from 'react-native';
import Searchbar from '@/components/searchBarr/search';
import ImageUploader from '../Demande/Demande';
import PublicationPage from '../Publication/PublicationPage';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <PublicationPage />
      {/* <MapComponents />
      <Searchbar/>
      <Navbar/> */}
      {/* <ImageUploader/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

export default Homepage;