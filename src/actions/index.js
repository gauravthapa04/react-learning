export const incNumber = (num) => { 
    return{
        type:"INCREMENET",
        payload:num
    }
   
 }
export const decNumber = () => { 
   return { 
    type:"DECREMENT"
   } 
 }