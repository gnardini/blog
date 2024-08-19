import { z } from 'zod';
import { createApiHandler } from '../../server/apiHandler';
import { UserService } from '../../server/services/UserService';

const subscribeSchema = z.object({
  email: z.string().email(),
});

export default createApiHandler({
  method: 'POST',
  schema: subscribeSchema,
  handler: async (data) => {
    const user = await UserService.createUser(data.email);
    return { message: 'User subscribed successfully', user };
  },
});