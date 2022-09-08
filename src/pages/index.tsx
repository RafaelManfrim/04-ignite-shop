import Image from "next/future/image"
import { HomeContainer, Product } from "../styles/pages/home"

import camiseta1 from "../assets/tshirt1.png"
import camiseta2 from "../assets/tshirt2.png"
import camiseta3 from "../assets/tshirt3.png"
import camiseta4 from "../assets/tshirt4.png"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1.src} width={520} height={480} alt="" />
        <footer>
          <strong>camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2.src} width={520} height={480} alt="" />
        <footer>
          <strong>camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
