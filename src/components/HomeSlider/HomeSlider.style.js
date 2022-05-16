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
        backgroundColor:'lightgray',
        width:Dimensions.get('screen').width/1.03,
        height:Dimensions.get('screen').height/3.5,
        alignSelf:'center',
        marginLeft:6,
        borderRadius:10,
        
    },
    first_image:{
        flex:1,
        height:'100%',
        borderRadius:10,
    },
    dersler:{
        marginLeft:18,
        borderWidth:1,
        alignSelf:'flex-start',
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
    },
    derslerText2:{
        paddingLeft:150,
    },

   
})