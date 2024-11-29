import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './src/services/navigations.ts';
import { store } from './src/store/store.ts';
import Stacks from './src/navigations/stacks.tsx';
import ModalRoot from './src/modals/ModalRoot/container.tsx';

const App: React.FC = () => {
   const backgroundStyle = {
      backgroundColor: Colors.transparent,
      flex: 1,
   };

   return (
      <Provider store={store}>
         <View style={backgroundStyle}>
            <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent={true} />
            <SafeAreaProvider>
               <NavigationContainer ref={navigationRef}>
                  <Stacks />
                  <ModalRoot content={undefined} />
               </NavigationContainer>
            </SafeAreaProvider>
         </View>
      </Provider>
   );
};

export default App;
