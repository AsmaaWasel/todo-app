// CompletedTasks.js
import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../utils/styles';

const CompletedTasks = () => {
  const completedTodos = useSelector((state) => state.completedTodo.completedTodos);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      {completedTodos.length > 0 ? (
        <FlatList
          data={completedTodos}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      ) : (
        <Text>No completed tasks available.</Text>
      )}
    </View>
  );
};


export default CompletedTasks;
