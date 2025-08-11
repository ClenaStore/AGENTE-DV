export const config = { runtime: "edge" };

export default async function handler(request: Request) {
  return new Response(JSON.stringify({ status: "ok", message: "Edge Function funcionando na Vercel v2!" }), {
    headers: { "content-type": "application/json" }
  });
}
