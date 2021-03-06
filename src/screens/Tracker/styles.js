import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
const styles = StyleSheet.create({

    body:{paddingHorizontal: 0},
    textBody: {
      width: windowWidth - 30,
      height:windowheight - 250
    },
    headTag: {
        fontWeight: '700', fontSize:24, textAlign:'center', marginTop: 10, marginBottom: 10
    },
    details:{
        alignItems:'center',
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 19,
        marginBottom:10,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
    },
    txt:{
        fontWeight: '800',
        flex: 3, fontSize:16
    },
    num:{color: 'red', fontWeight:'bold', flex: 1, paddingLeft: 10, fontSize:16}
})
export default styles