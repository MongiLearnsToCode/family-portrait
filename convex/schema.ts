import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  portraits: defineTable({
    userId: v.id("users"),
    imageUrl: v.string(),
    sourceImageUrls: v.array(v.string()),
    background: v.string(),
    style: v.string(),
    hires: v.boolean(),
  }).index("by_user", ["userId"]),
});
