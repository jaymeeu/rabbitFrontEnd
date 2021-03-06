import React, {useState} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import Axios from 'axios';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Ionicons} from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const server = 'http://192.168.43.190:3000';
// const server = 'http://192.168.0.94:3000';

export default function UpdateState(props){
    const {rabbitName, rabbitState, rabbitForm, dateCrossed, tmale, tfemale, tkitten} = props;
    const [selectedState, setSelectedState] = useState("");
    const [selectedDate, setSelectedDate] = useState("Select Date");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [fkit, setFkit] = useState("");
    const [mkit, setMkit] = useState("");
    const navigation = useNavigation();

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

    const handleUpdateBuck = () =>{
        if(selectedState == ""){
            Alert.alert("All Field Required", "Note")
        }
        else{
            Axios.put(`${server}/updateBuck`,{
                rabbitName : rabbitName,
                selectedState: selectedState,
            })
            Alert.alert(`${rabbitName} state updated to ${selectedState}`, "Success");
            navigation.navigate("Farm");
        }  
    }
    const handleUpdateDoe = () =>{
        console.log(tkitten)
        if(selectedState == ""){
            Alert.alert("All Field Required", "Note")
        }
        else{
            
            Axios.put(`${server}/updateDoe`,{
                rabbitName : rabbitName,
                rabbitState : rabbitState,
                selectedState : selectedState,
                dateCrossed: dateCrossed,
                selectedDate: selectedDate,
                mkit: mkit,
                fkit: fkit,
                tmale: tmale, 
                tfemale: tfemale,
                tkitten: tkitten
            })
            Alert.alert("Success", `${rabbitName} State Updated`);
            navigation.navigate("Farm");
        }
    }
    return(
        <View>
            <View style={styles.picker}>
                {rabbitForm == "Doe" ? 
                    <View>
                    {rabbitState == "Bred" ?
                        <Picker
                            selectedValue={selectedState}
                            style={{height: 50, width: '100%'}}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedState(itemValue)
                            }>
                            <Picker.Item key="0" label="Select State" value="" />
                            <Picker.Item key="1" label="Available" value="Available" />
                            <Picker.Item key="2" label="Pregnant" value="Pregnant" />
                        </Picker>
                    :
                    rabbitState == "Available" ?
                        <Picker
                            selectedValue={selectedState}
                            style={{height: 50, width: '100%'}}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedState(itemValue)
                            }>
                            <Picker.Item key="0" label="Select State" value="" />
                            <Picker.Item key="1" label="Bred" value="Bred" />
                            <Picker.Item key="2" label="Pregnant" value="Pregnant" />
                        </Picker>
                        :
                        rabbitState == "Pregnant" ?
                        <>
                        <Picker
                            selectedValue={selectedState}
                            style={{height: 50, width: '100%'}}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedState(itemValue)
                            }>
                            <Picker.Item key="0" label="Select State" value="" />
                            <Picker.Item key="1" label="Available" value="Available" />
                            <Picker.Item key="2" label="Mother" value="Mother" />
                        </Picker>
                        {
                            selectedState === "Mother" ?
                             <>
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
                                <TextInput
                                    style={styles.input}
                                    placeholder='Number of Male Kit'
                                    onChangeText={mkit=>setMkit(mkit)}
                                    value={mkit}
                                    keyboardType='numeric'
                                /> 
                               <TextInput
                                    style={styles.input}
                                    placeholder='Number of Female Kit'
                                    onChangeText={fkit=>setFkit(fkit)}
                                    value={fkit}
                                    keyboardType='numeric'
                                /> 
                            </>
                            :
                            null
                        }
                        </>
                         :
                        
                        <Picker
                            selectedValue={selectedState}
                            style={{height: 50, width: '100%'}}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedState(itemValue)
                            }>
                            <Picker.Item key="0" label="Select State" value="" />
                            <Picker.Item key="1" label="Available" value="Available" />
                            {/* <Picker.Item key="2" label="Bred" value="Bred" /> */}
                        </Picker>
                        }   
                         <TouchableOpacity onPress={handleUpdateDoe}>
                            <View style={styles.btn}>
                                <Ionicons 
                                    style={{flex:1, textAlign:"right", paddingHorizontal:10}}
                                    name = 'checkmark-done-outline'
                                    size={25}
                                    color="#2c9dd1"
                                />
                                <Text style={{flex:1}}>Update State</Text>
                            </View>
                        </TouchableOpacity> 
                        </View>
                        :

                        <>
                        <Picker
                            selectedValue={selectedState}
                            style={{height: 50, width: '100%'}}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedState(itemValue)
                            }>
                            <Picker.Item key="0" label="Select State" value="" />
                            <Picker.Item key="1" label="Available" value="Available" />
                        </Picker>
                        <TouchableOpacity onPress={handleUpdateBuck}>
                            <View style={styles.btn}>
                            <Ionicons 
                                style={{flex:1, textAlign:"right", paddingHorizontal:10}}
                                name = 'checkmark-done-outline'
                                size={25}
                                color="#2c9dd1"
                            />
                                <Text style={{flex:1}}>Update Buck</Text>
                            </View>
                        </TouchableOpacity>
                        </>
                        
                    }
            
                </View>
               
                   
        </View>
    )
}
