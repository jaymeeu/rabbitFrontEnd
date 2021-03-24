import React from 'react';
import { Text, View } from 'react-native';
import layout from '../layout';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import Card2 from '../../../components/card2'

function SalesDetails({route}) {
  const { item } = route.params;
  const navigation = useNavigation();
    return (
        <View style={layout.container}>
           
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView1}>
              <Card2>
                <Text style={styles.itemName}>Rabbit Sold: {item.rabbitName}</Text>
                {/* <Text style={styles.itemName}>Rabbit Sold:: {item.amount}</Text>
                <Text style={styles.itemName}>{item.quantity}</Text> */}
               
                <Text style={styles.itemName}>Buyer: {item.buyer}</Text>
                <Text style={styles.itemName}>Price: {item.price}</Text>
                <Text style={styles.itemName}>Description: {item.description}</Text>
                <Text style={styles.itemName}>Transaction Date: {(item.date).substring(0, 15)}</Text>
              </Card2>
            </View>
        </View>
    );
  }

  export default SalesDetails;