import React from 'react';

function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="text-orange-400 my-2 font-mono uppercase tracking-wider">
      {text}
    </label>
  );
}

export default Label;