import React from 'react';

function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="text-zinc-50 text-sm">
      {text}
    </label>
  );
}

export default Label;