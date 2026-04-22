import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';

interface HeaderProps {
  title?: string;
  titleAlign?: 'left' | 'center';
  startComponent?: React.ReactNode;
  endComponent?: React.ReactNode;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

const Header: React.FC<HeaderProps> = ({
  title = 'Home',
  titleAlign = 'center',
  startComponent,
  endComponent,
  style,
  titleStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      {startComponent ? (
        startComponent
      ) : (
        <View style={styles.iconPlaceholder} />
      )}
      <View
        style={[
          styles.titleContainer,
          titleAlign === 'center' && { alignItems: 'center' },
        ]}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
      {endComponent ? endComponent : <View style={styles.iconPlaceholder} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    // elevation: 2,
    zIndex: 10,
  },
  iconButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  iconPlaceholder: {
    // swidth: 36,
    height: 36,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
});

export default Header;
