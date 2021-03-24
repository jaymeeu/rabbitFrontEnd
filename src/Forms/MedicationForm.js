import React, {useState} from 'react';
import {Text, Button, TextInput,View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Axios from 'axios';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const server = 'http://192.168.43.190:3000';
// const server = 'http://192.168.0.94:3000';
export default function MedicationForm(props){
    const {rabbitName} = props   
    
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
  const navigation = useNavigation();
    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View>
         
            <Formik
            initialValues={{ sickness: '', description:'', medication:'', observation:''}}
            onSubmit={(values) =>{
                if(values.sickness == "" || values.description == "" || values.medication == "" || values.observation == "" || selectedDate == ""){
                    Alert.alert("Note", "All Field are Required")
                }
                else{
                    values.rabbitName = rabbitName;
                    values.date = selectedDate;
                    Axios.post(`${server}/medication`, values)
                    .then((response)=>{
                    });
                    Alert.alert("Suceess", `Medication Administered to ${rabbitName}`)
                    navigation.navigate("Farm");
                }
            }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.body}>
                    <TextInput
                        style={styles.input}
                        placeholder='Sickness'
                        onChangeText={handleChange('sickness')}
                        value={values.sickness}
                    />
                     <TextInput
                        style={styles.input}
                        placeholder='Description'
                        onChangeText={handleChange('description')}
                        value={values.description}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Medication'
                        onChangeText={handleChange('medication')}
                        value={values.medication}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Observation'
                        onChangeText={handleChange('observation')}
                        value={values.observation}
                    />
                   
                    <View>

                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.text2} onPress={showDatePicker}>{selectedDate}</Text>
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
                <TouchableOpacity onPress={handleSubmit}>
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
            )}
            </Formik>
        </View>
    </TouchableWithoutFeedback>
    )
}
