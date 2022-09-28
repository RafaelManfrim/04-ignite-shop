import { NextApiRequest, NextApiResponse } from "next";
import { BagItem } from "../../contexts/BagContext";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: { message: 'Method not allowed' } })
  }

  const { products }: { products: BagItem[] } = req.body

  if (!products) {
    return res.status(400).json({ error: { message: 'Products need to be provided' } })
  }

  const cancel_url = `${process.env.NEXT_URL}/`
  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url,
    success_url,
    mode: 'payment',
    line_items: products.map(product => {
      return {
        price: product.defaultPriceId,
        quantity: product.quantity
      }
    }),
  })

  return res.status(201).json({ checkoutUrl: checkoutSession.url })
}