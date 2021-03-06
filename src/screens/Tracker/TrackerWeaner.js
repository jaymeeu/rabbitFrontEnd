import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import layout from '../layout';
import TopMenu from '../../../components/TopMenu';
import {useNavigation} from '@react-navigation/native';
import StyledButton from '../../../components/Button/StyledButton';
function TrackerWeaner() {
  const navigation = useNavigation();
    return (
      <View style={layout.container}>
        {/* <View style={layout.TopMenu}><TopMenu/></View>
        <View style={layout.TopMenu1}></View> */}
        <View style={layout.BodyView}>
          <View><Text style={{fontWeight: '700', fontSize:24, textAlign:'center', marginTop: 20, marginBottom: 10}}>Doe Tracker</Text></View>
          <StyledButton  
                type="primary"
                content={"Weaner Tracker"}
                onPress={() => {
                navigation.navigate('Tracker');  
            }}/>
        </View>
      </View>
    );
  }

  export default TrackerWeaner;