import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body

  if (req.method !== "POST") {
    return res.status(405).json({ error: { message: 'Method not allowed' } })
  }

  if (!priceId) {
    return res.status(400).json({ error: { message: 'Price not found' } })
  }

  const cancel_url = `${process.env.NEXT_URL}/`
  const success_url = `${process.env.NEXT_URL}/success`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url,
    success_url,
    mode: 'payment',
    line_items: [{
      price: priceId,
      quantity: 1,
    }],
  })

  return res.status(201).json({ checkoutUrl: checkoutSession.url })
}