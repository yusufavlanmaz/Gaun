import React,{useState} from 'react';
import {SafeAreaView,Text,StyleSheet,View,TouchableOpacity,Image,ActivityIndicator,StatusBar,Alert} from 'react-native';
import Input from '../components/Input/input';
import ButtonOpacity from '../components/Button/Button';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageparser from '../../utils/authErrorMessageparser';
function MemberSign({navigation}){


    const [loading,setLoading] = useState(false);
    
    // kayıt ekranı
    function HandleSignUp(){
        navigation.navigate('SignPage')
    }


    // Hesap giriş 
    const initialFormValues = {
        usermail:'',
        password:'',
        username:'',
    };
    
 async   function handleFormSubmit(FormValues){
       try {
          setLoading(true);
           await auth().signInWithEmailAndPassword(
               FormValues.usermail+'@hotmail.com',
               FormValues.password+'0',
               
           )
           
          
           
          
           setLoading(false);
           navigation.navigate('HomePage')
       } catch (error) {
           console.log(error)
           showMessage({
               message: authErrorMessageparser(error.code),
               type:'info',
           });
          setLoading(false);
       }
    }
   

    return(
        <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4']}  style={styles.container}>
            <StatusBar backgroundColor='#373B44' />
            <Image source={require('../../assets/gaunlogo2.png')} style={styles.image}/>
            <View style ={styles.input_box}>
                <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
                 {({values,handleChange,handleSubmit}) =>(
                    
                    <>
                     
                            <Input 
                            onType={handleChange('usermail')}
                            value={values.usermail}
                            placeholder="Öğrenci numarası" />
                            <Input
                            onType={handleChange('password')}
                            value={values.password}
                            placeholder="Şifre"
                            isSecure />
                          
                       <TouchableOpacity style={styles.button_Login} onPress={handleSubmit} loading={loading}>
                             <LinearGradient style={styles.button_Sign2} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}> 
                                     <Text style={styles.button_text}>Giriş Yap</Text>
                             </LinearGradient>
                      </TouchableOpacity>


                     </>
                         )}
                </Formik>

            </View>

           

            <TouchableOpacity style={styles.button_Sign} onPress={HandleSignUp}>
                     <LinearGradient style={styles.button_Sign2} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}> 
                          <Text style={styles.button_text}>Kayıt ol</Text>
                     </LinearGradient>
            </TouchableOpacity>

        </LinearGradient>
    )
}
    export default MemberSign;
    const styles = StyleSheet.create({
        container:{
            backgroundColor:'gray',
            flex:1,
        },
        input_box:{
            marginTop:50,
        },
        button_Login:{
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
        image:{
            alignSelf:'center',
            marginTop:120,
            width:150,
            height:150,
        },
        button_Sign:{
            alignSelf:'center',
            
            width:300,
            height:65,
            alignItems:'center',
            borderRadius:10,
            marginTop:20,
        },
        
    })