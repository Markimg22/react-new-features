import React, { useState, useEffect } from 'react';

const Count = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('executa apenas quando o componente for inicializado');
  }, []);

  useEffect(() => {
    console.log('executa apenas quando o "count" muda');
    document.title = count;
  }, [count]);

  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
    </div>
  );
};

Count.defaulProps = {
  count: 0
};

export default Count;