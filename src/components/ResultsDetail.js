import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';


const ResultsDetail = ({result}) => {
    return(
        <View style={styles.container}>
        <Image style={styles.image}source={{uri:result.image_url}} />
        <Text style={styles.text} >{result.name} </Text>
        <Text> {result.rating} stars,{result.review_count} reviews </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width:250,
        height:150,
        borderRadius:4,
        marginBottom:5
    },
    text:{
        fontWeight:'bold'
    }
})

export default ResultsDetail