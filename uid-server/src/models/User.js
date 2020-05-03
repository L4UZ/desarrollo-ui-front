import { UserModel } from '../data';

class User {
  static async all() {
    return UserModel.find();
  }
}

export default {
  User,
};
