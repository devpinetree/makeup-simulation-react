import React, { useState } from 'react';
import { InputBox } from './style';

export default function InputText({ value = '', onChange }) {
  const [text, setText] = useState(value);

  function update(event) {
    setText(event.target.value);
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  }

  return <InputBox type="text" value={text} onChange={update} />;
}
