// controllers/userController.js

// Example user data (for demonstration)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  // ...more users
];

// Get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Get a user by ID
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};

// Create a new user
exports.createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Update a user by ID
exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (name) {
    user.name = name;
  }

  res.json(user);
};

// Delete a user by ID
exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
};
