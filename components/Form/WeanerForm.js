import React, { useState } from "react";
import {Text, View,TouchableWithoutFeedback, Keyboard, TouchableOpacity, TextInput, Alert} from 'react-native'
import styles from './styles';
import layout from '../../src/screens/layout';
import Axios from 'axios';
import { ScrollView } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Ionicons} from '@expo/vector-icons';

function WeanerForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [dateRegistered, setDateRegistered] = useState('Select Date');
  const [okToBreed, setOkToBreed] = useState('Select Date');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setDateRegistered(date.toString());
    hideDatePicker();
  };

  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };
 
  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };
  const handleConfirm1 = (date) => {
    setOkToBreed(date.toString());
    hideDatePicker1();
  };

  const server = 'http://192.168.43.190:3000';

  const submit = () =>{
      if(name == "" || description == "" || gender == "" || dateRegistered == "Select Date" || okToBreed == "Select Date")
      {
        Alert.alert('Note', "All fields are required")
      }
      else{
        Axios.post(`${server}/addWeaner`, {
            name: name,
            description: description, 
            gender: gender,
            dateRegistered: dateRegistered,
            okToBreed: okToBreed
        }).then((response)=>{
            if (response.data.message == "exist"){
                Alert.alert("Error", `${name} already exit`);
                setName('');
            }
            else{
                Alert.alert("Success", `${name} added to weaner list`)
                setName('');
                setDescription('');
                setGender('');
                setDateRegistered('');
                setOkToBreed('');
            }
        })
      }
    } 
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={layout.container}>
        <View style={layout.TopMenu1}></View>
        <ScrollView>
        <View style={styles.form}>
            <View style={styles.header}><Text style={styles.title}>Add Doe</Text></View>
            <View style={styles.formBody}>
                
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Weaner Category Name</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter unique weaner name'
                    placeholderTextColor= 'white'
                    value={name}
                    onChangeText = {name=> setName(name)}/>
                </View>

                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Gender</Text>
                        <Picker
                            selectedValue={gender}
                            style={{height: 50, width: '100%'}}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) =>
                                setGender(itemValue)
                            }>
                               
                             <Picker.Item label="Select Gender" value=""/>
                             <Picker.Item label="Female" value="Female"/>
                             <Picker.Item label="Male" value="Male"/>
                        </Picker>
                </View>

                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Description</Text>
                    <TextInput style={styles.input} 
                    placeholder= 'Enter Description'
                    placeholderTextColor= 'white'
                    value={description}
                    onChangeText = {description=> setDescription(description)}
                     />
                </View>
                <View style={styles.control}>
                    
                        <View>
                        <Text style={styles.inputTitle}>Date Registered</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text2} onPress={showDatePicker}>{dateRegistered.substring(0,15)}</Text>
                                <TouchableOpacity onPress={showDatePicker} style={styles.icon}>
                                    <Ionicons 
                                        name = 'calendar-outline'
                                        size= {25}
                                        color="#2c9dd1"
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.inputTitle}>OK To Breed</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text2} onPress={showDatePicker1}>{okToBreed.substring(0,15)}</Text>
                                <TouchableOpacity onPress={showDatePicker1} style={styles.icon}>
                                    <Ionicons 
                                        name = 'calendar-outline'
                                        size= {25}
                                        color="#2c9dd1"
                                    />
                                </TouchableOpacity>
                            </View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible1}
                                mode="date"
                                onConfirm={handleConfirm1}
                                onCancel={hideDatePicker1}
                            />
                    </View>
                    <TouchableOpacity onPress={submit}>
                        <View style={styles.btn}>
                            <Ionicons 
                                style={{flex:1, textAlign:"right", paddingHorizontal:10}}
                                name = 'checkmark-done-outline'
                                size={25}
                                color="#2c9dd1"
                            />
                            <Text style={{flex:1}}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
           
        </View>
        </ScrollView>
        </View>
        </TouchableWithoutFeedback>
    );
  }
  export default WeanerForm;
