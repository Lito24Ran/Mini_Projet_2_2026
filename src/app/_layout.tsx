import { Stack } from 'expo-router';

export default function MyStack() {
  return (
    <Stack>
      <Stack.Screen 
        name="Home/homepage" 
        options={{ 
          title: 'Home',
          headerShown: false
        }} 
      />
      
      <Stack.Screen name="Publication/PublicationPage" options={{ title: 'Publication' }} />
      <Stack.Screen name='Listepub/ListePublication' options={{ title: 'Liste' }} />
      <Stack.Screen name="Acceuil/Acceuil" options={{ title: 'Acceuil' }} />
      <Stack.Screen name="Demande/Demande" options={{ title: 'Demande' }} />
    </Stack>
  );
}