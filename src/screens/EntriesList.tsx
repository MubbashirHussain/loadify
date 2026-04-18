import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EntriesList = () => {
  return (
    <View style={styles.container}>
      <Text>Entries List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default EntriesList;
