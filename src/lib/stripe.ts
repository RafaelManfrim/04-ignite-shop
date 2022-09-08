import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2022-08-01",
  appInfo: {
    name: "Ignite Shop"
  }
})
