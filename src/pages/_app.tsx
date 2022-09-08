import { AppProps } from "next/app"
import Image from "next/future/image"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src= {logoImg.src} width={130} height={52} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container> 
  )
}
