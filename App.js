import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import Navigation from './src/infrastructure/navigation';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { initializeApp, apps } from 'firebase/app';
import React, { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAep3tyyoknpjqdyxFwgJBQ1yTFxF7QPCk",
  authDomain: "mealstogo-5da8e.firebaseapp.com",
  projectId: "mealstogo-5da8e",
  storageBucket: "mealstogo-5da8e.appspot.com",
  messagingSenderId: "456503863985",
  appId: "1:456503863985:web:b0fc80e50006c756dd5090"
}
if(!apps.length){
  initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    firebase.auth().signInWithEmailAndPassword("email@binni.io", "password").then((user) => {
      console.log(user);
      setIsAuthenticated(true);
    }).catch(e => {
      console.log(e);
    })
  }, []);
  const [oswaldLoaded] = useOswald({Oswald_400Regular})
  const [latoLoaded] = useLato({Lato_400Regular})
  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation></Navigation>
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto'></ExpoStatusBar>
    </>
  );
}
