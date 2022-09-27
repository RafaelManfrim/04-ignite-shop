import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Stripe from "stripe";
import { useBag } from "../../contexts/BagContext";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import { numberFormatter } from "../../utils/formatters";

interface ProductProps {
  product: {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItemToBag } = useBag()

  console.log(product)

  function handleAddProductToBag() {
    addItemToBag(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{numberFormatter(product.price)}</span>
          <p>{product.description}</p>
          <button onClick={handleAddProductToBag}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        defaultPriceId: price.id,
        price: price.unit_amount / 100
      }
    },
    revalidate: 60 * 60 // 1 hour
  }
}