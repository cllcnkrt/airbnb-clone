import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;

//next.js 13 hot reloding can cause a bunch of this new PrismaClient() instances to be created giving a warning in the terminal.
// this way we assign the prisma client to a global this variable which is not affected by hot reload so this is just a best practice for
// using prisma with next.js 13
