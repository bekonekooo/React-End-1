import { useEffect,useState } from "react";

//
const useFetch =(url)=>{

    const [data,setData]=useState( null)
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res =>{
         if(!res.ok){
             throw Error("could not fetch the data of response");
         }
               return res.json();
})
        .then((data)=>{
         setData(data);
         setIsPending(false);
         setError(null)
        })
        .catch((err)=>{
         setIsPending(false)
         setError(err.message);
        })
        return() => console.log("cleanup")
 },[url]);

        return{
            data,isPending,error
        }
}
export default useFetch;