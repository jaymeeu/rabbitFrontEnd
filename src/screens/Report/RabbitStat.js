import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import layout from '../layout';
import styles from './styles'
import PiChart from'./PiChart';
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';

function RabbitStat() {



  const server = 'http://192.168.43.190:3000';
  const [data, setData] = useState("")
  useEffect(() => {
    Axios.get(`${server}/chartData`)
    .then((response)=>{
      console.log(response.data)
  });
  }, [])

  const navigation = useNavigation();
    return (
        <View style={layout.container}>
           
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView1}>
                <PiChart/>
            </View>
        </View>
    );
  }

  export default RabbitStat;