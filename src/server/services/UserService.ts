import { getDatabase } from '../db/db';
import { User } from '../../types/user';

export const UserService = {
  async createUser(email: string): Promise<User> {
    const db = await getDatabase();
    const [user] = await db('users').insert({ email }).returning(['id', 'email']);
    return user;
  },
};