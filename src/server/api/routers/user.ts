import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { ObjectId } from 'bson';


export const userRouter = createTRPCRouter({
    getUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });
    }
    ),
    getAllUsers: publicProcedure.query(({ ctx }) => {
      return ctx.prisma.user.findMany();
    }
    ),
    updateUser: publicProcedure
    .input(z.object({ id: z.string(), name: z.string(), email: z.string() }))
    .mutation(({ input, ctx }) => {

      return ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          email: input.email,
        },
      });
    }
    ),
    deleteUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.delete({
        where: {
          id: input.id,
        },
      });
    }
    ),
});

    