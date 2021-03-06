import React, {useState} from 'react';
import {Text,TouchableOpacity, View, TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Axios from 'axios';
import RadioButtonRN from 'radio-buttons-react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles'
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const server = 'http://192.168.43.190:3000';
// const server = 'http://192.168.0.94:3000';
export default function RemoveBreed(props){
    const navigation = useNavigation();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState("Select Date");
    const [price, setPrice] = useState("")
    const [buyer, setBuyer] = useState("")
    const [description, setDescription] = useState("")
    const [selectOption, setSelectOption] = useState("")
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

    const {rabbitName, rabbitState, rabbitForm} = props   

    const data = [
            { label: 'Sold'},
            {label: 'Death'}
        ];
    const handleSubmit = ()=>{
        if(selectOption == "Death"){
            if(selectedDate == "Select Date"){
                Alert.alert("Note", "All Field Required")
            }
            else{
                    Axios.put(`${server}/delete`, 
                    { 
                        rabbitName : rabbitName,
                        date : selectedDate,
                        form : rabbitForm,
                        buyer: buyer,
                        state : rabbitState,
                        option : selectOption,
                        price: price,
                        description: description
                    })
                    .then((response)=>{});
                        Alert.alert("Success", `${rabbitName} Removed`);
                        navigation.navigate("Farm");
                }
            }
            else if(selectOption == "Sold"){
                if(selectedDate == "Select Date" || buyer =="" || price == "" || description == ""){
                    Alert.alert("Note", "All Field Required")
                }
                else{
                        Axios.put(`${server}/delete`, 
                        { 
                            rabbitName : rabbitName,
                            date : selectedDate,
                            form : rabbitForm,
                            state : rabbitState,
                            buyer: buyer,
                            option : selectOption,
                            price: price,
                            description: description
                        })
                        .then((response)=>{});
                            Alert.alert("Success", `${rabbitName} Removed`);
                            navigation.navigate("Farm");
                    }
                }
            else{
                    Alert.alert("Note","All Field Required")
                }   
    }
    return(
        <View>
            <View style={styles.body}>     
                <RadioButtonRN
                    data={data}
                    selectedBtn={ (e) => {
                        setSelectOption(e.label);
                        }
                    }
                    icon={
                        <Ionicons 
                        name = 'checkmark-circle-outline'
                        size={25}
                        color="#2c9dd1"
                        />
                    }
                />
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
                { 
                    selectOption == "Sold" ?
                    <>
                    <TextInput
                        style={styles.input}
                        placeholder='Buyer Name'
                        onChangeText={buyer=>setBuyer(buyer)}
                        value={buyer}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Enter amount sold'
                        onChangeText={price=>setPrice(price)}
                        value={price}
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Description'
                        onChangeText={description=>setDescription(description)}
                        value={description}
                    />
                    </>
                    :
                    null

                }

                
                <TouchableOpacity onPress={handleSubmit}>
                    <View style={styles.btn}>
                        {selectOption == "Sold" ? 
                        <Text style={{flex:1, textAlign: 'center'}}> Sell</Text>
                        :
                        <>
                            <Ionicons 
                            style={{flex:1, textAlign:"right", paddingHorizontal:10}}
                            name = 'trash-outline'
                            size={25}
                            color="#2c9dd1"
                            />
                            <Text style={{flex:1}}> Delete</Text>
                        </>
                        }
                       
                    </View>
                </TouchableOpacity>  
            </View>
        
    </View>
    )
}
