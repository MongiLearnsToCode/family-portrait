import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const savePortrait = mutation({
  args: {
    imageUrl: v.string(),
    sourceImageUrls: v.array(v.string()),
    background: v.string(),
    style: v.string(),
    hires: v.boolean(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (!user) {
      throw new Error("User not found");
    }

    await ctx.db.insert("portraits", {
      userId: user._id,
      imageUrl: args.imageUrl,
      sourceImageUrls: args.sourceImageUrls,
      background: args.background,
      style: args.style,
      hires: args.hires,
    });
  },
});

export const getPortraits = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (!user) {
      return [];
    }

    return await ctx.db
      .query("portraits")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();
  },
});

export const deletePortrait = mutation({
  args: { id: v.id("portraits") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
