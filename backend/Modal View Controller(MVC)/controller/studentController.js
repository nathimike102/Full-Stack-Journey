const getStudent = (req, res) => {
    let stdData = { id: 1, name: "Nathi", age: 23 };
    res.status(200).json({message: "Data retrieved successfully", data : stdData});
}

const addStudent = (req, res) => {
    let newStd = req.body || {id: 2, name: "Mike", age: 21};
    res.status(201).json({message: "Student added successfully", student: newStd});    
}

const updateStudent = (req, res) => {
    let updatedStd = req.body || {id: req.params.id, name: "Nathi Updated", age: 23};
    res.status(200).json({message: "Student updated successfully", student: updatedStd});
}

const deleteStudent = (req, res) => {
    res.status(200).json({message: "Student deleted successfully", id: req.params.id});
}

export { getStudent, addStudent, updateStudent, deleteStudent };