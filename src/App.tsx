import { useState } from 'react';
import { Button } from './components/StyledButton/Button';

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Button backgroundColor='#ff0' style={{ padding: '30px', width: '200px' }}>Button</Button>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
