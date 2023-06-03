import React from 'react'

function Button({textView, onClick}) {
  return (
    <button onClick={onClick} className="p-1 text-center w-28 text-sm rounded-sm bg-amber-400 color text-black hover:bg-amber-300">
      {textView}
    </button>
  )
}

export default Button
