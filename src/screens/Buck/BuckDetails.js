import React, {useState} from "react";
import layout from '../layout';
import { View, Text,Modal, TouchableOpacity, ScrollView,  StyleSheet} from "react-native";
import styles from '../Does/styles';
import Card from '../../../components/card'
import BuckMedication from './BuckMed'
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import UpdateState from '../../Forms/UpdateState';
import BreedRabbit from '../../Forms/BreedRabbit';
import RemoveBreed from "../../Forms/RemoveBreed"


function BuckDetails({route}) {
const { item } = route.params;
const [showMed, setShowMed] = useState(false)

const [showBreed, setShowBreed] = useState(false)
const [showRemove, setShowRemove] = useState(false)
const [showUpdate, setShowUpdate] = useState(false)
const [showModal, setShowModal] = useState(false)

const expectedReadyDate = new Date(item.expectedReadyDate);
const current = new Date();
const diffTime = (expectedReadyDate - current);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const diffDaysNegative = Math.abs(diffDays)

const navigation = useNavigation();
     return (
        <View style={layout.container}>
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  {
                    diffDays > 0 ?
                    <Text style={{paddingVertical: 10}}>Buck will be ready in {diffDays} days</Text>
                    :
                    diffDays == 0 ?
                    <Text style={{paddingVertical: 10}}>Buck will be ready today update state to available</Text>
                    :
                    <Text style={{paddingVertical: 10}}>Buck has been available {diffDaysNegative} days ago update state to available</Text>
                  }
                </View>
                <TouchableOpacity style={{flex:1}} onPress={()=>setShowMed(!showMed)}>
                    {
                      showMed ? 
                      <Text style ={styles.btn}>Show Details</Text>
                      :
                      <Text style ={styles.btn}>Medical Report</Text>
                    }
                  </TouchableOpacity>
              </View>
               
                <View>
                  <Text style={styles.head}> 
                    {
                      item.state  === "Available" 
                      ? 
                        "Buck is available for breeding"
                      : item.state  === "Bred" ? "Buck has been crossed" :"Buck is pregnant"
                    }
                  </Text>

                  {
                    showMed ?
                   <BuckMedication buckname={item.name}/>
                    :
                    <ScrollView>
                      <Card> 
                        <Text style={{flex: 1}}> Name:</Text> 
                        <Text style={{flex: 1}}> {item.name}</Text>
                      </Card>
                 
                      <Card>
                        <Text style={{flex: 1}}>Breed Type: </Text> 
                        <Text style={{flex: 1}}>{item.type}</Text>
                      </Card>
                      <Card>
                        <Text style={{flex: 1}}>Description: </Text> 
                        <Text style={{flex: 1}}>{item.description}</Text>
                      </Card>
                      <Card>
                        <Text style={{flex: 1}}>Cage No.:</Text> 
                        <Text style={{flex: 1}}>{item.cageNo}</Text>
                      </Card>
                      <Card>
                        <Text style={{flex: 1}}>Doe Previously Bred With: </Text> 
                        <Text style={{flex: 1}}> {item.doeBredWith}</Text>
                      </Card>
                      <Card>
                        <Text style={{flex: 1}}>Date Crossed:</Text> 
                        <Text style={{flex: 1}}>{item.dateCrossed}</Text>
                      </Card>
                      <Card>
                        <Text style={{flex: 1}}>Expected Ready Date :</Text> 
                        <Text style={{flex: 1}}>{item.expectedReadyDate}</Text>
                      </Card>
                    </ScrollView>
                  
                  }
                      {
                        showMed ?
                        null
                        :
                          <>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                             
                              {item.state === 'Available' ?
                                <TouchableOpacity style={{flex: 1}}  
                                  onPress={() => {
                                    setShowModal(true)
                                    setShowBreed(true)
                                  }}>
                                  <Text style ={styles.btnGroup}>Breed Now</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={{flex: 1}}
                                onPress={() => {
                                 setShowModal(true)
                                 setShowUpdate(true)
                               }}>
                                 <Text style ={styles.btnGroup}>Update State</Text>
                               </TouchableOpacity>
                               }

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
                  setShowBreed(false);
                  setShowRemove(false);
                  setShowUpdate(false)
                }
                 
                }/>
                {showUpdate ?
                  <UpdateState rabbitName={item.name} rabbitState={item.state} rabbitForm={item.form}/>
                  :
                  showRemove ?
                  <RemoveBreed rabbitName={item.name} rabbitState={item.state} rabbitForm={item.form}/>
                  :
                  <BreedRabbit rabbitName={item.name} rabbitState={item.state} rabbitForm={item.form}/>
                  
                }
              </View>
          </Modal>

        </View>
    );
  }
  export default BuckDetails;

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

