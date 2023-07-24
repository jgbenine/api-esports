import React from 'react'

function Button({textView, onClick}) {
  return (
    <button onClick={onClick} className="p-3 text-center text-sm rounded-sm border border-amber-400 color text-zinc-50 focus:border-amber-800 hover:border-amber-800">
      {textView}
    </button>
  )
}

export default Button
