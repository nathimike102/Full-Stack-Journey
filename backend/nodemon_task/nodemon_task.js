import express from 'express';
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
    console.log("Received request for /users");
    let users = req.body || [{id: 1, name: "Nathi"}, {id: 2, name: "Aiden"}];
    res.send(users);
});

app.post('/users', (req, res) => {
    console.log("Received POST request for /users with data:", req.body);
    let newUser = req.body;
    res.status(201).send({message: "User created", user: newUser});
});

app.put('/users/:id', (req, res) => {
    console.log(`Received PUT request for /users/${req.params.id} with data:`, req.body);
    let updatedUser = req.body;
    res.send({message: `User ${req.params.id} updated`, user: updatedUser});
});

app.delete('/users/:id', (req, res) => {
    console.log(`Received DELETE request for /users/${req.params.id}`);
    res.send({message: `User ${req.params.id} deleted`});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});