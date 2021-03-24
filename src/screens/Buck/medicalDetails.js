import React, {useState} from "react";
import layout from '../layout';
import { View, Text} from "react-native";
import styles from '../Does/styles';
import Card from '../../../components/card'

function MedicalDetails({route}) {
  const { item } = route.params;
     return (
        <View style={layout.container}>
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView}>
                
                <View>
                  <Text style={styles.head}> 
                    {item.rabbitName} Medical Report
                  </Text>

                    <View>
                      <Card> 
                        <Text> Sickness: {item.sickness} </Text>
                      </Card>
                 
                      <Card>
                        <Text>Medication: {item.medication}</Text>
                        </Card>
                        <Card><Text>Description: {item.description}</Text></Card>
                        <Card><Text>Observation.: {item.observation} </Text></Card>
                        <Card><Text>Date.: {item.dates.substring(0,15)} </Text></Card>
                     </View>
                </View>  
              {/* } */}
            </View>
        </View>
    );
  }
  export default MedicalDetails;

