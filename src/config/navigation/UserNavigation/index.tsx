import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomTabs';

type UserStackParamList = {
  BottomTabs: undefined;
};

const Stack = createNativeStackNavigator<UserStackParamList>();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
export type { UserStackParamList };
