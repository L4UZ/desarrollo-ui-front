import { User } from '../models';
import { UserModel } from '../data';

export const usersResolvers = {
  Query: {
    users: () => User.all(),
  },
  Mutation: {
    signUp: (_, { user }) => {
      UserModel.create([user]);
      return `${user.firstName} ${user.lastName} (${user.email}) <${user.password}>`;
    },
  },
};
