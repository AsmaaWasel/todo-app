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
      <View style={{paddingLeft:80,paddingTop:70}}>
        <Text style={{color:"red"}}>TODO APP</Text>
        <TextInput placeholder='Enter title'/>
        <TextInput placeholder='Enter description'/>
        <TouchableOpacity>
        <Text style={{color:"green"}}>Add</Text>
      </TouchableOpacity>
        <FlatList
        data={myArray}
        renderItem={({item}) =>(
             <View>
                <Text>"title :"{item.title}</Text>
                <Text> "Description : "{item.description}</Text>
             </View>
         
        )}
        keyExtractor={item => item.id}
      />
      </View>
  )
}