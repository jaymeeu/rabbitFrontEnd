import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import layout from '../layout';
import TopMenu from '../../../components/TopMenu';
import StyledButton from '../../../components/Button/StyledButton';
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'

function TrackerHome() {
    const navigation = useNavigation();
    return (
      <View style={layout.container}>
        {/* <View style={layout.TopMenu}><TopMenu/></View>
        <View style={layout.TopMenu1}></View> */}
        <View style={layout.BodyView}>
          <View><Text style={{fontWeight: '700', fontSize:24, textAlign:'center', marginTop: 20, marginBottom: 10}}>Tracker</Text></View>
          <StyledButton  
                type="primary"
                content={"Doe Tracker"}
                icon= {<Ionicons name = 'analytics-sharp' size={25} color='#008080'/>}
                onPress={() => {
                navigation.navigate('Doe Tracker');  
            }}/>
            <StyledButton  
                type="primary"
                content={"Buck Tracker"}
                icon= {<Ionicons name = 'analytics-sharp' size={25} color='#008080'/>}
                onPress={() => {
                navigation.navigate('Buck Tracker');  
            }}/>
              <StyledButton  
            type="primary"
            content={"Kit Tracker"}
            icon= {<Ionicons name = 'analytics-sharp' size={25} color='#008080'/>}
            onPress={() => {
            navigation.navigate('Kit Tracker');  
            }}/>
              {/* <StyledButton  
            type="primary"
            content={"Weaner Tracker"}
            icon= {<Ionicons name = 'analytics-sharp' size={25} color='#008080'/>}
            onPress={() => {
            navigation.navigate('Weaner Tracker');  
            }}/> */}
        </View>
      </View>
    );
  }

  export default TrackerHome;