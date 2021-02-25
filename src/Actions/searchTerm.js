/** Login Action
 * @author Tanvi 1998tanvi@gmail.com
 * Functional Component */

// This will handle login/register of subadmin 
export default(regObj)=>{
    return{
        type: "SEARCH_PINCODE",
        payload: regObj
    }
}