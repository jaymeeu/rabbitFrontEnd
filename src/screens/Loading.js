import React from 'react';
import { 
    View, 
    Text, 
    Image,
    StyleSheet,
    Dimensions
   
} from 'react-native';


const Loading = () => {
    
    return (
      <View style={styles.container}>
         <Image source={require('../../assets/icons/amosunIcon.png')}
         style={{width:80, height:60, maxHeight:60, maxWidth:80}}/>
      </View>
    );
};

export default Loading;

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: width,
    backgroundColor: 'white',
    justifyContent:"center",
    alignItems:'center'
  },
})