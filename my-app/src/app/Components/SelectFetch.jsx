import { useEffect, useState } from "react";
import fetchDefault from "../axios/axiosConfig";

function SelectFetch({ url, mapFunction, value, onChange, idSelect }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchDefault(url);
        const data = response.data.response;
        
        if (Array.isArray(data)) {
          const mappedOptions = data.map(mapFunction);
          setOptions(mappedOptions);
        } else {
          console.log('is not array')
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url]);

  return (
    <div className="max-w-[280px] w-full">
      <select
        className="w-full bg-zinc-400 rounded-sm focus:outline-none p-2 shadow-md cursor-pointer shadow-black text-zinc-900 hover:bg-zinc-300 focus:bg-slate-400"
        id={idSelect}
        value={value}
        onChange={onChange}
      >
        <option
          className="text-stone-700 cursor-pointer"
          value=""
          disabled
          hidden
        >
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
  );
}

export default SelectFetch;
