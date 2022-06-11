import React,{createContext} from 'react';
import {SafeAreaView,Text} from 'react-native';
import auth from '@react-native-firebase/auth';
export  const AuthContext = createContext();
export const AuthContext = ({childern}) =>{
    const [user,setUser] = React.useState(null);
    return(
        <AuthContext.Provider
        value={{
            user,
            setUser,
            register:async (email,password)=>{
                try {
                    await auth().createUserWithEmailAndPassword(email,password);

                } catch (error) {
                    console.log(error)                    
                }
            }

        }}
        >

        </AuthContext.Provider>
    )
}