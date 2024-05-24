import { type CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { type Request, type Response } from 'express';

interface CreateInnerContextOptions extends Partial<CreateExpressContextOptions> {}

export async function createInnerContext(options?: CreateInnerContextOptions): Promise<{
  req: Request | undefined;
  res: Response | undefined;
}> {
  return {
    req: options?.req,
    res: options?.res,
  };
}

export async function createContext({
  req,
  res,
}: CreateExpressContextOptions): Promise<
  { req: Request; res: Response } & Awaited<ReturnType<typeof createInnerContext>>
> {
  const innerContext = await createInnerContext();
  return {
    ...innerContext,
    req,
    res,
  };
}

export type Context = Awaited<ReturnType<typeof createInnerContext>>;
