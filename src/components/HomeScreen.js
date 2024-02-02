import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

const Item = ({ title, description, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text>Title: {title}</Text>
      <Text>Description: {description}</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleAddTodo = () => {
    if (titleInput && descriptionInput) {
      const newTodo = {
        title: titleInput,
        description: descriptionInput,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTitleInput('');
      setDescriptionInput('');
    }
  };

  return (
    <SafeAreaView>
      <View style={{ paddingLeft: 80, paddingTop: 70 }}>
        <Text style={{ color: 'red', padding:20}}>TODO APP</Text>
        <TextInput
          placeholder='Enter title'
          value={titleInput}
          onChangeText={(text) => setTitleInput(text)}
        />
        <TextInput
          placeholder='Enter description'
          value={descriptionInput}
          onChangeText={(text) => setDescriptionInput(text)}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Text style={{ color: 'green' }}>Add</Text>
        </TouchableOpacity>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              description={item.description}
              onPress={() => navigation.navigate('Details', { todo: item })}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
