import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import layout from '../layout';
import TopMenu from '../../../components/TopMenu';
// import HomeCard from '../../components/HomeCard'
import styles from './styles'
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';

function Report() {
  const navigation = useNavigation();
    const [items, setItems] = React.useState([
        { name: 'Activity Report', code: '#1abc9c', iconPath: require('../../../assets/icons/doe3.png') },
        { name: 'Sale Report', code: '#2ecc71', iconPath: require('../../../assets/icons/buck.png') },
        { name: 'Rabbit Stat', code: '#3498db', iconPath: require('../../../assets/icons/kitten2.png') },
       ])
        
    return (
        <View style={layout.container}>
           
            <View style={layout.TopMenu1}></View>
            <View style={layout.BodyView1}>
              <FlatGrid
                  itemDimension={200}
                  data={items}
                  style={styles.gridView}
                  // staticDimension={300}
                  // fixed
                  spacing={10}
                  renderItem={({ item }) => (
                    
                    <View>
                      <TouchableOpacity 
                        onPress={() =>{
                        navigation.navigate({name: item.name});
                        }}>
                          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Image style={styles.img} source = {item.iconPath}/>
                            <Text style={styles.itemName}>{item.name}</Text>
                          </View>
                      </TouchableOpacity>
                    </View>
                )}
              />
            </View>
        </View>
    );
  }

  export default Report;