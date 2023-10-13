import { useState } from 'react';
import './App.css';
import TestMe from '@saurssaurav/pagination-js-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TestMe />
    </>
  );
}

export default App;
