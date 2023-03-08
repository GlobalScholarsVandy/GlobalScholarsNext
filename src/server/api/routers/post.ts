import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
    getPostByName: publicProcedure
    .input(z.object({
        name: z.string(),
    }))
    .query(({ input, ctx }) => {
        return ctx.prisma.post.findMany({
            where: {
                title: input.name,
            },
        })
    })

    ,
    postExample: publicProcedure
    .input(z.object({ 
        title: z.string(),
        content: z.string(),
        tags: z.array(z.string()),
     }))
    .mutation(({ input, ctx }) => {
        //post string to database
        return ctx.prisma.post.create({
            data: {
                title: input.title,
                content: input.content,
                tags: input.tags,
                timestamp: new Date(),
            },
        })
        
        }
    )
});