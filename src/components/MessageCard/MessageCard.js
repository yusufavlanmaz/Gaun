import React from 'react';
import {View,Text} from 'react-native';
import styles from './MessageCard.style';
import { formatDistance, parseISO} from 'date-fns';
import LinearGradient from 'react-native-linear-gradient';
import {tr} from 'date-fns/locale';
const MessageCard = ({message}) =>{
        const formattedDate = formatDistance(parseISO(message.date),new Date(),{
            addSuffix:true,
            locale:tr,
        });

    return(
        <View  >
            <LinearGradient style={styles.continer} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}> 
            <View style={styles.header} >
                
                <Text style={styles.username} >{message.username}</Text>
              
                
                <Text style={styles.date}>{formattedDate}</Text>
                
            </View>
            <Text style={styles.text}>{message.text}</Text>
            </LinearGradient>
        </View>
    )
}
export default MessageCard;