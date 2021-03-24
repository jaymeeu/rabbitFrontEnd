import React from 'react';
import {View } from 'react-native';
import layout from '../layout';
import PiChart from'./PiChart';

function RabbitStat() {


    return (
        <View style={layout.container}>
           
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView1}>
              <View style={{padding: 15}}>
                <PiChart/>
              </View>
                
            </View>
        </View>
    );
  }

  export default RabbitStat;