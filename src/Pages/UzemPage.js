import React from 'react';
import {WebView} from 'react-native-webview';
import {StatusBar,View} from 'react-native';

const UzemPage = ()=>{
    return(
        <View style={{flex:1}}>
            
            <StatusBar backgroundColor='#121E2D' />
            <View style={{flex:1,backgroundColor:'black',paddingLeft:20,}}>
        <WebView
        source={{uri:'https://oys10.gantep.edu.tr/login/auth.php'}}
        scrollEnabled={true}
         />
         </View>
        </View>
    )
}
export default UzemPage;