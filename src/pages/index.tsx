import Image from "next/future/image"
import { HomeContainer, Product } from "../styles/pages/home"

import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from "../assets/tshirt1.png"
import camiseta2 from "../assets/tshirt2.png"
import camiseta3 from "../assets/tshirt3.png"
import camiseta4 from "../assets/tshirt4.png"

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1.src} width={520} height={480} alt="" />
        <footer>
          <strong>camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2.src} width={520} height={480} alt="" />
        <footer>
          <strong>camiseta 2</strong>
          <span>R$ 64,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3.src} width={520} height={480} alt="" />
        <footer>
          <strong>camiseta 3</strong>
          <span>R$ 74,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta4.src} width={520} height={480} alt="" />
        <footer>
          <strong>camiseta 4</strong>
          <span>R$ 69,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
