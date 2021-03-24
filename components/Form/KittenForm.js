import React, { useState } from "react";
import {Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native'
import styles from './styles';
import layout from '../../src/screens/layout';
import Axios from 'axios';
import { ScrollView } from "react-native-gesture-handler";
import { Alert } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Ionicons} from '@expo/vector-icons';

function KittenForm() {
  const [kitCategory, setKitCategory] = useState('');
  const [doeName, setDoeName] = useState('');
  const [buckName, setBuckName] = useState('');
  const [kitten, setKitten] = useState('');
  const [description, setdescription] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select Date");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    setSelectedDate(date.toString());
    hideDatePicker();
  };

 const server = 'http://192.168.43.190:3000';
//  const server = 'http://192.168.0.106:3000';

  const submit = () =>{
      if(kitCategory == "" || doeName == "" || buckName == "" || kitten == "" || description == "" || selectedDate == "Select Date" ){
          Alert.alert("Note", "All fields are required")
      }
      else{
        Axios.post(`${server}/addKitten`, {
            kitCategory: kitCategory,
            doeName: doeName,
            buckName: buckName,
            kitten: kitten,
            description: description,
            dateProduced: selectedDate
        }).then((response)=>{
            if(response.data.message == "exist"){
                Alert.alert("Note", `${kitCategory} already exist`)
            }
            else if (response.data.message == "available"){
                Alert.alert("Success", `${kitCategory} added to kitten list`)
                setKitCategory('');
                setDoeName('');
                setBuckName('');
                setfKitten('');
                setmKitten('');
                setdescription('');
                setSelectedDate('');
            }
            else{
                Alert.alert("Error", `An error occur check your internet`)
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
            <View style={styles.header}><Text style={styles.title}>Add Kitten</Text></View>
            <View style={styles.formBody}>
                
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Kitten Category Name</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter unique kitten kitCategory'
                    placeholderTextColor= 'white'
                    value={kitCategory}
                    onChangeText = {kitCategory=> setKitCategory(kitCategory)}/>
                </View>

                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Parent Doe</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter Parent (Doe)'
                    placeholderTextColor= 'white'
                    value={doeName}
                    onChangeText = {doeName=> setDoeName(doeName)}
                     />
                </View>
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Parent Buck</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter Parent (Buck)'
                    placeholderTextColor= 'white'
                    value={buckName}
                    onChangeText = {buckName=> setBuckName(buckName)}
                     />
                </View>
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Number of Kitten</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter no. of kitten'
                    placeholderTextColor= 'white'
                    value={kitten}
                    keyboardType='numeric'
                    onChangeText = {kitten=> setKitten(kitten)}
                     />
                </View>
               
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Description</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter Kitten description'
                    placeholderTextColor= 'white'
                    value={description}
                    onChangeText = {description=> setdescription(description)}
                     />
                </View>
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Date Produced</Text>
                    <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.text2} onPress={showDatePicker}>{selectedDate.substring(0,15)}</Text>
                        <TouchableOpacity onPress={showDatePicker} style={styles.icon}>
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
  export default KittenForm;
