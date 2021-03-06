import React, { useState } from "react";
import {Text, View, TouchableOpacity, TextInput} from 'react-native'
import styles from './styles';
import layout from '../../src/screens/layout';

function DoeBreedForm() {
    return (
        <View style={layout.container}>
            <View style={layout.TopMenu1}></View>
            <View style={styles.form}>
                <View style={styles.header}><Text style={styles.title}>Breed Doe</Text></View>
                <View style={styles.formBody}>
                    <View style={styles.control}>
                        <Text style={styles.inputTitle}>name</Text>
                        <TextInput style={styles.input} placeholder='name here'/>
                    </View>
                    <View style={styles.control}>
                        <Text style={styles.inputTitle}>second</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={styles.control}>
                        <TouchableOpacity style={styles.btn}> 
                        <Text style={{color: '#003738'}}> Breed </Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        </View>
    );
  }

  export default DoeBreedForm;
