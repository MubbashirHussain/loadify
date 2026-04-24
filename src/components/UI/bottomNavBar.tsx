import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import theme from '../../config/theme';
import {
  dashboardIcon,
  dashboardIconFill,
  diaryIcon,
  diaryIconFill,
  tripIcon,
  tripIconFill,
  profileIcon,
  profileIconFill,
  truckIcon,
} from '../../assets/icons';

interface BottomTab {
  name: string;
  label: string;
  icon: ImageSourcePropType;
  iconActive: ImageSourcePropType;
  styles?: {
    icon?: ImageStyle;
    button?: ViewStyle;
    label?: TextStyle;
  };
}
const UserTabs: BottomTab[] = [
  {
    name: 'Dashboard',
    label: 'Dashboard',
    icon: dashboardIcon,
    iconActive: dashboardIconFill,
  },
  {
    name: 'Diary',
    label: 'Diary',
    icon: diaryIcon,
    iconActive: diaryIconFill,
  },
  {
    name: 'Trip',
    label: 'Trip',
    icon: tripIcon,
    iconActive: tripIconFill,
  },
  {
    name: 'Fleet',
    label: 'Fleet',
    icon: truckIcon,
    iconActive: truckIcon,
  },
  {
    name: 'Profile',
    label: 'Profile',
    icon: profileIcon,
    iconActive: profileIconFill,
  },
];

const BottomNavBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const TABS = UserTabs;
  return (
    <View style={styles.container}>
      {state.routes.map((route, idx) => {
        const tab = TABS.find(t => t.name === route.name);
        if (!tab) return null;
        const isFocused = state.index === idx;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={
              descriptors[route.key]?.options.tabBarAccessibilityLabel
            }
            testID={descriptors[route.key]?.options.tabBarButtonTestID}
            onPress={onPress}
            style={[styles.tab, tab.styles?.button]}
            activeOpacity={0.7}
          >
            <Image
              source={isFocused ? tab.iconActive : tab.icon}
              style={[styles.icon, tab.styles?.icon]}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.label,
                tab.styles?.label,
                isFocused && styles.labelActive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 84,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  label: {
    fontSize: 12,
    color: theme.colors.text.secondary,
    fontWeight: '500',
  },
  labelActive: {
    color: theme.colors.text.primary,
    fontWeight: '700',
  },
});

export default BottomNavBar;
