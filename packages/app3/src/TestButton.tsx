import React from 'react';
import TestContextFromApp3 from './TestContext';
// import TestContextFromApp2 from 'app2/TestContext';

const TestButton = () => {
    // const { value } = React.useContext(TestContextFromApp2)
    const { value } = React.useContext(TestContextFromApp3)
    return (
        <div>
            <button>
                Test Button app 3 with React version: {React.version}
            </button>
            <p>
                App3: {value}
            </p>
        </div>
    );
};

export default TestButton;