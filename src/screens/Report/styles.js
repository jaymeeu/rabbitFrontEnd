import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 5,
      padding: 10,
      height: 120,
    },
    itemName: {
      marginVertical: 15,
      fontSize: 18,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    img: {
      width : 50,
      height: 50,
      maxHeight: 50,
      maxWidth: 50,
    },
    text2:{
    marginVertical:10,
      flex:6,
      paddingHorizontal:20 ,
      paddingVertical:10,
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
      backgroundColor: 'white',
      borderColor:'#f2f2f2',
    }
  });
  export default styles;