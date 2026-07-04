import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ── Stock metadata ──────────────────────────────────────────────────
  stocks: defineTable({
    symbol: v.string(),
    name: v.optional(v.string()),
    exchange: v.optional(v.string()),
    isActive: v.boolean(),
    lastScannedAt: v.optional(v.number()),
  }).index("by_symbol", ["symbol"]),

  // ── Daily pivot level calculations ──────────────────────────────────
  pivot_levels: defineTable({
    symbol: v.string(),
    date: v.string(), // ISO date string e.g. "2026-03-08"
    // Previous day OHLCV used for calculation
    prevHigh: v.number(),
    prevLow: v.number(),
    prevClose: v.number(),
    // Standard pivot
    pivot: v.number(),
    // Resistance levels
    r1: v.number(),
    r2: v.number(),
    r3: v.number(),
    r4: v.number(),
    r5: v.number(),
    // Support levels
    s1: v.number(),
    s2: v.number(),
    s3: v.number(),
    s4: v.number(),
    s5: v.number(),
    // VWAP
    vwap: v.optional(v.number()),
    calculatedAt: v.number(),
  })
    .index("by_symbol", ["symbol"])
    .index("by_symbol_date", ["symbol", "date"]),

  // ── Trade signals ───────────────────────────────────────────────────
  trade_signals: defineTable({
    symbol: v.string(),
    direction: v.union(v.literal("BUY"), v.literal("SELL")),
    status: v.union(
      v.literal("active"),
      v.literal("triggered"),
      v.literal("expired"),
      v.literal("cancelled")
    ),
    // Price at detection
    entryPrice: v.number(),
    currentPrice: v.number(),
    // Breach info
    breachLevel: v.string(), // "R5" or "S5"
    breachPercent: v.number(), // 0.5 to 1.0 (percentage)
    // Targets
    targets: v.array(
      v.object({
        level: v.number(),
        label: v.string(),
        hit: v.boolean(),
        hitAt: v.optional(v.number()),
      })
    ),
    // Stop loss
    stopLoss: v.number(),
    stopLossLabel: v.string(), // "Today's High" or "Today's Low"
    // Today's OHLCV context
    todayHigh: v.number(),
    todayLow: v.number(),
    todayOpen: v.number(),
    vwap: v.optional(v.number()),
    // Metadata
    scanId: v.string(), // groups signals from same scan run
    detectedAt: v.number(),
    expiresAt: v.optional(v.number()),
  })
    .index("by_status", ["status"])
    .index("by_symbol", ["symbol"])
    .index("by_direction_status", ["direction", "status"])
    .index("by_scan_id", ["scanId"]),
});
