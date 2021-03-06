import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import styles from './styles';

function HomeCard(props) {
    const {onPress, text} = props;
    return (
        <View style = {styles.HomeCard}>
             <TouchableOpacity style = {{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}
             onPress={() => onPress()}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default HomeCard;
