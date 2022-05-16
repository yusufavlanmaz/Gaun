import React from 'react';
import {TextInput ,View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './ContentInputModal.style';
import ButtonOpacity from '../../components/Button/Button';
function ContentInputModal({visible,onClose,onSend}){
    const [text,setText] = React.useState('');
    function handleSend(){
        if(!text){
            return;
        }
        onSend(text);
        setText(null);
    }
    


   return (
   <Modal isVisible={visible}
      style={styles.modal}
      onSwipeComplete={onClose}
      onBackdropPress={onClose} 
      onBackButtonPress={onClose}
    >
       <View style={styles.Container}>
           <TextInput style={styles.input} placeholder='Birşeyler Yaz' placeholderTextColor='#373B44' onChangeText={setText} />
           <View style={styles.button} >
           <ButtonOpacity  text="Gönder" onPress={handleSend} />
           </View>
       </View>
   </Modal>
    );
};
export default ContentInputModal;
