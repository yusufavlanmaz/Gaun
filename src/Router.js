import React from 'react';
import {SafeAreaView,Text,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Pages/Welcome';
import MemberSign from './Pages/MemberLogin';
import MemberSignTeacher from './Pages/MemberSignTeacher';
import MemberSubmit from './Pages/MemberSubmit';
import FlashMessage from 'react-native-flash-message';
import HomePage from './Pages/HomePage';
import MessagesIo from './Pages/Messages';
import ObsPager from './Pages/ObsPage';
import MemberSignUp from './Pages/MemberSignup';
import auth from '@react-native-firebase/auth';
import Icon from  'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();

function Router(){
  const [userSession,setUserSession] = React.useState();
  React.useEffect(()=> {
    auth().onAuthStateChanged((user)=>{
      setUserSession(!!user);
    });
  },[]);

  const AuthStack = ()=>{
    return(
      <Stack.Navigator>
        <Stack.Screen name='MemberSignScreen' component={MemberSign}
      options={{
        headerShown:false,
      }} />
      </Stack.Navigator>
    )
  }
  
  return(
  <NavigationContainer>
    <Stack.Navigator>
    {
      !userSession ? 
      <Stack.Screen name='MemberSignScreen' component={MemberSign}
      options={{
        headerShown:false,
      }} />
      : 
      <Stack.Screen
      name='HomePage' component={HomePage}
        options={{
          headerStyle:{
            backgroundColor:'#373B44'
          },
          headerTintColor:'white',
          headerTitleAlign:'center',
          headerRight:()=>(
           <Icon name='logout'
           size={30}
           color='white'
           onPress={()=> auth().signOut() } /> 
          )

      }} 
      
      />
    }
    
      <Stack.Screen name='WelcomeScreen' component={Welcome} 
        options={{
        headerShown:false,
      }} />
      
      <Stack.Screen
      name='MembemSignTeacher' component={MemberSignTeacher}
      options={{
      headerShown:false,
    }} 
    
    />
    <Stack.Screen
    //name='SignPage' component={MemberSubmit}
    //  options={{
    //  headerShown:false,
   // }} 
      name='SignPage' component={MemberSignUp}
      options={{
        headerShown:false,
      }}
    />
   
     <Stack.Screen
    name='MessageIo' component={MessagesIo}
      options={{
           backgroundColor:'#4286f4',
           title:'Bilgisayar Prog(İÖ)',
           gestureEnabled:true,
           gestureDirection:"horizontal",
           headerMode:"float",
           headerLeft:null,
           headerTitleAlign:'center',
           headerTintColor:'white',
           headerStyle:{
           backgroundColor:'#373B44'
         }

    }} 
    
    />
    <Stack.Screen
    name='ObsPage' component={ObsPager}
      options={{
          headerShown:false,
          

    }} 
    
    />
    </Stack.Navigator>
    
    <FlashMessage position="top" />
    
  </NavigationContainer>
  )
}
export default Router;