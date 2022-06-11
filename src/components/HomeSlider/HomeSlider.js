import React from 'react';
import {SafeAreaView,Text,View,ImageBackground} from 'react-native'
import styles from './HomeSlider.style';
import LinearGradient from 'react-native-linear-gradient';


const HomeSlider =() =>{
    return(
            <SafeAreaView style={styles.container}>
                
                <View style={styles.inner_container} >
                
                        <ImageBackground style={styles.first_image}  resizeMode='contain' source={require('../../../assets/gaunlogo2.png')}>
                       
                        </ImageBackground>                      
                        
                </View> 
                



                <View style={styles.inner_container} >
                 
                    <Text style={styles.headerText} >Sınav Tarihleri</Text>
                    <View style={styles.dersler} >
                    <Text style={styles.derslerText1}>Mikrodenetleyiciler</Text> 
                    <Text style={styles.derslerText2} >30.05.2022</Text>
                    </View>

                    <View style={styles.dersler} >
                    <Text style={styles.derslerText1}>Sunucu İşletim</Text> 
                    <Text style={styles.derslerText2} >31.05.2022</Text>
                    </View>

                    <View style={styles.dersler} >
                    <Text style={styles.derslerText1}>Oyun Programlama</Text> 
                    <Text style={styles.derslerText2} >01.06.2022</Text>
                    </View>

                    <View style={styles.dersler} >
                    <Text style={styles.derslerText1}>E-Ticaret</Text> 
                    <Text style={styles.derslerText2} >02.06.2022</Text>
                    </View>
                    <View style={styles.dersler} >
                    <Text style={styles.derslerText1}>Mobil Uygulama</Text> 
                    <Text style={styles.derslerText2} >08.06.2022</Text>
                    </View>
                    



                </View>


                

            </SafeAreaView>
    )
}
export default HomeSlider;