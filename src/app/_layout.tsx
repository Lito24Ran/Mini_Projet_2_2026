import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';
import SplashScreen from './Acceuil/Acceuil';
import Homepage from './Home/homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <AnimatedSplashOverlay />
      <AppTabs /> */}
      {/* <Login/>  */}
      <Homepage/>
      {/* <SplashScreen/> */}
    </ThemeProvider>
  );
}
