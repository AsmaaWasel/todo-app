import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { styles } from '../utils/styles';

const DetailsScreen = ({ route }) => {
  const todo = route?.params?.todo;

  if (!todo) {
    return (
      <View>
        <Text>No details available.</Text>
      </View>
    );
  }

  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Todo Details</Text>
      <View style={styles.item}>
        <Text style={styles.title} >{todo.title}</Text>
        <Text >{todo.description}</Text>
      </View>
    </View>
  );
};
export default DetailsScreen;
