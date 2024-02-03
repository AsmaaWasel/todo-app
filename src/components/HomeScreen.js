import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { styles } from '../utils/styles';


const Item = ({ title, description, onPress ,onDelete,onComplete, isCompleted }) => (

  <TouchableOpacity  style={styles.listItem} onPress={onPress}>
    <View style={styles.listItemText}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Title: {title}</Text>
      <Text style={{ color: '#666' }}>Description: {description}</Text>
    </View>

    <TouchableOpacity style={styles.completeButton} onPress={onComplete}>
        {isCompleted ? (
          <Icon name="check-square-o" size={20} color="perple" style={styles.completeIcon} />
        ) : (
          <Icon name="square-o" size={20} color="black" style={styles.completeIcon} />
        )}
      </TouchableOpacity>


    <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
      <Icon name="trash" size={20} color="red" />
    </TouchableOpacity>
  </TouchableOpacity>
);


const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

 
  const handleAddTodo = () => {
    if (titleInput && descriptionInput) {
     
      const isTodoExists = todos.some(todo =>
        todo.title === titleInput && todo.description === descriptionInput
      );
  
      if (!isTodoExists) {
        const newTodo = {
          title: titleInput,
          description: descriptionInput,
          isCompleted: false,
        };
  
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTitleInput('');
        setDescriptionInput('');
      } else {
       
        alert('Todo already exists');
      }
    }
  };


  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };


  const handleOnComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingLeft: 80, paddingTop: 70 }}>
        <Text style={styles.title}>TODO APP</Text>
        <TextInput style={styles.input}
          placeholder='Enter title'
          value={titleInput}
          onChangeText={(text) => setTitleInput(text)}
        />
        <TextInput style={styles.input}
          placeholder='Enter description'
          value={descriptionInput}
          onChangeText={(text) => setDescriptionInput(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>

        <FlatList
          data={todos}
          renderItem={({ item ,index}) => (
            <Item 
              title={item.title}
              description={item.description}
              isCompleted={item.isCompleted}
              onPress={() => navigation.navigate('Details', { todo: item })}
              onDelete={() => handleDeleteTodo(index)}
              onComplete={() => handleOnComplete(index)}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </SafeAreaView>
  );

  
};

export default HomeScreen;
