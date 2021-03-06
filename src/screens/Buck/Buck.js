import React, { useEffect, useState } from "react";
import layout from '../layout';
import { FlatList,View,Text, TouchableOpacity } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements'
import styles from './styles';

const server = 'http://192.168.43.190:3000';
// const server = 'http://192.168.0.94:3000';
const actions = [
  {
    text: "Add Buck",
    icon: require("../../../assets/accessibility.png"),
    name: "AddBuck", 
    position: 1
  },
 ];

function Buck() {
  const [data, setData] = useState([]);
const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={()=>{ navigation.navigate("Buck Details", {item: item} )}}>
      <ListItem bottomDivider>
        <Avatar rounded source={require('../../../assets/icons/buck.png')}/>
        <ListItem.Content>
          <ListItem.Title> {item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.state}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem> 
    </TouchableOpacity>
  );
    useEffect(() => {
      Axios.get(`${server}/getBucks`)
        .then((response)=>{
            setData(response.data);
        });
    }, []);
 
    return (
        <View style={layout.container}>
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView}>
                <FlatList
                ListHeaderComponent={<Text>List of buck</Text>}
                keyExtractor={item => item.id.toString()}
                data={data}
                renderItem={renderItem}
                ListFooterComponent={<Text>List of buck footer</Text>}
                />                
            </View>
            <FloatingAction
              actions={actions}
              onPressItem={name => {
                navigation.navigate('BuckForm')
              }}
            />
        </View>
    );
  };
  export default Buck;
