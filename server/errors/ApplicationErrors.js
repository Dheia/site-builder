
class ApplicationError extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message || 'something went wrong. Please try again.';
  }
}

// eslint-disable-next-line import/prefer-default-export
class AuthenticationError extends ApplicationError {
  constructor(message) {
    super(message || 'Incorrect email and password combination.');
  }
}

module.exports = {
  AuthenticationError,
};
