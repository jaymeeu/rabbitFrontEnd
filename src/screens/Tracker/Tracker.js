import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import layout from '../layout';
import TopMenu from '../../../components/TopMenu';
import StyledButton from '../../../components/Button/StyledButton';
function Tracker() {
    return (
      <View style={layout.container}>
        <View style={layout.TopMenu}><TopMenu/></View>
        <View style={layout.TopMenu1}></View>
        <View style={layout.BodyView}>
         
        </View>
      </View>
    );
  }

  export default Tracker;