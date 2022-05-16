import React from 'react';
import {SafeAreaView,Text,StyleSheet,Image,StatusBar,ImageBackground,View} from 'react-native';
import ButtonOpacity from '../components/Button/Button';
import LinearGradient from 'react-native-linear-gradient';


function Welcome({navigation}){
    function goToMemberSign(){
        navigation.navigate('MemberSignScreen');
    }
    function goToMemberSignTeacher(){
        navigation.navigate('MembemSignTeacher');
    }
    return(

            <ImageBackground source={require('../../assets/welcome.jpeg')} style={styles.welcomeback} >
            <StatusBar backgroundColor="#373B44"/>
            <View style={styles.button_container}>
           
            <ButtonOpacity text='Öğrenci Girişi' onPress={goToMemberSign} />
            <ButtonOpacity text='Akademisyen Girişi' onPress={goToMemberSignTeacher} />
            </View>
            </ImageBackground>
        
    )
}
export default Welcome;
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        marginTop:120,
        alignSelf:'center',
        width:150,
        height:150,
    },
    welcomeback:{
        flex:1,
    },
    button_container:{
        marginTop:370,
    }
})