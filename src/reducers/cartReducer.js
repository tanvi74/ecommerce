// const initState = [];


export default (state=[], action)=>{
    if(action.type==="CART"){
        return [
            ...state,
            action.payload
        ]
    }else if(action.type==="REMOVE_ITEM"){
        console.log(state)
        return state.filter(item => item !== action.payload)
        
    }
    else    
        return state;
}