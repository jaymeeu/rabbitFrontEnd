import React, { useState } from "react";
import {Text, View, Alert, TouchableOpacity,TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native'
import styles from './styles';
import layout from '../../src/screens/layout';
import Axios from 'axios';

function DoeForm() {
  const [name, setname] = useState('');
  const [type, settype] = useState('');
  const [cageNo, setcageNo] = useState('');
  const [description, setdescription] = useState('');
 const server = 'http://192.168.43.190:3000';

  const submit = () =>{
    if(name == "" || type == "" || cageNo == "" || description == "")
    {
        Alert.alert("Required", "All field are require")
    }
    else{
        Axios.post(`${server}/insertDoe`, {
            name: name,
            type: type, 
            cageNo: cageNo,
            description: description
        })
        .then((response) =>{
            if(response.data.message == "Doe Name Already Exist"){
                Alert.alert("Error", "Doe Name Already Exist" ) 
            }
            else{
                Alert.alert("Success","Doe Added" );
                setname('');
                settype('');
                setcageNo('');
                setdescription('');
            }
        })
        }
    
    } 
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={layout.container}>
        <View style={layout.TopMenu1}></View>
        <View style={styles.form}>
            <View style={styles.header}><Text style={styles.title}>Add Doe</Text></View>
            <View style={styles.formBody}>
                
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Name</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter unique name'
                    placeholderTextColor= 'white'
                    value={name}
                    onChangeText = {name=> setname(name)}
                     />
                </View>

                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Rabbit Type</Text>
                    <TextInput style={styles.input}
                     placeholder='Enter Rabbit Breed Type' 
                     placeholderTextColor= 'white'
                     value={type}
                    onChangeText = {type=> settype(type)}/>

                </View>
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Cage Number</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter cage number'
                    placeholderTextColor= 'white'
                    value={cageNo}
                    onChangeText = {cageNo=> setcageNo(cageNo)}
                     />
                </View>
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Description</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter doe description'
                    placeholderTextColor= 'white'
                    value={description}
                    onChangeText = {description=> setdescription(description)}
                     />
                </View>

                <View style={styles.control}>
                    <TouchableOpacity style={styles.btn} onPress={submit}> 
                    <Text style={{color: '#003738'}}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        </View>
        </View>
        </TouchableWithoutFeedback>
    );
  }
  export default DoeForm;
