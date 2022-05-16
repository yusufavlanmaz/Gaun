import React from 'react';
import {SafeAreaView,Text,StyleSheet,View,TouchableOpacity,Image} from 'react-native';
import Input from '../components/Input/input';
//import ButtonOpacity from '../components/Button/Button';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageparser from '../../utils/authErrorMessageparser';
function MemberSubmit({navigation}){
    function handleLogin(){
        navigation.goBack();
    }
    const initialFormValues = {
        usermail:'',
        password:'',
        repassword:'',
    };
   async function handleFormSubmit(formValues){
        if (formValues.password !== formValues.repassword){
            showMessage({
                message:'Şifreler uyuşmuyor',
                type:'danger',
            })
            return;
        }
      try {
         await  auth().createUserWithEmailAndPassword(
             formValues.usermail+'@hotmail.com',
             formValues.repassword,
         );
         showMessage({
             message:'kullanıcı oluştutruldu',
             type:'success',
         });
         navigation.navigate('MemberSignScreen');
      } catch (error) {
          showMessage({
              message: authErrorMessageparser(error.code),
              type:'danger',
          })
      }
    };
    return(
        <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4']}  style={styles.container}>
            <Image source={require('../../assets/gaunlogo2.png')} style={styles.image}/>
            <View style ={styles.input_box}>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
                
                {({values,handleChange,handleSubmit}) =>( 
                     <>
                       <Input 
                        onType={handleChange('usermail')}
                        value={values.usermail}
                        placeholder="Öğrenci numarası"
                         />
                        <Input
                         onType={handleChange('password')}
                         value={values.password}
                         placeholder="Şifre" 
                         isSecure/>
                        <Input
                        onType={handleChange('repassword')}
                        value={values.repassword}
                        placeholder="Şifre tekrar"
                        isSecure />
 


                    <TouchableOpacity style={styles.button_Sign} onPress={handleSubmit}>
                        <LinearGradient style={styles.button_Sign2} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}> 
                            <Text style={styles.button_text}>Kayıt ol</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </>
                )}
            </Formik>
            </View>
            
            <TouchableOpacity style={styles.button_Kaydol} onPress={handleLogin}>
              <LinearGradient style={styles.button_Sign2} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}> 
                   <Text style={styles.button_text}>Geri</Text>
              </LinearGradient>
            </TouchableOpacity>


        </LinearGradient>
    )
}
export default MemberSubmit;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        flex:1,
    },
    input_box:{
        marginTop:50,
    },
    button_Sign:{
        alignSelf:'center',
        width:300,
        height:65,
        alignItems:'center',
        borderRadius:10,
        marginTop:20,
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
        marginTop:50,
        width:150,
        height:150,
    },
    button_Kaydol:{
        alignSelf:'center',
        width:300,
        height:65,
        alignItems:'center',
        borderRadius:10,
        marginTop:20,
    },
    
})