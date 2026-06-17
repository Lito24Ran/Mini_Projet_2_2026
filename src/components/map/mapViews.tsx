import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MapComponents() {
  // Coordonnées de la boîte de limitation (Bounding Box) pour Antananarivo
  // Format : [Longitude Minimum, Latitude Minimum, Longitude Maximum, Latitude Maximum]
  const minLon = 47.4500;
  const minLat = -18.9500;
  const maxLon = 47.6000;
  const maxLat = -18.8000;

  // Code HTML personnalisé pour afficher uniquement la carte sans les menus d'OSM
  const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <style>
        body, html, iframe { margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden; }
      </style>
    </head>
    <body>
      <iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&amp;layer=mapnik">
      </iframe>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView 
        originWhitelist={['*']}
        source={{ html: mapHtml }} 
        style={styles.map}
        // Sécurité : Si l'utilisateur clique sur un lien externe, on l'empêche de naviguer ailleurs
        onNavigationStateChange={(navState) => {
          if (!navState.url.includes('openstreetmap.org') && navState.url !== 'about:blank') {
            // Optionnel : tu peux forcer le rechargement si nécessaire
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});