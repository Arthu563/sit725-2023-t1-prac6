const userController = require('../../controllers/userController');

describe('UserController Tests', () => {
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn(() => mockResponse),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test for getAllUsers function
  test('Get All Users', () => {
    userController.getAllUsers(mockRequest, mockResponse);
    expect(mockResponse.json).toHaveBeenCalledWith([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      // ...other users
    ]);
  });

  // Test for getUserById function
  test('Get User by ID', () => {
    const mockParams = { params: { id: 1 } };
    userController.getUserById(mockParams, mockResponse);
    expect(mockResponse.json).toHaveBeenCalledWith({ id: 1, name: 'Alice' });
  });

  // Test for createUser function
  test('Create a New User', () => {
    const mockBody = { body: { name: 'Charlie' } };
    userController.createUser(mockBody, mockResponse);
    expect(mockResponse.json).toHaveBeenCalledWith({ id: 3, name: 'Charlie' });
  });

  // ... Other test cases for updateUser, deleteUser, etc.
});
