import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import layout from '../layout';
import TopMenu from '../../../components/TopMenu'

function About() {
    return (
      <View style={layout.container}>
            <View style={layout.TopMenu}><TopMenu/></View>
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView}>
              <Text style={{fontSize: 24, paddingVertical:20, color:"white", textAlign: 'center'}}>About us</Text>
              <Text style={{fontSize: 18, paddingVertical:20, color:"white", textAlign: 'center'}}>Design & Developed </Text>
              <Text style={{fontSize: 18, paddingVertical:20, color:"white", textAlign: 'center'}}>By</Text>
              <Text style={{fontSize: 18, paddingVertical:20, color:"white", textAlign: 'center'}}> Abdulrasaq Jamiu Adewuyi</Text>
              
            </View>
      </View>
    );
  }

  export default About;