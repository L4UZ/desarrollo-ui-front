import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { pick } from 'lodash';

import { User } from '../models';
import { UserModel } from '../data';

export const usersResolvers = {
  Query: {
    users: () => User.all(),
  },
  Mutation: {
    signUp: async (_, { user }) => {
      const passwordHash = await hash(user.password, 10);
      const userToSave = { ...pick(user, ['email', 'firstName', 'lastName']), passwordHash };
      const [createdUser] = await UserModel.create([userToSave]);
      const jwtPayload = { user: pick(createdUser, ['email', 'firstName', 'lastName']) };
      const jwt = sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '1d' });
      return jwt;
    },
  },
};
