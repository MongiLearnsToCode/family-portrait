// src/app/api/webhook/polar/route.ts
import { Webhooks } from "@polar-sh/nextjs";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export const POST = Webhooks({
    webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,
    onPayload: async (payload) => {
        if (payload.type === 'subscription.created' || payload.type === 'subscription.updated') {
            const userId = payload.data.metadata?.userId;
            if (userId) {
                const isPremium = payload.data.status === 'active';
                await convex.mutation(api.users.updatePremiumStatus, {
                    userId: userId,
                    premium: isPremium,
                });
            }
        }
    },
});