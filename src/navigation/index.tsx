import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomList } from '../screens/CustomerList';
import CustomDetails from '../screens/CustomerDetails';
import { Theme } from '../theme/themeProvider';

export type MainStackParamList = {
  DeliveriesList: undefined;
  CustomDetails: undefined;
};

export default function Screens() {
  const Stack = createNativeStackNavigator<MainStackParamList>();
  const noHeaderConfig = {
    header: () => null,
  };
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName='DeliveriesList'>
        <Stack.Screen
          name='DeliveriesList'
          component={CustomList}
          options={{
            ...noHeaderConfig,
          }}
        />
        <Stack.Screen
          name='CustomDetails'
          component={CustomDetails}
          options={{
            ...noHeaderConfig,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
