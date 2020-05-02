import { user } from '../data';

class User {
  static all() {
    return user;
  }
}

module.exports = {
  User,
};
