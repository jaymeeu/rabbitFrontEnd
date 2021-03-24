import React, {useState} from "react";
import layout from '../layout';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import styles from './styles';
import Card from '../../../components/card'
import BuckMedication from '../Buck/BuckMed'
import { useNavigation } from '@react-navigation/native';
import UpdateState from '../../Forms/UpdateState';
import {MaterialIcons} from '@expo/vector-icons';
import BreedRabbit from '../../Forms/BreedRabbit';
import RemoveBreed from "../../Forms/RemoveBreed"

function DoeDetails({route}) {
  const { item } = route.params;
  const [showMed, setShowMed] = useState(false)
  
const [showBreed, setShowBreed] = useState(false)
const [showRemove, setShowRemove] = useState(false)
const [showUpdate, setShowUpdate] = useState(false)
const [showModal, setShowModal] = useState(false)

const checkPregDate = new Date(item.checkPreg);
const current = new Date();
const diffTime = (checkPregDate - current);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const diffDaysNegative = Math.abs(diffDays)


  return (
    <View style={layout.container}>
        <View style={layout.TopMenu1}></View>
        <View style={layout.BodyView}>
          <View style={{flexDirection: 'row'}}>
              {item.state == 'Bred' ?
                <View style={{flex: 1}}>
                  {
                    diffDays > 0 ?
                    <Text style={{paddingVertical: 10}}>Check if doe in pregnant in {diffDays} days</Text>
                    :
                    diffDays == 0 ?
                    <Text style={{paddingVertical: 10}}> Check if doe pregnant today and update doe state</Text>
                    :
                    <Text style={{paddingVertical: 10}}>Check if doe is pregnant now and update doe state</Text>
                  }
                </View>
                :
                <View style={{flex: 1}}></View>
              }
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
              <Text style={styles.head}> 
                {
                  item.state  === "Available" ? "Doe is available for breeding"
                  : item.state  === "Bred" ? "Doe has been crossed" 
                  : item.state  === "Pregnant" ? "Doe is Pregnant" 
                  :"Doe is a Mother"
                }
              </Text>

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
                  <Text style={{flex: 1}}>Breed Type:</Text> 
                  <Text style={{flex: 1}}> {item.type}</Text>
                  </Card>
                  <Card> 
                  <Text style={{flex: 1}}>Description:</Text> 
                  <Text style={{flex: 1}}> {item.description}</Text>
                  </Card>
                  <Card> 
                    <Text style={{flex: 1}}>Cage No.:</Text> 
                    <Text style={{flex: 1}}> {item.cageNo}</Text>
                  </Card>

                  {item.state == 'Bred' ? 
                    <>
                      <Card> 
                        <Text style={{flex: 1}}>Date Crossed.:</Text> 
                        <Text style={{flex: 1}}> {item.dateCrossed.substring(0,15)}</Text>
                      </Card>
                      <Card> 
                        <Text style={{flex: 1}}>Confirm Pregnancy on.:</Text> 
                        <Text style={{flex: 1}}> {item.checkPreg.substring(0,15)}</Text>
                      </Card>
                    </>
                    :
                    null
                  }
                  {item.state == 'Pregnant' ?
                  <>
                  <Card> 
                    <Text style={{flex: 1}}>Date Crossed.:</Text> 
                    <Text style={{flex: 1}}> {item.dateCrossed.substring(0,15)}</Text>
                  </Card>
                  <Card> 
                    <Text style={{flex: 1}}>Confirmed Pregnancy on:</Text> 
                    <Text style={{flex: 1}}> {item.checkPreg.substring(0,15)}</Text>
                  </Card>
                  <Card> 
                    <Text style={{flex: 1}}>Add Nest to Cage on.:</Text> 
                    <Text style={{flex: 1}}> {item.addNest.substring(0,15)}</Text>
                  </Card>
                  <Card> 
                    <Text style={{flex: 1}}>Expected Delivery Crossed.:</Text> 
                    <Text style={{flex: 1}}> {item.expectedDelivery.substring(0,15)}</Text>
                  </Card>
                  </>
                  :
                  item.state == 'Mother' ?
                    <>
                      <Card> 
                        <Text style={{flex: 1}}>Delivery Date:</Text> 
                        <Text style={{flex: 1}}> {item.actualDelivery.substring(0,15)}</Text>
                      </Card>
                      <Card> 
                        <Text style={{flex: 1}}>Remove Kitten Nest:</Text> 
                        <Text style={{flex: 1}}> {item.removeNest.substring(0,15)}</Text>
                      </Card>
                      <Card> 
                        <Text style={{flex: 1}}>Ready Date:</Text> 
                        <Text style={{flex: 1}}> {item.okToRebreed.substring(0,15)}</Text>
                      </Card>
                    </>
                  :
                  item.state == "Available" ?
                    <Card> 
                      <Text style={{flex: 1}}>Last Ready Date:</Text> 
                      <Text style={{flex: 1}}> {item.okToRebreed.substring(0,15)}</Text>
                    </Card>
                  :
                  null
                  }
                  
                  <Card> 
                    <Text style={{flex: 1}}>Buck Previously Bred With:</Text> 
                    <Text style={{flex: 1}}> {item.buckBredWith}</Text> 
                    </Card>
                  <Card> 
                  <Text style={{flex: 1}}>No of Last Kitten Produced:</Text> 
                  <Text style={{flex: 1}}> {item.lastKit}</Text> 
                    </Card>
                  
                  <Card> 
                  <Text style={{flex: 1}}>Total No of Kitten Produced:</Text> 
                  <Text style={{flex: 1}}> {item.totalKit}</Text>
                    </Card>
                 
                </ScrollView>
              
              }
                  {
                    showMed ?
                    null
                    :
                      <>
                         <View style={{flexDirection: 'row', marginTop: 20}}>
                         { item.state === 'Available' ?
                              null
                              :
                              <TouchableOpacity style={{flex: 1}}
                              onPress={() => {
                                setShowModal(true)
                                setShowUpdate(true)
                              }}>
                                <Text style ={styles.btnGroup}>Update State</Text>
                              </TouchableOpacity>
                              
                              }
                              {item.state === 'Available' ?
                                <TouchableOpacity style={{flex: 1}}  
                                onPress={() => {
                                  setShowModal(true)
                                  setShowBreed(true)
                                }}>
                                  <Text style ={styles.btnGroup}>Breed Now</Text>
                                </TouchableOpacity>
                                :
                                null}

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
                  <UpdateState rabbitName={item.name} rabbitState={item.state} rabbitForm={item.form} dateCrossed={item.dateCrossed} tmale = {item.totalMale} tfemale = {item.totalFemale} tkitten = {item.totalKit} buckBredWith ={item.buckBredWith}/>
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
  export default DoeDetails;

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