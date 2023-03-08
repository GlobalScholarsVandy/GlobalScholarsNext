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
        const name = input.name;
        return ctx.prisma.post.findUnique({
            where: {
                id:input.name,
            },
        });
    }),
    postExample: publicProcedure
    .input(z.object({ 
        title: z.string(),
        content: z.string(),
        tags: z.array(z.string()),
        location: z.string(),
        program: z.string(),
        owner: z.string(),
     }))
    .mutation(({ input, ctx }) => {
        //post string to database
        return ctx.prisma.post.create({
            data: {
                title: input.title,
                content: input.content,
                tags: input.tags,
                location: input.location,
                program: input.program,
                timestamp: new Date(),
                owner:  input.owner,
                saves: 0,
                likes: 0,
                dislikes: 0,
            },
        })
        
        }
    )
});