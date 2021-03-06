import React, {useState, useEffect} from 'react';
import {Text,View, TouchableOpacity, Alert} from 'react-native';
import {Formik} from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Axios from 'axios';
import styles from './styles'
import {Ionicons} from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const server = 'http://192.168.43.190:3000';
// const server = 'http://192.168.0.94:3000';
export default function BreedRabbit(props){
    const navigation = useNavigation();
    const {rabbitName, rabbitState, rabbitForm} = props ;

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState("Select Date");
    const [selectedRabbit, setSelectedRabbit] = useState("")
    const [listDoe, setListDoe] = useState([])
    const [listBuck, setListBuck] = useState([])
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
  useEffect(() => {
      Axios.get(`${server}/getAvailDoe`)
      .then((response)=>{
          setListDoe(response.data)
      });

      Axios.get(`${server}/getAvailBuck`)
      .then((response)=>{
          setListBuck(response.data)
      });
  }, [])
    return(
        <View>
            
            <Formik
            initialValues={{first:''}}
            onSubmit={(values) =>{
                if (selectedDate == "Select Date" || selectedRabbit == ""){
                    Alert.alert("Note","All Field Required")
                }
                else{
                    values.rabbitName = rabbitName;
                    values.selectedRabbit = selectedRabbit;
                    values.date = selectedDate;
                    values.form = rabbitForm;
                    values.state = rabbitState;
                    Axios.put(`${server}/breed`, values)
                    .then((response)=>{ 
                    });
                    Alert.alert("Success", `${rabbitName} Bred with ${selectedRabbit}`);
                    navigation.navigate("Farm");
                }
                
            }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.body}>
                <View style={styles.picker}>
                    {
                        rabbitForm == "Buck" ?
                            <Picker
                            selectedValue={selectedRabbit}
                            style={{height: 50, width: '100%'}}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedRabbit(itemValue)
                            }>
                                {
                                    listDoe.map((val, index)=>{
                                        return <Picker.Item key={val.id} label={val.name} value={val.name} />
                                    })
                                }
                            </Picker>
                        :
                            <Picker
                            selectedValue={selectedRabbit}
                            style={{height: 50, width: '100%'}}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedRabbit(itemValue)
                            }>
                                {
                                    listBuck.map((val, index)=>{
                                        return <Picker.Item key={val.id} label={val.name} value={val.name} />
                                    })
                                }
                            </Picker>
                        }
            
                </View>
                    
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
    )
}
