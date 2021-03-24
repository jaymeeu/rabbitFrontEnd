import React, {useState} from 'react';
import {Text, Button,Alert, StyleSheet, TextInput,View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from 'formik';
import Axios from 'axios';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

const server = 'http://192.168.43.190:3000';
// const server = 'http://192.168.0.94:3000';
const digitOnly = /^\d+$/
const doeSchema = yup.object({
    checkPreg: yup.string()
    .required("Required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    addNest: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    expectedDelivery: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    actualDelivery: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    removeNest: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    rebreed: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),
})

const buckSchema = yup.object({
    rebreed: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),
})

const kitSchema = yup.object({
    startWeaning: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    endWeaning: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    ready: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    seperateG: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    seperateC: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),

    readyB: yup.string()
    .required("This field is required")
    .matches(digitOnly, 'Number is required')
    .max(2, 'Maximum of two digit required'),
})

export default function EditTracker(props){
    const navigation = useNavigation()
    const {rabbitForm, closeModal} = props ;
    const form = rabbitForm;
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
           {
               form == 'Doe' ?
                    <Formik
                    initialValues={{ checkPreg: '', addNest:'', expectedDelivery:'', actualDelivery:'', removeNest:'', rebreed:''}}
                    validationSchema={doeSchema}
                    onSubmit={(values) =>{
                        values.form = form;
                        Axios.put(`${server}/tracker`, values)
                        .then((response)=>{
                          Alert.alert("Success", "Doe Tracker updated")
                          navigation.navigate("Trackers");
                        });
                        
                     }}>
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        
                        <View style={styles.body}>
                        
                            <View style={styles.div}>
                                <Text style={styles.text}>Check For Pregnancy</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day'
                                    onChangeText={handleChange('checkPreg')}
                                    value={values.checkPreg}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('checkPreg')}
                                />
                                
                            </View>
                            <Text style={styles.err}>{ touched.checkPreg && errors.checkPreg}</Text>

                            <View style={styles.div}>
                                <Text style={styles.text}>Add Nest Box</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day'
                                    onChangeText={handleChange('addNest')}
                                    value={values.addNest}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('addNest')}
                                />
                            </View>
                            <Text style={styles.err}>{touched.addNest && errors.addNest}</Text>
                            
                            <View style={styles.div}>
                                <Text style={styles.text}>Expected Delivery</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day'
                                    onChangeText={handleChange('expectedDelivery')}
                                    value={values.expectedDelivery}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('expectedDelivery')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.expectedDelivery && errors.expectedDelivery}</Text>

                            <View style={styles.div}>
                                <Text style={styles.text}>Actual Delivery Date</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day'
                                    onChangeText={handleChange('actualDelivery')}
                                    value={values.actualDelivery}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('actualDelivery')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.actualDelivery && errors.actualDelivery}</Text>

                            <View style={styles.div}>
                                <Text style={styles.text}>Remove Nest Box</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day'
                                    onChangeText={handleChange('removeNest')}
                                    value={values.removeNest}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('removeNest')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.removeNest && errors.removeNest}</Text>

                            <View style={styles.div}>
                                <Text style={styles.text}>Ok to Rebreed</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day'
                                    onChangeText={handleChange('rebreed')}
                                    value={values.rebreed}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('rebreed')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.rebreed && errors.rebreed}</Text>
                            <Button title="submit" color='maroon' onPress={handleSubmit}/> 
                            <TouchableOpacity onPress={handleSubmit}>
                                <View style={styles.btn}>
                                    <Ionicons 
                                        style={{flex:1, textAlign:"right", paddingHorizontal:10}}
                                        name = 'checkmark-done-outline'
                                        size={25}
                                        color="#2c9dd1"
                                    />
                                    <Text style={{flex:1}}>Submit</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    )}
                    </Formik>
                :

                form == 'Buck' ?
                
                    <Formik
                    initialValues={{  rebreed:''}}
                    validationSchema={buckSchema}
                    onSubmit={(values) =>{
                        values.form = form;
                        Axios.put(`${server}/tracker`, values)
                        .then((response)=>{
                        });
                        Alert.alert("Success", "Buck Tracker updated")
                          navigation.navigate("Trackers");
                    }}>
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        
                        <View style={styles.body}>
                            <View style={styles.div}>
                                <Text style={styles.text}>Ok to Rebreed</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day after'
                                    onChangeText={handleChange('rebreed')}
                                    value={values.rebreed}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('rebreed')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.rebreed && errors.rebreed}</Text>
                            <Button title="submit" color='maroon' onPress={handleSubmit}/> 

                        </View>
                    )}
                    </Formik>
                :
                    <Formik
                    initialValues={{ startWeaning:"", endWeaning:"", ready:"", seperateG:"",seperateC:"",readyB:""}}
                    validationSchema={kitSchema}
                    onSubmit={(values) =>{
                        values.form = form;
                        Axios.put(`${server}/tracker`, values)
                        .then((response)=>{
                        });
                        Alert.alert("Success", "Kit Tracker updated")
                          navigation.navigate("Trackers");
                    }}>
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        
                        <View style={styles.body}>                    
                            <View style={styles.div}>
                                <Text style={styles.text}>Start Weaning</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day after'
                                    onChangeText={handleChange('startWeaning')}
                                    value={values.startWeaning}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('startWeaning')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.startWeaning && errors.startWeaning}</Text>

                            <View style={styles.div}>
                                <Text style={styles.text}>End Weaning</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day after'
                                    onChangeText={handleChange('endWeaning')}
                                    value={values.endWeaning}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('endWeaning')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.endWeaning && errors.endWeaning}</Text>

                            <View style={styles.div}>
                                <Text style={styles.text}>Ready For Sales</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day after'
                                    onChangeText={handleChange('ready')}
                                    value={values.ready}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('ready')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.ready && errors.ready}</Text>

                            <View style={styles.div}>
                                <Text style={styles.text}>Seperate By Gender</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day after'
                                    onChangeText={handleChange('seperateG')}
                                    value={values.seperateG}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('seperateG')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.seperateG && errors.seperateG}</Text>

                            <View style={styles.div}>
                                <Text style={styles.text}>Seperate By Cage</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day after'
                                    onChangeText={handleChange('seperateC')}
                                    value={values.seperateC}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('seperateC')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.seperateC && errors.seperateC}</Text>

                            <View style={styles.div}>
                                <Text style={styles.text}>Ready to Breed</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter number of day after'
                                    onChangeText={handleChange('readyB')}
                                    value={values.readyB}
                                    keyboardType="numeric"
                                    onBlur={handleBlur('readyB')}
                                />
                            </View>
                            <Text style={styles.err}>{ touched.readyB && errors.readyB}</Text>
                            <Button title="submit" color='maroon' onPress={handleSubmit}/>
                        </View>
                    )}
                    </Formik>
                }
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    div:{flexDirection:'row'},
    input:{
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius:6,
        borderWidth:1,
        borderColor:'#f2f2f2',
    },
    text:{
        flex: 1,
        paddingHorizontal:20 ,
        paddingVertical:10,
        borderRadius:6,
        borderWidth:1,
        borderColor:'#f2f2f2',
    },
    err:{
        textAlign:'right',
        color: 'maroon',
        marginVertical:5,
        fontWeight: 'bold'
    }
})