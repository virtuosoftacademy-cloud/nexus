
import { prisma } from "@/lib/prisma";

export const [featured, categories, sidebarPosts, blogPosts] = await Promise.all([
  prisma.blogPost.findFirst({
    where: { isFeatured: true },
    include: { category: true },
    orderBy: { date: "desc" },
  }),
  prisma.blogCategory.findMany({
    orderBy: { label: "asc" },
    include: { posts: { orderBy: { date: "desc" } } },
  }),
  prisma.blogPost.findMany({
    where: { isSidebar: true },
    orderBy: { date: "desc" },
  }),
  prisma.blogPost.findMany({
    orderBy: { date: "desc" },
    take: 2,
    include: { category: { select: { label: true } } },
  })
]);
