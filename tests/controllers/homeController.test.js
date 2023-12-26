const homeController = require('../../controllers/homeController');

describe('Home Controller', () => {
  it('should render the home page', () => {
    const mockRequest = {};
    const mockResponse = {
      render: jest.fn()
    };
    homeController.homePage(mockRequest, mockResponse);
    expect(mockResponse.render).toHaveBeenCalledWith('home');
  });
});
