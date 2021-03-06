import React, { useState, useEffect } from "react";
import layout from '../layout';
import { FlatList, SafeAreaView,View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles  from "./styles";
import Axios from 'axios';

const server = 'http://192.168.43.190:3000';

const Item = ({ item }) => (
    <>
    <Text style={styles.head}>Doe is: 14 Days Pregnant</Text>
      <Text style={styles.detail}>Name: {item.name}</Text>
      <Text style={styles.detail}>Breed Type: {item.type}</Text>
      <Text style={styles.detail}>Description: {item.description}</Text>
      <Text style={styles.detail}>Cage No.: {item.cageNo}</Text>
      <Text style={styles.detail}>Buck Bred With: {item.buckBredWith}</Text>
      <Text style={styles.detail}>Date Crossed: {item.dateCrossed}</Text>
      <Text style={styles.detail}>Expected Date of Delivery: {item.expectedDelivery}</Text>
      <Text style={styles.detail}>No of Last Kitten Produced: {item.lastKit}</Text>
      <Text style={styles.detail}>No of Male Kitten: {item.lastMale}</Text>
      <Text style={styles.detail}>No of female: {item.lastFemale}</Text>
      </>
  );

function DoePreg(props) {
  useEffect(() => {
    Axios.post(`${server}/getDoe`,{
      doeName:  "Pregnant"
    })
      .then((response)=>{
          setData(response.data);
      });
      setTimeout(() => {
        setloader(false)    
      }, 500);
  }, []);

  const [data, setData] = useState([]);
  const [loader, setloader] = useState(true);

    return (
        
        <View style={layout.container}>
            
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView}>
            <SafeAreaView>
              <FlatList
                data={data}
                renderItem={Item}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
                {/* <Text>{props.route.params.screenName}</Text> */}
            </View>
        </View>
    );
  }

  export default DoePreg;
