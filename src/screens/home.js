
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoForm from '../components/todoForm';
import { useDispatch } from 'react-redux';
import { addCompletedTodo, removeCompletedTodo } from '../Redux/slices/slice.completedTodos';
import { addUncompletedTodo, removeUncompletedTodo } from '../Redux/slices/slice.uncompletedTodos';
import { styles } from '../utils/styles';


const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
  const [alertShown, setAlertShown] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleDimensionChange = ({ window }) => {
      if (!alertShown) {
        Alert.alert(
          'Window Dimensions Changed',
          `Width: ${window.width}, Height: ${window.height}`,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
        setAlertShown(true);
      }
    };


    Dimensions.addEventListener('change', handleDimensionChange);

    return () => {
      Dimensions.removeEventListener('change', handleDimensionChange);
    };
  }, []);

  const addTask = (task) => {
    setTodos((prevTodos) => [...prevTodos, task]);
    dispatch(addUncompletedTodo(task)); 
  };

  const toggleComplete = (title) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.title === title ? { ...todo, completed: !todo.completed } : todo
      );
  
      const todoToToggle = updatedTodos.find((todo) => todo.title === title);
  
      if (todoToToggle) {
        if (todoToToggle.completed) {
          dispatch(removeUncompletedTodo(todoToToggle));
          dispatch(addCompletedTodo({ ...todoToToggle, completed: true }));
        } else {
          dispatch(removeCompletedTodo(todoToToggle));
          dispatch(addUncompletedTodo({ ...todoToToggle, completed: false }));
        }
  
        return updatedTodos;
      }
  
      return prevTodos;
    });
  };
  

  const removeTask = (title) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== title));
    dispatch(removeUncompletedTodo({ title })); 
    dispatch(removeCompletedTodo({ title })); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>
      <TodoForm todos={todos} onAddTask={addTask} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity style={styles.input} onPress={() => toggleComplete(item.title)}>
              <Icon
                name={item.completed ? 'check-circle' : 'circle'}
                size={20}
                color={item.completed ? 'green' : 'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { todo: item })}
              style={styles.contentContainer}
            >
              <View style={styles.listItem}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => removeTask(item.title)}>
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default HomeScreen;
