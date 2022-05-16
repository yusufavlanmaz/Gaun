import React from 'react';
import {SafeAreaView,Text,FlatList,View,ImageBackground} from 'react-native'
import styles from './HomeSlider.style';
const HomeSlider =() =>{
    return(
            <SafeAreaView style={styles.container}>

                <View style={styles.inner_container} >
                      <Text>Bu uygulama React-Native ile geliştirilmiştir</Text>  
                      
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