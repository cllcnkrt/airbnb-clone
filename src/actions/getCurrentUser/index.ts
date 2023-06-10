import prisma from "@/libs/prismaDB";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export const getSession = async () => {
    return await getServerSession(authOptions);
};

export const getCurrentUser = async () => {
    try {
        const session = await getSession();
        if (!session?.user?.email) return null;

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string,
            },
        });

        if (!currentUser) return null;

        return currentUser;
    } catch (error: any) {
        return null;
    }
};
