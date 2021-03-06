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
              <Text>About page</Text>
            </View>
      </View>
    );
  }

  export default About;