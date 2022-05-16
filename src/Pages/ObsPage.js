import React from 'react';
import {WebView} from 'react-native-webview';
import {StatusBar,View} from 'react-native';

const ObsPage = ()=>{
    return(
        <View style={{flex:1}}>
            <StatusBar backgroundColor='#121E2D' />
        <WebView
        source={{uri:'https://obs.gantep.edu.tr/oibs/ogrenci/login.aspx'}}
        scrollEnabled={true}
         />
        </View>
    )
}
export default ObsPage;