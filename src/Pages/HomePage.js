import React from 'react';
import {SafeAreaView,Text,FlatList,View,StyleSheet,StatusBar,TouchableOpacity,Image,Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeSlider from '../components/HomeSlider/HomeSlider';
function HomePage({navigation,formValues,selectedTeam,users}){
    function ChatOnPage(){
        
            navigation.navigate('MessageIo')
           
    
        
    }
    

    
    function ObsOnPage(){
        navigation.navigate('ObsPage')
    }
            const renderData = ({item}) => <HomeSlider  />
    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4']} style={styles.container}>
                <StatusBar backgroundColor='#373B44' />
               <View style={styles.flatList}>
                <FlatList
                    data={renderData}
                    renderItem={renderData}
                    horizontal={true}
                />
                </View>
             

            <View>
               
            
            <TouchableOpacity style={styles.chat} onPress={ChatOnPage}>
                <LinearGradient  style={styles.chat_back} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4','#373B44']} >    
                    <Image source={require('../../assets/messenger.png')} style={styles.chat_ımage} />
                    <Text style={styles.chats_text}>Bilgisayar Prog. (İÖ) </Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chat2}>
                <LinearGradient  style={styles.chat_back} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4','#373B44']}>
                    <Image source={require('../../assets/dersprog.png')} style={styles.chat_ımage} />
                    <Text style={styles.chats_text2}>Dersler</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chat3} onPress={ObsOnPage}>
                <LinearGradient  style={styles.chat_back} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4','#373B44']}>
                    <Image source={require('../../assets/dersprog.png')} style={styles.chat_ımage} />
                    <Text style={styles.chats_text2}>OBS</Text>
                </LinearGradient>
            </TouchableOpacity>

            </View>
            </LinearGradient>
        </SafeAreaView>
    )
}


export default HomePage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    chat2:{
        height:150,
        width:150,
        position:'absolute',
        left:190,
        top:280,
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:10,
    },
    chat:{
        height:150,
        width:150,
        position:'absolute',
        left:20,
        top:280,
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:10,
        
        
    },
    chat3:{
        height:150,
        width:150,
        position:'absolute',
        left:190,
        top:460,
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:10,
        
    },
    chats_text:{
      paddingTop:20,
      fontSize:15,
      color:'black'  ,
    },
    chats_text2:{
        paddingTop:20,
        fontSize:20,
        color:'black'  ,
      },
    chat_ımage:{
        marginTop:5,
        width:100,
        height:100,
        
    },
    chat_back:{
        height:150,
        width:150,
        flex:1,
        alignItems:'center',
        borderRadius:10,
    },
    flatList:{
        position:'absolute',
    },
})