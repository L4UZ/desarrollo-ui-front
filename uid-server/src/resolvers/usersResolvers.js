import { User } from '../models';

const usersResolvers = {
  Query: {
    users: () => User.all(),
  },
};

export default {
  usersResolvers,
};
