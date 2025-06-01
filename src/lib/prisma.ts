import { PrismaClient } from '@/generated/prisma';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  process.env.NODE_ENV === "production"
    ? new PrismaClient()
    : 
      global.prisma ||
      (global.prisma = new PrismaClient());