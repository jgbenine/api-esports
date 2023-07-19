import { useEffect, useState } from "react"
import fetchDefault from "../axios/axiosConfig"

function SelectFetch({ url, mapFunction, value, onChange, idSelect }) {
  const [options, setOptions] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchDefault(url);
        const data = response.data.response;
        // console.log(response)
        // Verificar se data é um array
        if (Array.isArray(data)) {
          const mappedOptions = data.map(mapFunction);
          setOptions(mappedOptions);
        } else {
          console.error('Essa estrtura não é um array permitido map');
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [url])

  return (
    <div className="max-w-[280px] w-full">
    <select
      className="w-full bg-zinc-400 rounded-sm focus:outline-none p-2 text-zinc-900"
      id={idSelect}
      value={value}
      onChange={onChange}
    >
      <option className="text-stone-700" value="" disabled selected hidden>
        Selecione uma opção
      </option>
      {options.map((option, index) => (
        <option
          key={index}
          value={option.id}
          className="p-2 hover:bg-slate-500"
        >
          {option.label}
        </option>
      ))}
    </select>
    </div>
  )
}

export default SelectFetch;
