import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewEntry = () => {
  return (
    <View style={styles.container}>
      <Text>New Entry Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default NewEntry;
