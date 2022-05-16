import React from 'react';
import {SafeAreaView,Text,View,Image,TouchableOpacity,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../components/Input/input';
function MembemSignScreenTeacher(){

    return( 
        <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4']} style={styles.container}>
           
           
            <Image style={styles.logo} source={require('../../assets/gaunlogo2.png')} />
                  <View style ={styles.input_box}>
                      <Input placeholder="Kullanıcı Adı" />
                      <Input placeholder="Şifre" />
                  </View>
            <TouchableOpacity style={styles.button_Sign}>
              <LinearGradient style={styles.button_Sign2} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}> 
                   <Text style={styles.button_text}>Giriş Yap</Text>
              </LinearGradient>
            </TouchableOpacity>


            </LinearGradient>
    )
}
export default MembemSignScreenTeacher;
const styles = StyleSheet.create({
    logo:{
        width:150,
        height:150,
        margin:10,
        alignSelf:'center',
       
        marginTop:120,
    },
    container:{
        flex:1
    },
    button_Sign:{
        alignSelf:'center',
        
        width:300,
        height:65,
        alignItems:'center',
        borderRadius:10,
        marginTop:50,
    },
    button_Sign2:{
        alignSelf:'center',
        
        width:300,
        height:65,
        alignItems:'center',
        borderRadius:10,
       
    },
    button_text:{
        paddingTop:20,
        color:'white',
        fontWeight:'bold'

    },
    input_box:{
        marginTop:50,
    },
})