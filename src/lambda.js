export async function handler() {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `My secret key is ${process.env.STRIPE_SECRET}.`,
  };
}
