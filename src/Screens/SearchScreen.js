import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
const SearchScreen = () => {
    const [term,setTerm] = useState('')
    const[searchApi,results,errormsg] = useResults()
    
    const filterResultsByPrice = (price) =>{
        return results.filter(results=>{
            return results.price===price
        })
    }
    
    
    
    
    return(
    <>
        <SearchBar 
            term={term} 
            onTermChange={newTerm=>setTerm(newTerm)}
            onTermSubmit = {()=>searchApi()}
            />
      
    {errormsg?<Text>{errormsg}</Text>:null}
    <ScrollView>
    <ResultsList  results={filterResultsByPrice('$')} title={"Cost effective"} />
    <ResultsList results={filterResultsByPrice('$$')} title={"big  pricier"} />
    <ResultsList results={filterResultsByPrice('$$$')} title={"Big Spender"} />
    </ScrollView>
    </>
    )}
const styles = StyleSheet.create({

})
export default SearchScreen