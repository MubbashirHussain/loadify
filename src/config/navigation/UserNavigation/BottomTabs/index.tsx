import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../../../screens/Dashboard';
import Clients from '../../../../screens/Clients';
import EntriesList from '../../../../screens/EntriesList';
import NewEntry from '../../../../screens/NewEntry';
import { useTheme } from '../../../theme';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.background.primary,
        },
        headerTintColor: theme.colors.text.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.background.primary,
          borderTopColor: theme.colors.border.primary,
        },
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarInactiveTintColor: theme.colors.text.tertiary,
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Entries" component={EntriesList} />
      <Tab.Screen name="New Entry" component={NewEntry} />
      <Tab.Screen name="Clients" component={Clients} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
