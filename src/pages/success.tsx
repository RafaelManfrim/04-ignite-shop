import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    name: string;
    imageUrl: string;
    quantity: number;
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const totalOfProducts = products.reduce((acc, product) => {
    return acc + product.quantity
  }, 0)

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>
        <section>
          {products.map(product => (
            <ImageContainer key={product.id}>
              <Image
                src={product.imageUrl}
                width={120}
                height={110}
                alt=""
              />
            </ImageContainer>
          ))}
        </section>
        <p>Uhull <strong>{customerName}</strong>, sua compra de {totalOfProducts} {totalOfProducts === 1 ? 'camiseta' : 'camisetas'} já está a caminho da sua casa. </p>
        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details.name;

  const products = session.line_items.data.map((product) => {
    const productExtend = product.price.product as Stripe.Product;

    return {
      id: productExtend.id,
      name: productExtend.name,
      imageUrl: productExtend.images[0],
      quantity: product.quantity
    }
  })

  return {
    props: {
      customerName,
      products
    }
  }
}