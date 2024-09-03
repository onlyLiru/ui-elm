import { useState } from 'react';
import Button from './components/StyledButton/Button';
import { formatNumber } from './utils';

function App() {
  const [count, setCount] = useState(0);

  const formattedMoney = formatNumber(1234567.8, { format: 'money', precision: 2 });
  console.log(formattedMoney); // Output: "1,234,567.89"

  const formattedMoney1 = formatNumber(1234567.8, { format: 'money' });
  console.log(formattedMoney1); // Output: "1,234,567.89"

  const formattedInt = formatNumber(1234567.89, { format: 'int' });
  console.log(formattedInt); // Output: "1234568"

  const formattedPercent = formatNumber(0.123, { format: 'percent', precision: 2 });
  console.log(formattedPercent); // Output: "12.30%"

  const formattedPercent1 = formatNumber(0.123, { format: 'percent' });
  console.log(formattedPercent1); // Output: "12.30%"

  console.log(formatNumber(0.1234, { format: 'money' }));


  return (
    <>
      <Button>Button</Button>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
