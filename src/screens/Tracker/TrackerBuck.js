import React, {useState, useEffect} from 'react';
import { StyleSheet, Modal, Text,TouchableWithoutFeedback,Keyboard, View, FlatList } from 'react-native';
import layout from '../layout';
import styles from './styles';
import StyledButton from '../../../components/Button/StyledButton';
import Axios from 'axios';
import {MaterialIcons} from '@expo/vector-icons';
import EditTracker from '../../Forms/EditTracker'

const server = 'http://192.168.43.190:3000';
function TrackerBuck() {
  const [showModal, setShowModal] = useState(false)
  const [track, setTrack] = useState([]);

  useEffect(() => {
       Axios.post(`${server}/getTrack`,{
         rabbitForm: "Buck"
       })
       .then((response)=>{
         setTrack(response.data);
         
       })
  }, [])

  const renderItem =({item}) => (
    <View>
        <View  style={styles.details}>
            <Text style={styles.txt}>Breed Date</Text>
            <Text style={styles.num}>{item.breedDate}</Text> 
            <Text style={styles.txt}></Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.txt}>Ok to Rebreed</Text>
            <Text style={styles.num}>{item.okToRebreed}</Text>
            <Text style={styles.txt}>days after breeding</Text>
          </View>
    </View>
  )

    return (
      <View style={layout.container}>
        <View style={layout.TopMenu1}></View>
        <View style={layout.BodyView}>
          <View style={styles.body}>
          <Text style={styles.headTag}>Doe Tracker</Text>
          <View style={styles.textBody} >
             <FlatList
                keyExtractor={item => item.id.toString()}
                data={track}
                renderItem={renderItem}
             />
          </View>
          <StyledButton 
                type="primary"
                content={"Edit Tracker"}
                onPress={() => {
                  setShowModal(true)
            }}/>
            </View>
        </View>
        <Modal visible = {showModal} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style = {ModalStyles.content}>
                  <MaterialIcons
                    name='close'
                    size={24}
                    style = {ModalStyles.close}
                    onPress={()=>{
                      setShowModal(false);
                      }
                    }
                  />
              <EditTracker rabbitForm = "Buck"/>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
      </View>

    );
  }

  export default TrackerBuck
  
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