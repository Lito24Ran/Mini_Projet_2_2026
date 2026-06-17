import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MapComponents() {
  const minLon = 47.4500;
  const minLat = -18.9500;
  const maxLon = 47.6000;
  const maxLat = -18.8000;

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
        onNavigationStateChange={(navState) => {
          if (!navState.url.includes('openstreetmap.org') && navState.url !== 'about:blank') {
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