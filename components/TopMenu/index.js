import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

export default function TopMenu() {
    return (
        <View>
            <View style={styles.top}>
            {/* <Pressable>
                <Image style={styles.menu} source={require('../../assets/icon.png')} />
            </Pressable> */}
            <Text style={styles.appName}>Rabbit Farm Management System</Text>
            </View>
           
        </View>
        
        
    )
} 
