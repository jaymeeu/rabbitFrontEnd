import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import StyledButton from '../../../components/Button/StyledButton';
import { useNavigation } from '@react-navigation/native';
import TopMenu from '../../../components/TopMenu';
import layout from '../layout';
import {Ionicons} from '@expo/vector-icons';



function Home() {
    const navigation = useNavigation();
    return (
        <View style={layout.container}>
            <View style={layout.TopMenu}><TopMenu/></View>
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView}>
                <StyledButton  
                type="primary"
                icon= {<Ionicons name = 'paw-sharp' size={25} color='#008080'/>}
                content={"Farm"}
                onPress={() =>{
                navigation.navigate('My Farm');
                }}/>
            <StyledButton  
            type="primary"
                content={"Tracker"}
                icon= {<Ionicons name = 'analytics-sharp' size={25} color='#008080'/>}
                onPress={() => {
                    navigation.navigate('Tracker');  
                }}/>
                <StyledButton  
                type="primary"
                    content={"Report"}
                    icon={<Ionicons name = 'bar-chart-sharp' size={25} color='#008080'/> }
                    onPress={() => {
                        navigation.navigate('Report');
                }}/>
                <StyledButton  
                type="primary"
                    content={"About"}
                    icon= {<Ionicons name = 'infinite-sharp' size={25} color='#008080'/>}
                    onPress={() => {
                        navigation.navigate('About')
                }}/>
            </View>
      </View>
      
    );
  }

  export default Home;

 