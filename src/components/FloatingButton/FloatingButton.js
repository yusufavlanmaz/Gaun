import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './FloatingButton.style';
import LinearGradient from 'react-native-linear-gradient';

const FloatingButton =({onPress})=>{
    return(
<LinearGradient style={styles.Send_Button}  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}> 
        <TouchableOpacity  onPress={onPress}>
            <Icon name="send" color='white' size={30} />
        </TouchableOpacity>
        </LinearGradient>
    )
}
export default FloatingButton;