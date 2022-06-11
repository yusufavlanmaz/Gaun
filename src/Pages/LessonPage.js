import React from 'react';
import {View,StyleSheet,FlatList,Dimensions,StatusBar} from 'react-native';
import FloatingButton from '../components/FloatingButton/FloatingButton'
import ContentInputModal from '../modal/ContentInputModal/ContentInputModal';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../components/MessageCard';
import LinearGradient from 'react-native-linear-gradient';
function MessagesIo(){
const [inputModalVisible,setInputModalVisible] = React.useState(false);
const [contentList,setContentList] = React.useState([]);

      React.useEffect(()=>{
          database()
          .ref('message(Bö)/')
          .on('value',snapshot => {

              const contentData = snapshot.val();
              if(!contentData){
                  return;
              }
              const parsedData = parseContentData(contentData);
              setContentList(parsedData);
          }

          );
      },[])  

    function handleModalToggle(){
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content){
      handleModalToggle();
      sendContent(content);
    }
    function sendContent(content){
      const userMail = auth().currentUser.email
      const contentObject = {
      text:content,
      username:userMail.split('@')[0],
      date: new Date().toISOString(),

      };
        database().ref('message(Bö)/').push(contentObject)

    };
    const renderContent =({item}) => <MessageCard message={item} />


   return (
    <View style={styles.Container}>
    <LinearGradient  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}> 
        <StatusBar backgroundColor='#373B44'/>
         </LinearGradient>
     
           
              <View style={styles.flatlist}>
                <FlatList 
                
                data={contentList} 
                renderItem={renderContent} />
                </View>
            
            <ContentInputModal
            visible={inputModalVisible}
            onClose={handleModalToggle}
            onSend={handleSendContent}
            />
           <FloatingButton onPress={handleModalToggle}  />

         </View>
    )
}
export default MessagesIo;
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#373B44'
    },
    Send_Button:{
        position:'absolute',
        width:75,
        height:75,
        bottom:20,
        right:20,
        alignItems:'center',
        borderRadius:100,
        justifyContent:'center',
        backgroundColor:'#373B44'
    },
    flatlist:{
      //  height:Dimensions.get('screen').height/1.5
    }
})