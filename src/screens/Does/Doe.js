import React, { useEffect, useState } from "react";
import layout from '../layout';
import { FlatList,View, TouchableOpacity } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements'
import styles from './styles';
import {Text} from 'react-native';

const server = 'http://192.168.43.190:3000';
// const server = 'http://192.168.0.87:3000';
const actions = [
  {
    text: "Add Doe",
    icon: require("../../../assets/accessibility.png"),
    name: "AddDoe", 
    position: 1
  },
 ];

function Doe() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={()=>{ navigation.navigate("Doe Details", {item: item} )}}>
      <ListItem bottomDivider>
        <Avatar rounded source={require('../../../assets/icons/doe.png')}/>
        <ListItem.Content>
          <ListItem.Title> {item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.state}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem> 
    </TouchableOpacity>
  );
    useEffect(() => {
      Axios.get(`${server}/getDoes`)
        .then((response)=>{
            setData(response.data);
        }); 
    }, []);
 
    return (
        <View style={layout.container}>
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView}>
              <FlatList
               ListHeaderComponent={<Text style={styles.line}></Text>}
                keyExtractor={item => item.id.toString()}
                data={data}
                renderItem={renderItem}
                ListFooterComponent={<Text style={styles.line}></Text>}
              /> 
            </View>
            
            <FloatingAction
              actions={actions}
              onPressItem={name => {
                navigation.navigate('DoeForm')
              }}
            />
        
        </View>
    );
  }

  export default Doe;
