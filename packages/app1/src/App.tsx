import './App.css';
import { Suspense, useState } from 'react';
import Button from 'app2/Button';
import TestButton from 'app3/TestButton'
import TestContextFromApp2 from 'app2/TestContext';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <TestContextFromApp2.Provider value={{ value: 'Test value from app1' }}>
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <p>Click counter: {counter} </p>
        <p>
          <Suspense fallback={<div>Loading</div>}>
            <Button onClick={() => setCounter(c => c+1)}/>
          </Suspense>
        </p>
        <p>
          <Suspense fallback={<div>Loading</div>}>
            <TestButton />
          </Suspense>
        </p>
      </div>
    </TestContextFromApp2.Provider>
  );
};

export default App;
