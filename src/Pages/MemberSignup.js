import React,{useState} from 'react';
import {SafeAreaView,Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Input from '../components/Input/input';
//import ButtonOpacity from '../components/Button/Button';
import LinearGradient from 'react-native-linear-gradient';
import auth, { firebase } from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageparser from '../../utils/authErrorMessageparser';
import SelectBox from 'react-native-multi-selectbox'



const MemberSignUp =({navigation})=>{
  function handleLogin(){
    navigation.goBack();
}
  
const initialFormValues = {
    usermail:'',
    password:'',
    repassword:'',
    selectedTeam:'',
    username:'',
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
  
   await firebase.auth().createUserWithEmailAndPassword(
       formValues.usermail+'@hotmail.com',
       formValues.repassword+'0', 
   )
   
   .then((res)=>{
     
    firebase.database().ref('users/'+ res.user.uid).set({
      username:formValues.username,
      userteam:formValues.selectedTeam
     })
    
  })

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

    const K_OPTIONS = [
        {
          item: 'Bilgisayar Prog.(İÖ)',
         
        },
        {
          item: 'Bilgisayar Prog.(BÖ)',
          
        },
       
      ]

      const [selectedTeam, setSelectedTeam] = useState('');
      
   
    return(

      <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4']}  style={styles.container}>

        <View style={{ margin: 30 }}>
   
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
                        onType={handleChange('username')}
                        value={values.username}
                        placeholder="Kullanıcı adı"
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
                          <SelectBox
                                label="Bölümünüzü Seçiniz"
                                options={K_OPTIONS}
                                value={selectedTeam}
                                onChange={onChange()}
                                hideInputFilter={true}
                                inputPlaceholder=""
                                backgroundColor='white'
                                optionsLabelStyle={{
                                  
                                  color:'white'
                                }}
                                selectedItemStyle	={{
                                  color:'white'
                                }}
                                labelStyle={{
                                  color:'white'
                                }}
                               
                              />
                            

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
      
      
      <View style={{ height: 40 }} />
     
    </View>
    </LinearGradient>
    )
    
      function onChange() {
        return (val) => setSelectedTeam(val)
      }
}
export default MemberSignUp;
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