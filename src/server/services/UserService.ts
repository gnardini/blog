import { User } from '../../types/user';
import { getDatabase } from '../db/db';

export const UserService = {
  async createUser(email: string): Promise<User> {
    const db = await getDatabase();

    const existingUser = await db('users').where({ email }).first();
    if (existingUser) {
      return existingUser;
    }

    const [newUser] = await db('users').insert({ email }).returning(['id', 'email']);
    return newUser;
  },
};
