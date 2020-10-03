import yelp from '../api/yelp'
import  React,{useState,useEffect} from 'react';


export default () =>{
    const[results,setResults] = useState([])
    const[errormsg,setErrorMsg] = useState('')
    const searchApi = async (SearchTerm) =>{
        try{
        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term: SearchTerm,
                location:'san jose'
            }
        })
        setResults(response.data.businesses)
    }catch(err){
        setErrorMsg('Something when wrong')
    }
    }

    useEffect(()=>{
        searchApi('pasta')
    },[])
    return [searchApi,results,errormsg];
}