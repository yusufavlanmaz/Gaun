import React,{useState} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Pressable} from 'react-native';
import Input from '../components/Input/input';
//import ButtonOpacity from '../components/Button/Button';
import LinearGradient from 'react-native-linear-gradient';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageparser from '../../utils/authErrorMessageparser';




const MemberSignUp =({navigation})=>{
  function handleLogin(){
    navigation.goBack();
}

const [bırıncıog,setBırıncıOg] = React.useState('');
function setBo(){
setBırıncıOg('Birinciöğretim')
}
const [ıkıncıog,setIkıncıOg] = React.useState('');
function setIo(){
  setIkıncıOg('İkinciöğretim')
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
      userteamI:bırıncıog,
      userteam:ıkıncıog,
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
                        placeholder="Kullanıcı adı"
                        
                         />
                         <Input 
                        onType={handleChange('username')}
                        value={values.username}
                        placeholder="Ad ve Soyad"
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
                            
                              
                              <View style={styles.lıttleButton}>
                              <TouchableOpacity style={styles.ButtonB} onPress={setBo}>
                              <LinearGradient style={styles.ButtonB} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}>
                                  <Text style={styles.button_textB} >Birinci öğretim</Text>
                              </LinearGradient>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.ButtonI} onPress={setIo}>
                              <LinearGradient style={styles.ButtonI} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.7}}  colors={['#373B44','#4286f4','#373B44']}>
                                  <Text style={styles.button_textI} >İkinci öğretim</Text>
                              </LinearGradient>
                              </TouchableOpacity>
                              </View>

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
  lıttleButton:{
    flexDirection:'row',
  },
  ButtonB:{
  //backgroundColor:this.state.backgroundColor,
    width:120,
    height:50,
    borderRadius:10,
    alignItems:'center',
    marginLeft:11,
    
  },
  ButtonI:{
    width:120,
    height:50,
    borderRadius:10,
    alignItems:'center',
    marginLeft:40,
  },
  button_textI:{
    color:'white',
    paddingTop:15,
  },
  button_textB:{
    paddingTop:15,
    color:'white'
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