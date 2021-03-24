import React from 'react';
import { Image, View } from 'react-native';
import StyledButton from '../../../components/Button/StyledButton';
import { useNavigation } from '@react-navigation/native';
import TopMenu from '../../../components/TopMenu';
import layout from '../layout';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';



function Home() {
    const navigation = useNavigation();
    return (
        <View style={layout.container}>
            <View style={layout.TopMenu}><TopMenu/></View>
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView}>
                <Animatable.View animation="fadeInUpBig">
                    <StyledButton  
                        type="primary"
                        icon= {<Ionicons name = 'paw-sharp' size={25} color='#008080'/>}
                        content={"Farm"}
                        onPress={() =>{
                        navigation.navigate('My Farm');
                        }}/>
                </Animatable.View>
                
                <Animatable.View animation="fadeInUpBig">
                    <StyledButton  
                        type="primary"
                        content={"Report"}
                        icon={<Ionicons name = 'bar-chart-sharp' size={25} color='#008080'/> }
                        onPress={() => {
                        navigation.navigate('Report');
                    }}/>
                </Animatable.View>
                <Animatable.View animation="fadeInDownBig">
                    <StyledButton  
                        type="primary"
                        content={"Tracker"}
                        icon= {<Ionicons name = 'analytics-sharp' size={25} color='#008080'/>}
                        onPress={() => {
                        navigation.navigate('Tracker');  
                    }}/>
                </Animatable.View>
                <Animatable.View animation="fadeInDownBig">
                    <StyledButton  
                        type="primary"
                        content={"About"}
                        icon= {<Ionicons name = 'infinite-sharp' size={25} color='#008080'/>}
                        onPress={() => {
                        navigation.navigate('About')
                    }}/>
                </Animatable.View>
            </View>
      </View>
      
    );
  }

  export default Home;

 