import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from 'apps/nextapp/server/routers/_app';
// @see https://nextjs.org/docs/api-routes/introduction

export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
