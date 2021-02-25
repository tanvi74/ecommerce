const initState = ""

export default (state=initState, action)=>{
    if(action.type==="SEARCH_PINCODE")
        return action.payload;
    else    
        return state;
}