import { useEffect, useState } from "react"
import fetchDefault from "../axios/axiosConfig"



function SelectFetch({url, mapFunction, value, onChange}) {
  const [options, setOptions] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetchDefault(url);
        const data = response.data;
        const mappedOptions = data.map(mapFunction);
        setOptions(mappedOptions)
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  },[url, mapFunction])

  return (

  )
}

export default SelectFetch
