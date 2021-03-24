import React, {useEffect, useState} from "react";
import styles from './styles';
import Axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements'
import { FlatList,View,Text, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import MedicationForm from '../../Forms/MedicationForm'
import * as Animatable from 'react-native-animatable';

function BuckMedication(props) {
  const server = 'http://192.168.43.190:3000';
  // const server = 'http://192.168.0.94:3000';
  const navigation = useNavigation();
  const [medDetails, setMedDetails] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)

  const { buckname } = props;

  const renderItem = ({ item }) => (
    <Animatable.View animation="fadeInUpBig">
      <TouchableOpacity style={styles.item} onPress={()=>{ navigation.navigate("medicalDetails", {item: item} )}}>
        <ListItem bottomDivider>
          <Avatar rounded source={require('../../../assets/icons/buck.png')}/>
          <ListItem.Content>
            <ListItem.Title> {item.sickness}</ListItem.Title>
            <ListItem.Subtitle>{item.medication}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem> 
      </TouchableOpacity>
    </Animatable.View>
    
  );
  useEffect(() => {
    Axios.post(`${server}/getMed`, {
      name: buckname
    })
    .then((response)=>{
      if(response.data.length > 0){
        setMedDetails(response.data);
      }
      else{setMedDetails('No Medical Report Found')}
    });
  }, [])

     return (
       <View>
         {medDetails === 'No Medical Report Found' ?
          <View>
            <MaterialIcons
              name='add'
              size={24}
              style = {{...ModalStyles.close, ...ModalStyles.add}}
              onPress={()=>setModalOpen(true)}
              />
               
              <Text>No Medical report found</Text>
          </View>
         
          :
          <FlatList
            ListHeaderComponent={
              <MaterialIcons
              name='add'
              size={24}
              style = {{...ModalStyles.close, ...ModalStyles.add}}
              onPress={()=>setModalOpen(true)}/>
            }
            keyExtractor={item => item.id.toString()}
            data={medDetails}
            renderItem={renderItem}
            ListFooterComponent={
                <Text style={styles.line}></Text>
            }
            />
          }
          <Modal visible = {modalOpen} animationType='slide'>
            <View style = {ModalStyles.content}>
              <MaterialIcons
              name='close'
              size={24}
              style = {ModalStyles.close}
              onPress={()=>setModalOpen(false)}/>
              <MedicationForm rabbitName= {buckname}/>
            </View>
          </Modal>
       </View>
    );
  }
  export default BuckMedication;

  const ModalStyles = StyleSheet.create({
    close: {
      backgroundColor: 'maroon',
      color: 'white',
      marginVertical: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      alignSelf: 'flex-end'
    },
    add:{alignSelf:'center'},
    content: {
      flex: 1,
      padding: 30,

    }
  })