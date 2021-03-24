import React, { useEffect, useState } from "react";
import layout from '../layout';
import styles from '../Does/styles'
import { FlatList,View, Text, TouchableOpacity } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements'

const server = 'http://192.168.43.190:3000';
// const server = 'http://192.168.0.106:3000';
const actions = [
  {
    text: "Add Kitten",
    icon: require("../../../assets/accessibility.png"),
    name: "AddKitten", 
    position: 1
  },
 ];

function Kitten() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={()=>{ navigation.navigate("Kitten Details", {item: item} )}}>
      <ListItem bottomDivider>
        <Avatar rounded source={require('../../../assets/icons/kitten.png')}/>
        <ListItem.Content>
          <ListItem.Title> {item.name}</ListItem.Title>
          <ListItem.Subtitle>Number: {item.count}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem> 
    </TouchableOpacity>
  );
    useEffect(() => {
      Axios.get(`${server}/getKittens`)
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
                navigation.navigate('KittenForm')
              }}
            />
        </View>
    );
  }

  export default Kitten;
