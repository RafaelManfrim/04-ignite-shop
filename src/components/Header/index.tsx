import Image from "next/future/image"
import { Handbag } from "phosphor-react"
import Link from "next/link"

import logoImg from "../../assets/logo.svg"
import { useBag } from "../../contexts/BagContext"
import { HeaderContainer } from "./styles"

export function Header() {
  const { toggleBag, bagItems } = useBag()

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg.src} width={130} height={52} alt="" />
      </Link>
      <div>
        <button onClick={toggleBag}>
          <Handbag size={24} color="#8D8D99" />
        </button>
        {bagItems.length !== 0 && (
          <span>{bagItems.length}</span>
        )}
      </div>
    </HeaderContainer>
  )
}