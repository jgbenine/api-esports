import { useEffect, useState } from "react"
import fetchDefault from "../axios/axiosConfig"



function SelectFetch({url, mapFunction, value, onChange}) {
  const [options, setOptions] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetchDefault(url);
        const data = response.data.response;
         // Verificar se data é um array
         if (Array.isArray(data)) {
          const mappedOptions = data.map(mapFunction);
          setOptions(mappedOptions);
          console.log(data)
        } else {
          console.error('Essa estrtura não é um array permitido map');
        }
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  },[url, mapFunction])

  return (
    <select className="text-black" value={value} onChange={onChange}>
      {options.map((option) =>(
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SelectFetch;
