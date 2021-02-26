/** Login Action
 * @author Tanvi 1998tanvi@gmail.com
 * Functional Component */

// This will handle cart items
export default(regObj)=>{
    return{
        type: "CART",
        payload: regObj
    }
}