import { FEEDS_ERROR, FEEDS_LOADING, FEEDS_SUCCESS } from "./feeds.type"
import axios from "axios"


export const getFeedApi=()=>(dispatch)=>{
    dispatch({type: FEEDS_LOADING})
    axios.get("http://localhost:8080/feeds")
    .then((r)=>{
        dispatch({type: FEEDS_SUCCESS,payload:r.data})
    })
    .catch(()=>{
    dispatch({type: FEEDS_ERROR})
    })
    
    }
    