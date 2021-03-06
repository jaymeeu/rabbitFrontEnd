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
    alignSelf:'center',
    backgroundColor:'black',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius:6,
    marginTop: 6,
  },
head:{
    marginVertical: 6,
    marginVertical: 6,
     justifyContent: 'center', 
     alignItems: 'stretch', 
     textAlign: 'center',
     width: '100%',
     height: 60, 
     fontSize: 18, 
     color:'#ffffff',
     fontWeight:'700', 
     fontStyle: 'italic'
},

  });
  export default styles;