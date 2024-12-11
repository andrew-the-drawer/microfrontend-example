import React from 'react';
import ReactDOM from 'react-dom';
import TestButton from './TestButton';
import TestContextFromApp3 from './TestContext';

type RenderProps = {
    value: string;
}

const createRoot = (container: HTMLElement) => {
    return {
        unmount: () => {
            ReactDOM.unmountComponentAtNode(container);
        },
        render: (props: RenderProps) => {
            ReactDOM.render(
                <React.StrictMode>
                    <TestContextFromApp3.Provider value={{ value: props.value }}>
                        <TestButton />
                    </TestContextFromApp3.Provider>
                </React.StrictMode>,
                container,
            );
        }
    }
}

export default createRoot;