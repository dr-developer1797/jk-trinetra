import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

// ── POST /api/signals/bulk — Receive batch signals from FastAPI ──────
http.route({
  path: "/api/signals/bulk",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const { signals } = body;

      if (!signals || !Array.isArray(signals)) {
        return new Response(
          JSON.stringify({ error: "Invalid payload: 'signals' array required" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const ids = await ctx.runMutation(api.mutations.bulkInsertSignals, {
        signals,
      });

      return new Response(
        JSON.stringify({
          success: true,
          count: ids.length,
          signalIds: ids,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error: any) {
      return new Response(
        JSON.stringify({ error: error.message || "Internal server error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }),
});

// ── POST /api/pivots/upsert — Receive pivot levels from FastAPI ──────
http.route({
  path: "/api/pivots/upsert",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const { pivots } = body;

      if (!pivots || !Array.isArray(pivots)) {
        return new Response(
          JSON.stringify({ error: "Invalid payload: 'pivots' array required" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const results = [];
      for (const pivot of pivots) {
        const id = await ctx.runMutation(api.mutations.upsertPivotLevels, pivot);
        results.push(id);
      }

      return new Response(
        JSON.stringify({
          success: true,
          count: results.length,
          pivotIds: results,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error: any) {
      return new Response(
        JSON.stringify({ error: error.message || "Internal server error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }),
});

// ── GET /api/health — Health check ───────────────────────────────────
http.route({
  path: "/api/health",
  method: "GET",
  handler: httpAction(async () => {
    return new Response(
      JSON.stringify({ status: "healthy", service: "convex-trinetra" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }),
});

export default http;
