import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

  const { type, content,icon, onPress } = props;

  const backgroundColor = type === 'primary' ? '#02dee1' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#008080' : '#171A20';

  return (

    <View style={styles.container}> 
    <TouchableOpacity>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: textColor}]}>{icon}{"  "}{content}</Text>
      </Pressable>
    </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
