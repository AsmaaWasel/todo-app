// CompletedTasks.js
import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { removeUncompletedTodo } from '../Redux/slices/slice.uncompletedTodos'; // Import the action
import { styles } from '../utils/styles';

const ToDoComponent = () => {
    const uncompletedTodos = useSelector((state) => state.uncompletedTodo.uncompletedTodos);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>uncompleted Todos</Text>
      {uncompletedTodos.length > 0 ? (
        <FlatList
          data={uncompletedTodos}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      ) : (
        <Text>No completed tasks available.</Text>
      )}
    </View>
  );
};

export default ToDoComponent;
