import { useState } from "react";

const Names = () => {
    const [name, setName] = useState(null);

    const addName = () => {
        const prefix = prompt("Enter Prefix:");
        const FirstName = prompt("Enter First Name:");
        const LastName = prompt("Enter Last Name:");
        setName({prefix, FirstName, LastName});
    };

    return (
        <>
            <button onClick={addName}>Add Name</button>
            <div>{name ? `${name.prefix}. ${name.FirstName} ${name.LastName}` : "No Name Added"}</div>
        </>
    );
}

export default Names;