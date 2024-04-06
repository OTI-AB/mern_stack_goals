// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
  res.json({ message: 'register user function' });
};

// @desc Authenticate user
// @route POST /api/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: 'login user function' });
};

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = (req, res) => {
  res.json({ message: 'get user data function' });
};

module.exports = { registerUser, loginUser, getMe };
