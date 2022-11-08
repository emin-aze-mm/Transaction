import axios from "axios"

export const fetchList =async()=>{
    const {data}= await axios.get("https://acb-api.algoritmika.org/api/transaction")
    return data
}

// export const fetchPost = async (from,to,amount)=>{
//     if(from && to && amount){
//         const {data} = await axios.post("https://acb-api.algoritmika.org/api/transaction",{from:from,to:to,amount:amount});
//         return data;
//     }   
// }