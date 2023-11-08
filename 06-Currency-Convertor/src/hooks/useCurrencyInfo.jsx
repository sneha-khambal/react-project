import { useEffect ,useState } from "react";

function useCurrencyInfo (currency){
    const [data,setData] = useState({})
    useEffect(()=>{
    console.log(currency)

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(response=>{
            return response.json();
        })
        .then(res=>{
            console.log(res)
            setData(res[currency])
        
        }) 
    },[currency])

    return data
}

export default useCurrencyInfo;