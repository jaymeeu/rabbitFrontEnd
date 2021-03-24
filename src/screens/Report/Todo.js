import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text, View, ScrollView } from 'react-native';
import layout from '../layout';
import styles from './styles'
import Card from '../../../components/card'
import Axios from "axios"
import { FlatList } from 'react-native-gesture-handler';

const server = 'http://192.168.43.190:3000';

function Todo() {
  const [todo, setTodo] = useState([]);
 
const renderItem = ({item}) =>(
  <Card> 
    <Text style={{flex: 2}}>{item.schedule}</Text>
    <Text style={{flex: 1}}>{(item.date)}</Text>
  </Card>
);

  useEffect(()=>{
    Axios.get(`${server}/getTodo`)
    .then((response) =>{
        setTodo(response.data);
    });
  }, []);

    return (
        <View style={layout.container}>
            <View style={layout.TopMenu1}></View>
              <View style={layout.BodyView}>
                  
              <Text style={{ fontSize: 24, color: 'white'}}>Today's Todo</Text>
                <View>
                    {
                        <FlatList
                            ListHeaderComponent={<Text>...</Text>}
                            keyExtractor={item => item.id.toString()}
                            data = {todo}
                            renderItem = {renderItem}
                            ListFooterComponent={<Text>...</Text>}
                      /> 
                    }
                   
                </View>
              </View>
        </View>
    );
  }
  export default Todo;