// Component - Props - State

import { useState } from "react";

const ChildComponent = (props: { message: string }) => {
    const { message } = props;
    return <p>{message}</p>;
}

const ParentComponent = () => {
    const [parentMessage, setParentMessage] = useState("Hello from Parent Component!");

    const updateMessage = () => {
        setParentMessage("Message updated!");
    };

    return (
        <div>
            <h2>Parent Component</h2>
            <ChildComponent message={parentMessage} />
            <button onClick={updateMessage}>Update Message</button>
        </div>
    );
}

export default ParentComponent;