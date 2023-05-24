import { z } from 'zod';
import { db } from '../db';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'healthy!'),
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const user = await db.user.findById(input);
    return user;
  }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await db.user.create(input);
      return user;
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;