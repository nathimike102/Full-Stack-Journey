import { useState } from "react";
const FunctionComponent = () => {
    const [bmi, setBmi] = useState(null);
    const [res, setRes] = useState(null);

    const handleCalculate = () => {
        const height = prompt("Enter your height in meters:");
        const weight = prompt("Enter your weight in kilograms:");
        setBmi(weight / (height * height));
        // if (bmi < 16) {
        //     setRes("Severe Thinness");
        // } else if (bmi < 17) {
        //     setRes("Moderate Thinness");
        // } else if (bmi < 18.5) {
        //     setRes("Mild Thinness");
        // } else if (bmi < 25) {
        //     setRes("Normal");
        // } else if (bmi < 30) {
        //     setRes("Overweight");
        // } else if (bmi < 35) {
        //     setRes("Obese Class I");
        // } else if (bmi < 40) {
        //     setRes("Obese Class II");
        // } else {
        //     setRes("Obese Class III");
        // }
    }

    return (
        <>
            <h1>Hello from Function Component</h1>
            <div>
                <button onClick={handleCalculate}> Calculate BMI</button>
                <p>{bmi ? `Your BMI is: ${bmi}` : "Please enter your details"}</p>
            </div>
            <div>
                <p>{res ? `Your BMI category is: ${res}` : ""}</p>
            </div>
        </>
    )
}

export default FunctionComponent;