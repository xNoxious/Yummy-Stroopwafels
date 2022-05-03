import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme'
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { Navigation } from './src/infrastructure/navigation';
import { initializeApp } from 'firebase/app';
import { AuthenticationContextProvider } from './src/services/authentication/aunthentication.context';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBNGe1lDvAG9DQOCV3IBdPEN8yS2UNa5hI",
  authDomain: "yummystroopwafels.firebaseapp.com",
  projectId: "yummystroopwafels",
  storageBucket: "yummystroopwafels.appspot.com",
  messagingSenderId: "142908077486",
  appId: "1:142908077486:web:137fe0e2c57c6b2a49843f"
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
