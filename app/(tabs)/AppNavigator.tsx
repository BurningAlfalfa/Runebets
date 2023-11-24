// AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../app/(tabs)/HomeScreen'; // Adjust the path
import PortfolioScreen from '../../PortfolioScreen'; // Adjust the path


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}options={{ headerShown: false } }/>
        <Stack.Screen name="Portfolio" component={PortfolioScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
};

export default AppNavigator;
