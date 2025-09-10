import { useState } from "react";

const Education = () => {
    const [education, setEducation] = useState(null);

    const addEducation = () => {
        const degree = prompt("Enter Degree:");
        const institution = prompt("Enter Institution:");
        const year = prompt("Enter Year:");
        setEducation({ degree, institution, year });
    };

    return (
        <>
            <button onClick={addEducation}>Add Education</button>
            <div>{education ? `${education.degree} - ${education.institution} (${education.year})` : "No Education Added"}</div>
        </>
    );
}

export default Education;