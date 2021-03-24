import * as React from 'react';
import Route from './Route';
import {ActivityIndicator, View, Text } from 'react-native'
import { useState, useEffect, createContext} from 'react';
import Loading from './src/screens/Loading'
import SplashScreen from './src/screens/Splash'

function App() {
  
  const [isLoading, setisLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 1000);
  }, [])

  const start = ()=>{
    setIsStarted(true)
  }
  return (
    <>
      {
        isLoading ? 
        <View style={{flex:1, justifyContent: "center", alignItems:"center", color:'black'}}>
          <Loading/> 
        </View>
        :
        <>
        {isStarted == false ?
        <SplashScreen start = {start}/> :
        <Route/>
        }

         
        </>
       
      }
    </>
  );
}
export default App;