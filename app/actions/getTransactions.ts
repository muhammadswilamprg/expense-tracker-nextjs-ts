'use server';

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Transaction } from "@/types/Transaction";

async function getTransaction(): Promise<{
    transactions?: Transaction[];
    error?: string
}> {
    const { userId } = await auth() 
    if (!userId) {
        return {error: 'User Not Found'}
    }
    try {
        const transactions = await db.transaction.findMany({
            where: { userId },
            orderBy: {
                createdAt: 'desc',
            }
        })
        return { transactions };
    } catch (error) {
        return {error: 'Database Error'}
    }
}

export default getTransaction;