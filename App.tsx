import React from 'react';
import { Provider } from 'react-redux';
import generateStore from './src/redux/stores';
import { CustomList } from './src/screens/CustomerList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDetails from './src/screens/CustomerDetails';
import { Theme } from './src/theme/themeProvider';

export type MainStackParamList = {
  DeliveriesList: undefined;
  CustomDetails: undefined;
};

//store & customTypes
const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function App() {
  const Stack = createNativeStackNavigator<MainStackParamList>();
  const noHeaderConfig = {
    header: () => null,
  };
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
