import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

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

App.defaulProps = {
  count: 0
};

const Jsx = (
  <React.StrictMode>
    <App count={0} />
  </React.StrictMode>
);

ReactDOM.render(Jsx, document.getElementById('root'));

reportWebVitals();