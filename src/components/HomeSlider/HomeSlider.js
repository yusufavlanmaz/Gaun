import React from 'react';
import {SafeAreaView,Text,View,ImageBackground} from 'react-native'
import styles from './HomeSlider.style';

const image = {uri:'https://www.gantep.edu.tr/aday/images/gaun-1.jpg'}
const HomeSlider =() =>{
    return(
            <SafeAreaView style={styles.container}>

                <View style={styles.inner_container} >
                        <ImageBackground style={styles.first_image}  source={image}>
                      <Text style={styles.first}>Bu uygulama React-Native ile geliştirilmiştir</Text>  
                        </ImageBackground>                      
                </View>  



                <View style={styles.inner_container} >
                 
                <Text style={styles.headerText} >Sınav Tarihleri</Text>
                <View style={styles.dersler} >
                <Text style={styles.derslerText1}>Mobil Uygulama</Text> 
                <Text style={styles.derslerText2} >05.06.2022</Text>
                </View>

                <View style={styles.dersler} >
                <Text style={styles.derslerText1}>Mobil Uygulama</Text> 
                <Text style={styles.derslerText2} >05.06.2022</Text>
                </View>

                <View style={styles.dersler} >
                <Text style={styles.derslerText1}>Mobil Uygulama</Text> 
                <Text style={styles.derslerText2} >05.06.2022</Text>
                </View>

                <View style={styles.dersler} >
                <Text style={styles.derslerText1}>Mobil Uygulama</Text> 
                <Text style={styles.derslerText2} >05.06.2022</Text>
                </View>

                <View style={styles.dersler} >
                <Text style={styles.derslerText1}>Mobil Uygulama</Text> 
                <Text style={styles.derslerText2} >05.06.2022</Text>
                </View>
                
                </View>


                

            </SafeAreaView>
    )
}
export default HomeSlider;