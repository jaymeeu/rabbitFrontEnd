import * as React from 'react';
import Home from './src/screens/Home/Home';
import Farm from './src/screens/Farm/Farm';
import TrackerHome from './src/screens/Tracker/TrackerHome';
import TrackerDoe from './src/screens/Tracker/TrackerDoe';
import TrackerBuck from './src/screens/Tracker/TrackerBuck';
import TrackerKit from './src/screens/Tracker/TrackerKit';
import TrackerWeaner from './src/screens/Tracker/TrackerWeaner';
import Report from './src/screens/Report/Report';
import Todo from './src/screens/Report/Todo';
import DailyReport from './src/screens/Report/DailyReport';
import SalesReport from './src/screens/Report/SaleReport';
import SalesDetails from './src/screens/Report/SalesDetails';
import RabbitStat from './src/screens/Report/RabbitStat';
import About from './src/screens/About/About';
import DoeForm from './components/Form/DoeForm';
import DoeBreedForm from './components/Form/DoeBreedForm';
import Doe from './src/screens/Does/Doe';
import DoeDetails from './src/screens/Does/DoeDetails';
import Buck from './src/screens/Buck/Buck';
import BuckForm from './components/Form/BuckForm';
import BuckDetails from './src/screens/Buck/BuckDetails';
import MedicalDetails from './src/screens/Buck/medicalDetails';
import BuckBreedForm from './components/Form/BuckBreedForm';
import Kitten from './src/screens/Kitten/Kitten';
import KittenForm from './components/Form/KittenForm';
import KittenDetails from './src/screens/Kitten/KittenDetails';
import Weaner from './src/screens/Weaner/Weaner';
import WeanerForm from './components/Form/WeanerForm';
import WeanerDetails from './src/screens/Weaner/WeanerDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DoePreg from './src/screens/Does/DoePreg';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SaleDetails from './src/screens/Report/SalesDetails';

const Top_Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function Route() {
  createDoeTop_Tab = () => {
  return <Top_Tab.Navigator>
    <Top_Tab.Screen name="Doe Details" component={DoeDetails} />
    <Top_Tab.Screen name="Medication" component={DoePreg} />
  </Top_Tab.Navigator>
  }
  createWeanersStack = () => 
  <Stack.Navigator>
    <Stack.Screen name ="Weaner" component={Weaner} options={{headerShown: false}}/>
    <Stack.Screen name ="Weaner Details" component={WeanerDetails} options={{headerShown: false}}/>
    <Stack.Screen name ="WeanerForm" component={WeanerForm} options={{headerShown: false}}/>
    <Stack.Screen name ="medicalDetails" component={MedicalDetails} options={{headerShown: false}}/>
  </Stack.Navigator>

  createKittensStack = () => 
  <Stack.Navigator>
    <Stack.Screen name ="Kitten" component={Kitten} options={{headerShown: false}}/>
    <Stack.Screen name ="Kitten Details" component={KittenDetails} options={{headerShown: false}}/>
    <Stack.Screen name ="KittenForm" component={KittenForm} options={{headerShown: false}}/>
    <Stack.Screen name ="medicalDetails" component={MedicalDetails} options={{headerShown: false}}/>
  </Stack.Navigator>

  createBucksStack = () => 
  <Stack.Navigator>
    <Stack.Screen name ="Buck" component={Buck} options={{headerShown: false}}/>
    <Stack.Screen name ="Buck Details" component={BuckDetails} options={{headerShown: false}}/>
    <Stack.Screen name ="BuckForm" component={BuckForm} options={{headerShown: false}}/>
    <Stack.Screen name ="BuckBreedForm" component={BuckBreedForm} options={{headerShown: false}}/>
    <Stack.Screen name ="medicalDetails" component={MedicalDetails} options={{headerShown: false}}/>
  </Stack.Navigator>

  createDoesStack = () => 
  <Stack.Navigator>
    <Stack.Screen name ="Doe" component={Doe} options={{headerShown: false}}/>
    <Stack.Screen name ="Doe Details" component={DoeDetails} options={{headerShown: false}} />
    <Stack.Screen name ="DoePreg" component={DoePreg} options={{headerShown: false}}/>
    <Stack.Screen name ="DoeForm" component={DoeForm} options={{headerShown: false}}/>
    <Stack.Screen name ="DoeBreedForm" component={DoeBreedForm} options={{headerShown: false}}/>
    <Stack.Screen name ="medicalDetails" component={MedicalDetails} options={{headerShown: false}}/>
  </Stack.Navigator>

  createFarmStack = () =>
  <Stack.Navigator>
    <Stack.Screen name ="Farm" component={Farm} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
    <Stack.Screen name ="Does" children={createDoesStack} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
    <Stack.Screen name ="Bucks" children={createBucksStack} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
    <Stack.Screen name ="Weaners" children={createWeanersStack} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
    <Stack.Screen name ="Kittens" children={createKittensStack} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
  </Stack.Navigator>
  
  createTrackerStack = ()=>
  <Stack.Navigator>
    <Stack.Screen name ="Trackers" component={TrackerHome} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
    <Stack.Screen name ="Doe Tracker" component={TrackerDoe} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
    <Stack.Screen name ="Buck Tracker" component={TrackerBuck}options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
    <Stack.Screen name ="Kit Tracker" component={TrackerKit}options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
    <Stack.Screen name ="Weaner Tracker" component={TrackerWeaner}/>
  </Stack.Navigator>

createrReportStack = () =>
<Stack.Navigator>
  <Stack.Screen name ="Report" component={Report} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
  <Stack.Screen name ="Todo" component={Todo} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
  <Stack.Screen name ="Activity Report" component={DailyReport} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
  <Stack.Screen name ="Sale Report" component={SalesReport} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
  <Stack.Screen name ="Rabbit Stat" component={RabbitStat} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
  <Stack.Screen name ="Sale Details" component={SalesDetails} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
</Stack.Navigator>

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="My Farm" children={createFarmStack} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
        <Drawer.Screen name="Tracker" children={createTrackerStack} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
        <Drawer.Screen name="Report" children={createrReportStack} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
        <Drawer.Screen name="About" component={About} options={{headerStyle:{backgroundColor:'#008080'}, headerTintColor:'white'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Route;