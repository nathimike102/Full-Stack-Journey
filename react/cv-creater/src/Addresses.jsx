import { useState } from "react";

const Addresses = () => {
    const [addresses, setAddresses] = useState(null);

    const addAddress = () => {
        const address = prompt("Enter Address:");
        setAddresses(address);
    };

    return (
        <>
            <button onClick={addAddress}>Add Address</button>
            <div>{addresses ? addresses : "No Address Added"}</div>
        </>
    );
}

export default Addresses;
