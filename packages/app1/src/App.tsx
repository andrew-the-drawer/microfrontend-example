import './App.css';
import { Suspense, useState } from 'react';
import Button from 'app2/Button';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <p>Click counter: {counter} </p>
      <p>
        <Suspense fallback={<div>Loading</div>}>
          <Button onClick={() => setCounter(c => c+1)}/>
        </Suspense>
      </p>
      
    </div>
  );
};

export default App;
