import Datalist from '@/components/DatalistePublication/dataliste'
import Navbar from '@/components/NavigationBarr/Navigation'
import { View, StyleSheet } from 'react-native'

const ListePublication = () => {
  return (
    // On ajoute flex: 1 ici pour occuper tout l'écran
    <View style={styles.container}>
      <Datalist/>
      <Navbar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Vous pouvez changer la couleur du fond ici
  },
})

export default ListePublication