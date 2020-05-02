import { User } from '../models';

const usersResolvers = {
  Query: {
    users: () => User.all(),
  },
};

module.exports = {
  usersResolvers,
};
