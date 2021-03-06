import React, { useState } from "react";
import {Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native'
import styles from './styles';
import layout from '../../src/screens/layout';
import Axios from 'axios';
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from 'react-native-datepicker'

function KittenForm() {
  const [category, setcategory] = useState('');
  const [type, settype] = useState('');
  const [pDoe, setpDoe] = useState('');
  const [pBuck, setpBuck] = useState('');
  const [mKitten, setmKitten] = useState('');
  const [fKitten, setfKitten] = useState('');
  const [tKitten, settKitten] = useState('');
  const [description, setdescription] = useState('');
  const [dateProduced, setdateProduced] = useState('');
 const server = 'http://192.168.43.190:3000';

  const submit = () =>{
    Axios.post(`${server}/insertKitten`, {
        category: category,
        type: type, 
        pDoe: pDoe,
        pBuck: pBuck,
        mKitten: mKitten,
        fKitten: fKitten,
        tKitten: tKitten,
        description: description,
        dateProduced: dateProduced
    });
    setcategory('');
    settype('');
    setpDoe('');
    setpBuck('');
    setfKitten('');
    setmKitten('');
    settKitten('');
    setdescription('');
    setdateProduced('');
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
                    <Text style={styles.inputTitle}>Kitten Category Name</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter unique kitten category'
                    placeholderTextColor= 'white'
                    value={category}
                    onChangeText = {category=> setcategory(category)}/>
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
                    <Text style={styles.inputTitle}>Parent Doe</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter Parent (Doe)'
                    placeholderTextColor= 'white'
                    value={pDoe}
                    onChangeText = {pDoe=> setpDoe(pDoe)}
                     />
                </View>
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Parent Buck</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter Parent (Buck)'
                    placeholderTextColor= 'white'
                    value={pBuck}
                    onChangeText = {pBuck=> setpBuck(pBuck)}
                     />
                </View>
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Number of Male Kitten</Text>
                    <TextInput style={styles.input} 
                    placeholder='Enter no. of male kitten'
                    placeholderTextColor= 'white'
                    value={mKitten}
                    onChangeText = {mKitten=> setmKitten(mKitten)}
                     />
                </View>
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Number of Female Kitten</Text>
                    <TextInput style={styles.input} 
                    placeholder= 'Enter no. of female kitten'
                    placeholderTextColor= 'white'
                    value={fKitten}
                    onChangeText = {fKitten=> setfKitten(fKitten)}
                     />
                </View>
                <View style={styles.control}>
                    <Text style={styles.inputTitle}>Total Number Kitten</Text>
                    <TextInput style={styles.input} 
                    placeholder= 'Enter  total no. of kitten'
                    placeholderTextColor= 'white'
                    value={tKitten}
                    onChangeText = {tKitten=> settKitten(tKitten)}
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
                    <DatePicker
                    style={{width: '100%'}}
                    date={dateProduced}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2018-05-01"
                    maxDate="2030-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: { 
                        position: 'absolute',
                        right: 0,
                        top: 4,
                        marginRight: 0
                    },
                    dateInput: {
                        marginRight: 36
                    }
                    }}
                    onDateChange={(dateProduced) => {setdateProduced(dateProduced)}}
      />
                </View>

                <View style={styles.control}>
                    <TouchableOpacity style={styles.btn} onPress={submit}> 
                    <Text style={{color: '#003738'}}> Submitt </Text>
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
