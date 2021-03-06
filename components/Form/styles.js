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
      borderWidth: 1,
      borderColor: '#ffffff',
      color: '#ffffff',
      paddingLeft: 20,
      paddingRight: 20
  },
  btn: {
      justifyContent:'center',
      width: '100%',
      alignSelf: 'stretch',
      alignItems: 'center',
      borderRadius: 5,
      height: 40,
      color:'white',
      backgroundColor:'#02e6e9'
  }

})
export default styles