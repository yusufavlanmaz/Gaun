import React from 'react';
import {View,Text,TextInput} from 'react-native';
import styles from './input.style';
function Input({label,placeholder,value,onType,isSecure}){
    return(
        <View style={styles.container}>
           <TextInput 
           autoCapitalize='none'
           value={value}
           onChangeText={onType}
           secureTextEntry={isSecure} 
           style={styles.input_container}
           placeholder={placeholder}  />
           
           
            
        </View>
    )
}
export default Input; 