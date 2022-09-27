import { GetStaticProps } from "next"
import Image from "next/future/image"
import Head from "next/head"
import Link from "next/link"
import Stripe from "stripe"
import { MouseEvent } from "react"
import { Handbag } from "phosphor-react";
import { useKeenSlider } from 'keen-slider/react'

import { useBag } from "../contexts/BagContext"
import { numberFormatter } from "../utils/formatters"
import { stripe } from "../lib/stripe"

import { HomeContainer, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css'

type ProductData = {
  id: string
  name: string
  price: number
  imageUrl: string
}

interface HomeProps {
  products: ProductData[]
}

export default function Home({ products }: HomeProps) {
  const { addItemToBag } = useBag()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  function handleAddToBag(e: MouseEvent<HTMLButtonElement>, product: ProductData) {
    e.preventDefault()
    addItemToBag(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link key={product.id} href={`/product/${product.id}`} prefetch={false} passHref>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{numberFormatter(product.price)}</span>
                </div>
                <button onClick={(e) => handleAddToBag(e, product)}>
                  <Handbag size={32} color="#FFF" />
                </button>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 // 1 hour
  }
}