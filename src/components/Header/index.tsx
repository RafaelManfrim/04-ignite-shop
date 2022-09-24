
import Image from "next/future/image"
import { Handbag, X } from "phosphor-react"
import dynamic from 'next/dynamic'

import logoImg from "../../assets/logo.svg"
import { BagInformationContainer, BagItem, CheckoutButton, CloseButton, DrawerContainer, HeaderContainer, ItemsContainer, PriceInformation, QuantityInformation } from "./styles"
import { useBag } from "../../contexts/BagContext"

const Drawer = dynamic(() => import('react-modern-drawer'))

import 'react-modern-drawer/dist/index.css'
import Link from "next/link"

export function Header() {
  const { isOpen, toggleBag, closeBag } = useBag()

  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <Image src={logoImg.src} width={130} height={52} alt="" />
        </Link>
        <div>
          <button onClick={toggleBag}>
            <Handbag size={24} color="#8D8D99" />
          </button>
          {[].length == 0 && (
            <span>{0}</span>
          )}
        </div>
      </HeaderContainer>
      <Drawer open={isOpen} onClose={toggleBag} direction="right" size="25vw">
        <DrawerContainer>
          <CloseButton onClick={closeBag}>
            <X size={24} />
          </CloseButton>
          <strong>Sacola de compras</strong>
          <ItemsContainer>
            <BagItem></BagItem>
            <BagItem></BagItem>
            <BagItem></BagItem>
          </ItemsContainer>
          <BagInformationContainer>
            <QuantityInformation>
              <strong>Quantidade</strong>
              <span>{0} itens</span>
            </QuantityInformation>
            <PriceInformation>
              <strong>Valor total</strong>
              <span>R$ {0}</span>
            </PriceInformation>
          </BagInformationContainer>

          <CheckoutButton>Finalizar compra</CheckoutButton>
        </DrawerContainer>
      </Drawer>
    </>
  )
}