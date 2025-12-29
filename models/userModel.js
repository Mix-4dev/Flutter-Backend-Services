const mongoose = require('mongoose');
const validatorJS = require('validator');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'A username is a required field'],
      validate: [
        validatorJS.isAlpha || validatorJS.isAlphanumeric,
        `name ({VALUE}) must contain only characters and/or number`,
      ],
      minLength: [3, 'A name must be at least 3 character long'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'An email is a required field'],
      validate: [validatorJS.isEmail, `({VALUE}) is not a valid email`],
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'A user must has a password'],
      minLength: [8, 'The password must be at least 8 character long'],
    },
    confirmPassword: {
      type: String,
      trim: true,
      required: [true, 'A user must has a password'],
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: `the passwords have to match`,
      },
    },
  },
  {}
);
const User = mongoose.model('User', userSchema);
module.exports = User;
