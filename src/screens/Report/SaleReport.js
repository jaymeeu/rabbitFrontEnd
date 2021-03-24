import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text, View, ScrollView } from 'react-native';
import layout from '../layout';
import styles from './styles'
import Card from '../../../components/card'
import Axios from "axios"
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const server = 'http://192.168.43.190:3000';

function SalesReport() {
  const [sales, setSales] = useState([])
  const [initial, setInitial] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select Date");
  const navigation = useNavigation();
  const showDatePicker = () => {
    setSales(initial)
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
      setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
      setSelectedDate(date.toString());
      hideDatePicker();
  };
  const handleFilter = () => {
    setSales((prevRecord)=>{
      return prevRecord.filter(report => report.date.substring(0,15) == selectedDate.substring(0,15))
    })
  };

  const renderItem = ({item}) =>(
    <TouchableOpacity onPress={()=>{navigation.navigate('Sale Details', {item : item} )}}>
       <Card>  
         <Text style={{flex: 1}}>{item.rabbitName}</Text>
        <Text style={{flex: 1}}>{item.buyer}</Text>
        <Text style={{flex: 1}}>{(item.date).substring(0, 15)}</Text>
      </Card>
    </TouchableOpacity>
  );

  useEffect(()=>{
    Axios.get(`${server}/getSales`)
    .then((response) =>{
      setSales(response.data);
      setInitial(response.data)
    });
  }, []);

    return (
        <View style={layout.container}>
            <View style={layout.TopMenu1}></View>
              <View style={layout.BodyView}>
              <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.text2} onPress={showDatePicker}>{selectedDate.substring(0, 15)}</Text>
                          <TouchableOpacity onPress={handleFilter} style={styles.icon}>
                             <Text>Filter</Text> 
                          </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View>
                  <Card> 
                    <Text style={{flex: 1}}>Rabbit</Text>
                    <Text style={{flex: 1}}>Buyer</Text>
                    <Text style={{flex: 1}}>Date</Text>
                  </Card>
                  <FlatList
                    ListHeaderComponent={<Text>...</Text>}
                    keyExtractor={item => item.id.toString()}
                    data = {sales}
                    renderItem = {renderItem}
                    ListFooterComponent={<Text>...</Text>}
                  />   
                </View>
              </View>
        </View>
    );
  }
  export default SalesReport;