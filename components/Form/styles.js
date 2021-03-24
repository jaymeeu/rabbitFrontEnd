import {StyleSheet} from 'react-native';
  const styles = StyleSheet.create({
    form:{
        alignSelf:'stretch',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20
    },
    header:{
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center', 
        width: '100%', 
        height: 50, 
        borderTopColor: '#003738', 
        borderBottomColor:'#003738', 
        borderTopWidth: 2, 
        borderBottomWidth: 2, 
        backgroundColor: '#02e6e9', 
        fontSize: 24,
        marginBottom: 30,
      },

    title:{fontSize: 20, textTransform: "uppercase", fontWeight:'700', color: '#003738'},
    formBody:{
      width: '100%',
      
      alignItems: 'stretch'
  },
  control:{ 
      width: '100%',
      alignItems: 'stretch',
      marginBottom: 20
  },
  inputTitle: {
      color: 'white', 
      fontSize: 16, 
      fontWeight: "bold",
      marginBottom: 5,
  },
  input: {
      width: '100%',
      alignSelf: 'stretch',
      borderRadius: 5,
      height: 40,
      borderWidth: 0,
      borderBottomWidth: 1,
      
      borderColor: '#ffffff',
      color: '#ffffff',
      paddingLeft: 20,
      paddingRight: 20
  },
  // btn: {
  //     justifyContent:'center',
  //     width: '100%',
  //     alignSelf: 'stretch',
  //     alignItems: 'center',
  //     borderRadius: 5,
  //     height: 40,
  //     color:'white',
  //     backgroundColor:'#02e6e9'
  // },
  text2:{
    marginVertical:5,
    flex:6,
    paddingHorizontal:20 ,
    paddingVertical:20,
    borderRadius:6,
    borderWidth:1,
    borderColor:'#f2f2f2',
},
icon:{
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    paddingHorizontal:10 ,
    paddingVertical:10,
    borderRadius:6,
    borderWidth:1,
    borderColor:'#f2f2f2',
},
btn:{
 
  justifyContent:'center',
  marginTop: 15,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20 ,
    paddingVertical:20,
    backgroundColor:'#02e6e9',
    borderRadius: 10,
}

})
export default styles