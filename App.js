import { View, Text, TextInput, Button, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';

const myArray = [
  {
    title : 'title1',
    description : 'desc1'
  },
  {
    title : 'title2',
    description : 'desc2'
  },
  {
    title : 'title3',
    description : 'desc3'
  },
];

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);


export default function App()
{
  return(
      <View>
        <Text>TODO APP</Text>
        <TextInput placeholder='Enter title'/>
        <TextInput placeholder='Enter description'/>
        <TouchableOpacity>
        <Text>Add</Text>
      </TouchableOpacity>
        <FlatList
        data={myArray}
        renderItem={({item}) =>(
             <View>
                <Item title={item.title} />
                <Text> "Description : "{item.description}</Text>
             </View>
         
        )}
        keyExtractor={item => item.id}
      />
      </View>
  )
}