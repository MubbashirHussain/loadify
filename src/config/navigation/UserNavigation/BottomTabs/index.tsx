import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../../../screens/Dashboard';
import Clients from '../../../../screens/Fleet';
import EntriesList from '../../../../screens/EntriesList';
import NewEntry from '../../../../screens/NewEntry';
import BottomNavBar from '../../../../components/UI/bottomNavBar';
import { Text, View } from 'react-native';
import Header from '../../../../components/Header';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'shift',
        header: props => <Header title={props.route.name} titleAlign="left" />,
      }}
      initialRouteName="Home"
      tabBar={props => <BottomNavBar {...props} />}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Diary" component={EntriesList} />
      <Tab.Screen name="Trip" component={NewEntry} />
      <Tab.Screen name="Fleet" component={Clients} />
      <Tab.Screen name="Profile" component={Clients} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
