import React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../../../types';

const DriverListScreen: React.FC<ScreenProps> = ({ navigation }) => {
   return (
      <View style={{ flex: 1 }}>
         <Text>Drivers</Text>
      </View>
   );
};

export default DriverListScreen;
