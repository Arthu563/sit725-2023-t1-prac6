const userModel = require('../../models/userModel');

describe('User Model', () => {
  it('should fetch all users', () => {
    const users = userModel.getAll();
    // Add assertions to verify the expected users
    expect(users).toHaveLength(2); // Change this based on the number of users
    expect(users[0].name).toBe('Alice');
    expect(users[1].name).toBe('Bob');
    // Add more specific assertions based on your model's logic
  });
});
