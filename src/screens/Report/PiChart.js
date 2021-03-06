import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, Button, View } from 'react-native';
import Axios from 'axios';
import {PieChart} from "react-native-chart-kit";
import Card from '../../../components/card'

export default function PiChart() {

  const server = 'http://192.168.43.190:3000';
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(`${server}/chartData`)
    .then((response)=>{
      setData(response.data)
      console.log(response.data)
  });
  }, [])
  const screenWidth = Dimensions.get('window').width;
  
    return (
        <View>
          <Card>
            <PieChart
              data={data}
              width={screenWidth}
              height={270} 
              accessor={"number"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[20, 20]}
              absolute
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              
            />
          </Card>
        </View>
    );
  }