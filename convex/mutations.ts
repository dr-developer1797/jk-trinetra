import { mutation } from "./_generated/server";
import { v } from "convex/values";

// ── Upsert pivot levels for a stock on a given date ──────────────────
export const upsertPivotLevels = mutation({
  args: {
    symbol: v.string(),
    date: v.string(),
    prevHigh: v.number(),
    prevLow: v.number(),
    prevClose: v.number(),
    pivot: v.number(),
    r1: v.number(),
    r2: v.number(),
    r3: v.number(),
    r4: v.number(),
    r5: v.number(),
    s1: v.number(),
    s2: v.number(),
    s3: v.number(),
    s4: v.number(),
    s5: v.number(),
    vwap: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Check if pivot levels already exist for this symbol+date
    const existing = await ctx.db
      .query("pivot_levels")
      .withIndex("by_symbol_date", (q) =>
        q.eq("symbol", args.symbol).eq("date", args.date)
      )
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        ...args,
        calculatedAt: Date.now(),
      });
      return existing._id;
    }

    return await ctx.db.insert("pivot_levels", {
      ...args,
      calculatedAt: Date.now(),
    });
  },
});

// ── Insert a new trade signal ────────────────────────────────────────
export const insertTradeSignal = mutation({
  args: {
    symbol: v.string(),
    direction: v.union(v.literal("BUY"), v.literal("SELL")),
    entryPrice: v.number(),
    currentPrice: v.number(),
    breachLevel: v.string(),
    breachPercent: v.number(),
    targets: v.array(
      v.object({
        level: v.number(),
        label: v.string(),
        hit: v.boolean(),
        hitAt: v.optional(v.number()),
      })
    ),
    stopLoss: v.number(),
    stopLossLabel: v.string(),
    todayHigh: v.number(),
    todayLow: v.number(),
    todayOpen: v.number(),
    vwap: v.optional(v.number()),
    scanId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("trade_signals", {
      ...args,
      status: "active",
      detectedAt: Date.now(),
    });
  },
});

// ── Bulk insert trade signals from a scan run ────────────────────────
export const bulkInsertSignals = mutation({
  args: {
    signals: v.array(
      v.object({
        symbol: v.string(),
        direction: v.union(v.literal("BUY"), v.literal("SELL")),
        entryPrice: v.number(),
        currentPrice: v.number(),
        breachLevel: v.string(),
        breachPercent: v.number(),
        targets: v.array(
          v.object({
            level: v.number(),
            label: v.string(),
            hit: v.boolean(),
            hitAt: v.optional(v.number()),
          })
        ),
        stopLoss: v.number(),
        stopLossLabel: v.string(),
        todayHigh: v.number(),
        todayLow: v.number(),
        todayOpen: v.number(),
        vwap: v.optional(v.number()),
        scanId: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const ids = [];
    for (const signal of args.signals) {
      const id = await ctx.db.insert("trade_signals", {
        ...signal,
        status: "active",
        detectedAt: Date.now(),
      });
      ids.push(id);
    }
    return ids;
  },
});

// ── Update signal status ─────────────────────────────────────────────
export const updateSignalStatus = mutation({
  args: {
    signalId: v.id("trade_signals"),
    status: v.union(
      v.literal("active"),
      v.literal("triggered"),
      v.literal("expired"),
      v.literal("cancelled")
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.signalId, { status: args.status });
  },
});

// ── Upsert stock metadata ────────────────────────────────────────────
export const upsertStock = mutation({
  args: {
    symbol: v.string(),
    name: v.optional(v.string()),
    exchange: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("stocks")
      .withIndex("by_symbol", (q) => q.eq("symbol", args.symbol))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        ...args,
        lastScannedAt: Date.now(),
      });
      return existing._id;
    }

    return await ctx.db.insert("stocks", {
      ...args,
      isActive: true,
      lastScannedAt: Date.now(),
    });
  },
});
