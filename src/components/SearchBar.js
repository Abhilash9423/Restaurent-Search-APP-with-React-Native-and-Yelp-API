import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term , onTermChange,onTermSubmit}) => {
return(
    <View style={styles.backgroundStyle} > 
    <Feather name="search" style={styles.icon} size={30} />
    <TextInput 
    autoCapitalize="none"
    autoCorret={false}
    style={styles.inputStyle} 
    placeholder="search" 
    value={term}
    onChangeText={newTerm =>onTermChange(newTerm)}
    onEndEditing={()=>onTermSubmit()}
    />  
    </View>
)

}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    icon:{
        fontSize:35,
        color:'black',
        alignSelf:"center",
        marginHorizontal:15
    },
    inputStyle:{
        flex:1,
        fontSize:18
    }

})

export default SearchBar;