import express from 'express';
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

let users = [
    { id: 1, name: "Nathi" },
    { id: 2, name: "Mike" }
];

let nextId = 3;

// GET all users
app.get('/users', (req, res) => {
    console.log("Received GET request for /users");
    res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
    console.log(`Received GET request for /users/${req.params.id}`);
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }    
    res.json(user);
});

// POST create new user
app.post('/users', (req, res) => {
    console.log("Received POST request for /users with data:", req.body);
    if (!req.body.name) {
        return res.status(400).json({ message: "Name is required" });
    }
    const newUser = {
        id: nextId++,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json({ message: "User created", user: newUser });
});

// PUT update user
app.put('/users/:id', (req, res) => {
    console.log(`Received PUT request for /users/${req.params.id} with data:`, req.body);
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if (req.body.name) {
        user.name = req.body.name;
    }
    res.json({ message: `User ${req.params.id} updated`, user });
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    console.log(`Received DELETE request for /users/${req.params.id}`);
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    const deletedUser = users.splice(index, 1);
    res.json({ message: `User ${req.params.id} deleted`, user: deletedUser[0] });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});