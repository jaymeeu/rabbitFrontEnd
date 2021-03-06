import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  item: {
    padding: 0,
    marginTop: 12,
    marginHorizontal: 12,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    width: '50%'
  },
  icon: {
    width: '50%',
    height: '100%'
  },

  detail:{
    marginHorizontal:10,
    marginVertical:10,
     justifyContent: 'center',            
  },
btn:{
  marginBottom: 10,
  alignSelf:'flex-end',
  backgroundColor:'maroon',
  paddingHorizontal: 10,
  paddingVertical: 10,
  borderRadius:6,
},

btnGroup:{
  textAlign: 'center',
  backgroundColor:'#008080',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius:6,
  borderColor:'white',
  borderWidth: 1,
},
head:{
     justifyContent: 'center', 
     alignItems: 'stretch', 
     textAlign: 'center',
     fontSize: 18, 
     color:'#ffffff',
     fontWeight:'700', 
     fontStyle: 'italic',
     paddingBottom: 10,
},

  });
  export default styles;