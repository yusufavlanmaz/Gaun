import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
   
    continer:{
        width: Dimensions.get('window').width/1.05, 
       // backgroundColor:'#007D72',
        alignSelf:'center',
        margin:5,
        borderRadius:10,
        elevation:5,
    },
    header:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        flexDirection:'row', 
        width:'100%',
    },
    username:{
        color:'white',
        padding:5,
        fontSize:15,
        paddingLeft:12,
        marginRight:'auto',
        alignSelf:'flex-start',
        alignItems:'flex-start',
        

    },
    date:{
             alignSelf:'flex-end',
             textAlign:'right',
             color:'white',
             padding:5,
             fontSize:15,  
    },
    text:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:5,
        fontSize:18,
        color:'white',
        paddingBottom:10,
    },

})