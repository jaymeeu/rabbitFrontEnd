import React, {useState} from "react";
import layout from '../layout';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import styles from '../Does/styles';
import Card from '../../../components/card'
import BuckMedication from '../Buck/BuckMed'
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import RemoveBreed from "../../Forms/RemoveBreed"

function WeanerDetails({route}) {
  const { item } = route.params;
  const [showMed, setShowMed] = useState(false)
  
  const [showRemove, setShowRemove] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <View style={layout.container}>
        <View style={layout.TopMenu1}></View>
        <View style={layout.BodyView}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>setShowMed(!showMed)}>
              {
                showMed ? 
                <Text style ={styles.btn}>Show Details</Text>
                :
                <Text style ={styles.btn}>Medical Report</Text>
              }
            </TouchableOpacity>
          </View>
            <View>
              {
                showMed ?
               <BuckMedication buckname={item.name}/>
                :
                <ScrollView>
                  <Card> 
                    <Text style={{flex: 1}}>Name:</Text> 
                    <Text style={{flex: 1}}> {item.name}</Text>
                  </Card>
                  <Card> 
                    <Text style={{flex: 1}}>Description:</Text> 
                    <Text style={{flex: 1}}> {item.description}</Text>
                  </Card>
                  <Card> 
                    <Text style={{flex: 1}}>Gender:</Text> 
                    <Text style={{flex: 1}}> {item.gender}</Text>
                  </Card>
                  <Card> 
                    <Text style={{flex: 1}}>Date Registered:</Text> 
                    <Text style={{flex: 1}}> {item.dateRegistered.substring(0,15)}</Text>
                  </Card>
                  <Card> 
                    <Text style={{flex: 1}}>Ok To Breed:</Text> 
                    <Text style={{flex: 1}}> {item.okToBreed.substring(0,15)}</Text>
                  </Card>
                </ScrollView>
              }
                  {
                    showMed ?
                    null
                    :
                      <>
                         <View style={{flexDirection: 'row', marginTop: 20}}>
                        
                              <TouchableOpacity style={{flex: 1}}
                              onPress={() => {
                                setShowModal(true)
                                setShowRemove(true)
                              }}>
                                <Text style ={styles.btnGroup}>Remove</Text>
                              </TouchableOpacity>
                          </View>
                        </>
                  }
                 
            </View>  
        </View>
        <Modal visible = {showModal} animationType='slide'>
              <View style = {ModalStyles.content}>
                <MaterialIcons
                name='close'
                size={24}
                style = {ModalStyles.close}
                onPress={()=>{
                  setShowModal(false);
                  setShowRemove(false);
                }
                 
                }/>
                {
                  showRemove ?
                  <RemoveBreed rabbitName={item.name} rabbitForm={item.form} />
                  :
                 null
                }
                

              </View>
          </Modal>
    </View>
);
}
  export default WeanerDetails;

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