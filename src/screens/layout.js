import { StyleSheet, Dimensions } from 'react-native';
const layout = StyleSheet.create({
    containe: {
      flex: 1,
      backgroundColor: '#008080',
      height: Dimensions.get('window').height,
      width: '100%',
      padding: 0
    },
    container: {
      flex: 1,
      backgroundColor: '#008080',
      // height: Dimensions.get('window').height,
      width: '100%',
      padding: 0
    },
    loader: {
      flex: 1,
      backgroundColor: '#008080',
      height: Dimensions.get('window').height,
      width: '100%',
      justifyContent: 'center',
    },
    TopMenu: {width: "100%", height: 85, backgroundColor: '#008080'},
    TopMenu1: {width: "100%", height: 12, backgroundColor: '#35B5AC'},
    BodyView: {flex: 1, paddingBottom:150, width: "100%", height: Dimensions.get('window').height, backgroundColor: '#008080', padding: 15},
    BodyView1: {width: "100%", height: Dimensions.get('window').height, backgroundColor: '#008080', padding: 0}
  });
  export default layout;