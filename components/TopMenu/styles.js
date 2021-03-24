import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
top: {
    position: 'absolute',
    top: 30,
    zIndex: 100,
    flexDirection: 'row',
    width: '100%',
    // paddingHorizontal: 15,
  },
  menu: {
    width: 25, 
    height: 25,
    resizeMode: 'contain',
  },
  appName: {
    marginLeft: 30,
    fontSize: 22,
    color: 'white'
  }

})

export default styles;