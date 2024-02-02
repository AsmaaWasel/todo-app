import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { title, description } = route.params.todo;

  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>Description: {description}</Text>
    </View>
  );
};

export default DetailsScreen;
