import { FEEDS_ERROR, FEEDS_LOADING, FEEDS_SUCCESS } from "./feeds.type"

const initialState={
    getFeed:{
        loading: false,
        error: false,
    },
    data:[]
  
}

export const feedReducer=(state=initialState,{type,payload})=>{
    switch(type){

        case FEEDS_LOADING:{
            return {...state,
                getFeed:{
                    ...state.getFeed,
                    loading:true,error:false
                
                }
            }
        }

case FEEDS_SUCCESS:{
    return {...state,
        getFeed:{
            ...state.getFeed,
            loading:false,error:false
        
        },
        data:payload,
    }
}

 case FEEDS_ERROR:{
    return {...state,
        getFeed:{
            ...state.getFeed,
            loading:false,error:true
        
        }
    }
}

        default:{
            return state
        }
    }
}