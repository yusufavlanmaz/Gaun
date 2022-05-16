import React from 'react';
import {SafeAreaView,Text,ImageBackground,View,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LessonPage = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient  style={styles.Backgrounclr} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}  colors={['#373B44','#4286f4','#373B44']} >                
                <Text style={styles.headertext}>Dersler</Text>
            </LinearGradient>
        </SafeAreaView>
    )
}
export default LessonPage;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Backgrounclr:{
        flex:1
    },
    headertext:{
        color:'white',
        fontSize:30,
        alignSelf:'center'
    },
})