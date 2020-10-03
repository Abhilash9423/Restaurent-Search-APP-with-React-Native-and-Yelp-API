import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import yelp from '../api/yelp'

const ResultScreen  = ({navigation}) => {
    const [result,setResult] = useState(null);
    
    const id = navigation.getParam('id')
    
    
    const getResult = async (id) => {
       const response =  await yelp.get(`/${id}`)
       setResult(response.data)
    };

    useEffect(()=>{
        getResult(id)
    },[]);
    
    if(!result){
        return null;
    }

    return(
<View style={styles.item}>
    <Text style={styles.textStyle}>{result.name} </Text>
    <FlatList 
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri:item}} />

        }}
    />
</View>
    )}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        margin:20,
        borderWidth:1,
        borderColor:'black',
        borderRadius:30
    },
    item:{
    flex:1,
    alignItems:"center",
    backgroundColor:"rgb(209, 201, 201)",
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:30
    }
})

export default ResultScreen;