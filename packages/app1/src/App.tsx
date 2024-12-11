import './App.css';
import { Suspense, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Button from 'app2/Button';
// import TestButton from 'app3/TestButton'
import TestContextFromApp2 from 'app2/TestContext';
import app3Mount from 'app3/mount';

const App = () => {
  const [counter, setCounter] = useState(0);
  const app3ContainerRef = useRef<HTMLParagraphElement | null>(null);
  const app3MountRef = useRef<ReturnType<typeof app3Mount> | null>(null);
  
  const value = useMemo(() => `Test value from app1, counter: ${counter}`, [counter]) 

  useLayoutEffect(() => {
    if(app3ContainerRef.current) {
      app3MountRef.current = app3Mount(app3ContainerRef.current);
    }

    return () => {
      app3MountRef.current?.unmount();
    }
  }, []);

  useLayoutEffect(() => {
    app3MountRef.current?.render({ value });
  }, [value])
  

  return (
    <TestContextFromApp2.Provider value={{ value }}>
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <p>Click counter: {counter} </p>
        <p>
          <Suspense fallback={<div>Loading</div>}>
            <Button onClick={() => setCounter(c => c+1)}/>
          </Suspense>
        </p>
        <p ref={app3ContainerRef}></p>
        {/* <p>
          <Suspense fallback={<div>Loading</div>}>
            <TestButton />
          </Suspense>
        </p> */}
      </div>
    </TestContextFromApp2.Provider>
  );
};

export default App;
