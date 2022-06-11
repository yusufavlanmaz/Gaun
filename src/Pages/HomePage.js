import React from 'react';
import {SafeAreaView,Text,FlatList,View,StyleSheet,StatusBar,TouchableOpacity,Image,Dimensions,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import database, { firebase } from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import auth from '@react-native-firebase/auth';
function HomePage({navigation,formValues,selectedTeam,users}){
    const [ıOnClik,setIonClik] = React.useState(false);
    const [boOnClik,setBonClik] = React.useState(false)
    const teamdatas = 'İkinciöğretim'
    const teamdata = 'Birinciöğretim'
    const [userSessins,setUserSessions]= React.useState();
    const [contentList,setContentList] = React.useState([]);
    const [userTeams,setUserTeams] = React.useState({});
    
     React.useEffect(()=>{
        handleAuth(),
        getData()
    },[]);
    function handleAuth(){
       auth().onAuthStateChanged(async user =>{
            console.log('handkeAuth userteam:',user.userteam)
            setUserSessions(user.uid);
        });
    }
    
    function ChatOnPage(jameson,userid,team){
        if(jameson == teamdatas ){
            auth().onAuthStateChanged(async user =>{
                if(user.uid === userid){
                    console.log('İkinci Öğretim öğrencisi')
                    setIonClik(true);
                }
            });
        }
        else if(team == teamdata ){
            auth().onAuthStateChanged(async user =>{
                if(user.uid === userid){
                    console.log('İkinci Öğretim öğrencisi')
                    setBonClik(true);
                }
            });
        }
        else{
            console.log('ikinci öğretim değil')
            console.log('jamess: '+jameson)
            console.log(userid)
        }
           
    }
   
    function ChatOnPageBö(team,userid){

        if(team == teamdata && userSessins == userid){
            
            setBonClik(true)
            console.log('setbaşarılıBö')
            
        }
        else{
           
            console.log('setbaşarısızBö')
           
        }
        
    }

    function IonClik(){
        if(ıOnClik == true){
            
            console.log('İkinci Öğretim öğrencisi')
            navigation.navigate('MessageIo')
        }else{
            Alert.alert('İkinci öğretim değilsiniz')
        }
    }

    function BoOnclik (){
        if (boOnClik == true) {
            
            console.log('Birinci öğretim öğrencisi')
            navigation.navigate('LessonScreen')
        } else {
            Alert.alert('Birinci öğretim değilsiniz')
        }
    }
    
    
        
   
  async function getData (){
   try {
       firebase.database()
        .ref('users/')
        .on('value',snapshot => { 
           const contentData = snapshot.val();
           if(!contentData){
               return;
           }
           const parsedData = parseContentData(contentData);
           setContentList(parsedData);
        const listmi = [];
        {parsedData.map((users)=>(
            listmi.push({
                userid:users.id,
                jameson:users.userteam,
                team:users.userteamI,
                harrik:users.username,
            })
            
        ))}
        let c = listmi;
        setContentList(listmi);
        for(let i=0;i<c.length;i++){
           
            
            ChatOnPage(c[i].jameson,c[i].userid,c[i].team);
            ChatOnPageBö(c[i].team,c[i].userid,c[i].jameson);
            //console.log('listmi :'+c[i])
          
            console.log('data :'+c[i].team); //gelen datayı burda parse yaptık.
            console.log('data 2:'+c[i].jameson);
            console.log('+-------------------------------------------------------------------');

           
            //console.log('data s2:'+c[i].team);
           // console.log(contentList)
            
            
            
        }

       }
      
       );
  } catch (error) {
      null;
  } 
   }
    
  
   
    

    
   // if(contentList.userteam == 'İkinciöğretim'){
     //   ChatOnPageBö
       //console.log('İkinciöğretim öğrencisi')
     //}
   
    function ObsOnPage(){
        navigation.navigate('ObsPage')
    }
    function UzemOnPage(){
        navigation.navigate('UzemPage')
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
               
            
            <TouchableOpacity style={styles.chat} onPress={IonClik}>
                <LinearGradient  style={styles.chat_back} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4','#373B44']} >    
                    <Image source={require('../../assets/weather.png')} style={styles.chat_ımages} />
                    <Text style={styles.chats_text}>Bilgisayar Prog. (İÖ) </Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chat2} onPress={BoOnclik} >
                <LinearGradient  style={styles.chat_back} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4','#373B44']}>
                    <Image source={require('../../assets/dark-mode.png')} style={styles.chat_ımage} />
                    <Text style={styles.chats_text}>Bilgisayar Prog.(BÖ)</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chat3} onPress={ObsOnPage}>
                <LinearGradient  style={styles.chat_back} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4','#373B44']}>
                    <Image source={require('../../assets/mortarboard.png')} style={styles.chat_ımage} />
                    <Text style={styles.chats_text2}>OBS</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chat4} onPress={UzemOnPage}>
                <LinearGradient  style={styles.chat_back} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4','#373B44']}>
                    <Image source={require('../../assets/online-learning.png')} style={styles.chat_ımage} />
                    <Text style={styles.chats_text2}>Uzem</Text>
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
    chat4:{
        height:150,
        width:150,
        position:'absolute',
        left:20,
        top:460,
        alignItems:'center',
        borderRadius:10,
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
      color:'white'  ,
    },
    chats_text2:{
        paddingTop:20,
        fontSize:20,
        color:'white'  ,
      },
    chat_ımage:{
        marginTop:5,
        width:100,
        height:100,
        
    },
    chat_ımages:{
        marginTop:10,
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