import React from 'react';
// import TestContextFromApp2 from 'app2/TestContext';

const TestButton = () => {
    // const { value } = React.useContext(TestContextFromApp2)
    return (
        <div>
            <button>
                Test Button app 3 with React version: {React.version}
            </button>
            {/* <p>
                app context value: {value}
            </p> */}
        </div>
    );
};

export default TestButton;