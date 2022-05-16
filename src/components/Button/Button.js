import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import styles from './Button.style';
import LinearGradient from 'react-native-linear-gradient';
const ButtonOpacity = ({text,onPress,})=>{
    return(
        <View style={styles.container} >
            <TouchableOpacity onPress={onPress}>  
            <LinearGradient style={styles.button_Sign2} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y:2.7}}  colors={['#373B44','#4286f4','#373B44']}> 
                  <Text style={styles.text}>{text}</Text>
           
            </LinearGradient>
            
            </TouchableOpacity>
        </View>
    )
}
export default ButtonOpacity;