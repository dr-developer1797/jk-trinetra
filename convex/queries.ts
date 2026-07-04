import { query } from "./_generated/server";
import { v } from "convex/values";

// ── Get all active signals, optionally filtered by direction ─────────
export const getActiveSignals = query({
  args: {
    direction: v.optional(v.union(v.literal("BUY"), v.literal("SELL"))),
  },
  handler: async (ctx, args) => {
    if (args.direction) {
      return await ctx.db
        .query("trade_signals")
        .withIndex("by_direction_status", (q) =>
          q.eq("direction", args.direction!).eq("status", "active")
        )
        .collect();
    }
    return await ctx.db
      .query("trade_signals")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();
  },
});

// ── Get signals for a specific stock ─────────────────────────────────
export const getSignalsByStock = query({
  args: {
    symbol: v.string(),
    status: v.optional(
      v.union(
        v.literal("active"),
        v.literal("triggered"),
        v.literal("expired"),
        v.literal("cancelled")
      )
    ),
  },
  handler: async (ctx, args) => {
    const signals = await ctx.db
      .query("trade_signals")
      .withIndex("by_symbol", (q) => q.eq("symbol", args.symbol))
      .collect();

    if (args.status) {
      return signals.filter((s) => s.status === args.status);
    }
    return signals;
  },
});

// ── Get pivot levels for a stock (latest date) ───────────────────────
export const getPivotLevels = query({
  args: {
    symbol: v.string(),
    date: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.date) {
      return await ctx.db
        .query("pivot_levels")
        .withIndex("by_symbol_date", (q) =>
          q.eq("symbol", args.symbol).eq("date", args.date!)
        )
        .first();
    }
    // Return the latest entry for this symbol
    const levels = await ctx.db
      .query("pivot_levels")
      .withIndex("by_symbol", (q) => q.eq("symbol", args.symbol))
      .order("desc")
      .first();
    return levels;
  },
});

// ── Get signals from a specific scan run ─────────────────────────────
export const getSignalsByScanId = query({
  args: {
    scanId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("trade_signals")
      .withIndex("by_scan_id", (q) => q.eq("scanId", args.scanId))
      .collect();
  },
});

// ── Get all tracked stocks ───────────────────────────────────────────
export const getActiveStocks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("stocks")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});
