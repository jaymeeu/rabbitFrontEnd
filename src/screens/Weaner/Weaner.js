import React, { useEffect, useState } from "react";
import layout from '../layout';
import styles from '../Does/styles'
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements'

const server = 'http://192.168.43.190:3000';
const actions = [
  {
    text: "Add Weaner",
    icon: require("../../../assets/accessibility.png"),
    name: "AddWeaner", 
    position: 1
  },
 ];

function Weaner() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={()=>{ navigation.navigate("Weaner Details", {item: item} )}}>
      <ListItem bottomDivider>
        <Avatar rounded source={require('../../../assets/icons/weaner.png')}/>
        <ListItem.Content>
          <ListItem.Title> {item.name}</ListItem.Title>
          <ListItem.Subtitle>Gender: {item.gender}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem> 
    </TouchableOpacity>
  );
    useEffect(() => {
      Axios.get(`${server}/getWeaners`)
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
                navigation.navigate('WeanerForm')
              }}
            />
        </View>
    );
  }

  export default Weaner;
