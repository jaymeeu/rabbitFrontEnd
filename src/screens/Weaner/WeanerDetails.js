import React, { useState, useEffect} from "react";
import layout from '../layout';
import { FlatList, SafeAreaView,View, Text, ActivityIndicator } from "react-native";
import {useNavigation} from '@react-navigation/native'
import styles from '../Does/styles';
import Axios from 'axios';

 const server = 'http://192.168.43.190:3000';

const Item = ({ item }) => (
    <>
    <Text style={styles.head}> Weaner </Text>
      <Text style={styles.detail}>Name: {item.categoryName}</Text>
      
      </>
  );

function WeanerDetails(props) {

  useEffect(() => {
    Axios.post(`${server}/getWeaner`,{
      WeanerName:  props.route.params.WeanerName
    })
      .then((response)=>{
          setData(response.data);
      });
      setTimeout(() => {
        setloader(false)    
      }, 500);
  }, []);

  const [data, setData] = useState([]);
  const [state, setState] = useState('');
  const [loader, setloader] = useState(true);

    const navigation = useNavigation();

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
                <View>
                  <SafeAreaView>
                    <FlatList
                      data={data}
                      renderItem={Item}
                      keyExtractor={(item) => item.id}
                    />
                  </SafeAreaView>
                    
                </View>  
              {/* } */}
            </View>
        </View>
    );
  }
  export default WeanerDetails;

