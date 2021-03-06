import React, { useEffect, useState } from "react";
import layout from '../layout';
import styles from '../Does/styles'
import { FlatList, SafeAreaView,View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
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



const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    {/* <Text style={styles.title}>{item.name} {item.state}</Text>
    <Text style={styles.title}>{item.type} 
    <Ionicons name = 'chevron-forward-outline' size={25} color='#008080'/></Text> */}
   <ListItem bottomDivider>
        <Avatar rounded source={require('../../../assets/icons/weaner.png')}/>
        <ListItem.Content>
          <ListItem.Title> {item.categoryName}</ListItem.Title>
          {/* <ListItem.Subtitle>{item.type}</ListItem.Subtitle> */}
          <ListItem.Subtitle>{item.count} <Text> Weaners</Text></ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Title> {item.parentBuck}</ListItem.Title>
          {/* <ListItem.Subtitle>{item.type}</ListItem.Subtitle> */}
          <ListItem.Title> {item.parentDoe} </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem> 
  </TouchableOpacity>
);  

function Weaner() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [loader, setloader] = useState(true);

  const renderItem = ({ item }) => {
      const backgroundColor = item.sn === selectedId ? "#02DEE1" : "#BBF1F1";
        return (
          <>
          <Item
            item={item}
            onPress={() => {  
              setSelectedId(item.sn); 
                  navigation.navigate('Weaner Details', {WeanerName: item.categoryName}) }}

            style={{ backgroundColor }}
          />
         
          </>
        );
    };

    useEffect(() => {
      Axios.get(`${server}/getWeaners`)
        .then((response)=>{
            setData(response.data);
        });
        setTimeout(() => {
          setloader(false)
        }, 1000);
    }, []);
 
    return (
        <View style={layout.container}>
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView}>
              {/* {
                loader ? 
                  <View style={layout.loader}>
                      <ActivityIndicator size="large" color="#f0f0f0"/>
                  </View>
                  
                  : */}
                  <SafeAreaView>
                    <FlatList
                      data={data}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                      extraData={selectedId}
                    />
                  </SafeAreaView>
              {/* } */}
                
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
