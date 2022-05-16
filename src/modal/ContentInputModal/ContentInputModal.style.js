import {StyleSheet,Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    Container:{
        backgroundColor:'white',
        padding:10,
        margin:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:deviceSize.height/4,
    },
    modal:{
     justifyContent:'flex-end',
     margin:0,
    },
    input:{
        marginTop:5,
        marginLeft:10,
    },
    button:{
        marginBottom:100,
        padding:0,
    },
})