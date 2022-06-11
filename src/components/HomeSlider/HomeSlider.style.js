import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignContent:'center',
        padding:5,
        paddingLeft:0,
        flexDirection:'row',
    },
    first:{
        alignSelf:'center',
        textAlign:'center',
    },
    inner_container:{
        
        width:Dimensions.get('screen').width/1.03,
        height:Dimensions.get('screen').height/3.5,
        alignSelf:'center',
        marginLeft:6,
        borderRadius:10,
        
    },
    first_image:{
        flex:1,
        height:'100%',
        borderRadius:100,
    },
    dersler:{
        
        
        marginLeft:1,
        borderWidth:1,
        flexDirection:'row',
        padding:5,
        marginTop:8,
        borderColor:'#4286f4'
       
        
    },
    headerText:{
        margin:0,
        alignSelf:'center',
        color:'red',
        fontSize:20,
    
    },
    derslerText1:{
        paddingLeft:10,
        color:'white',
        flex:1,
    },
    derslerText2:{
        color:'white',
        margin:0,
        padding:0,
        alignItems:'flex-end',
        textAlign:'right',
        alignContent:'flex-end'
    },

   
})