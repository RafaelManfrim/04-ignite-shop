import { AppProps } from "next/app"
import { Header } from "../components/Header"

import { BagProvider } from "../contexts/BagContext"

import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BagProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </BagProvider>
  )
}
