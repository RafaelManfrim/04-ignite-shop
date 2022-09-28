import { X } from "phosphor-react"
import dynamic from 'next/dynamic'
import Image from "next/future/image";
const Drawer = dynamic(() => import('react-modern-drawer'))

import { numberFormatter } from "../../utils/formatters"
import { useBag } from "../../contexts/BagContext";

import {
  BagInformationContainer,
  BagItem,
  CheckoutButton,
  CloseButton,
  DrawerContainer,
  ItemsContainer,
  PriceInformation,
  QuantityInformation
} from './styles';

import 'react-modern-drawer/dist/index.css'

export function Bag() {
  const { isOpen, toggleBag, closeBag, bagItems, removeItemFromBag, finalizeOrder, isCreatingCheckoutSession } = useBag()

  const totalInBagPrice = bagItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <Drawer open={isOpen} onClose={toggleBag} direction="right" size="25vw">
      <DrawerContainer>
        <CloseButton onClick={closeBag}>
          <X size={24} />
        </CloseButton>
        <strong>Sacola de compras</strong>
        <ItemsContainer>
          {bagItems.map(item => (
            <BagItem key={item.id}>
              <Image src={item.imageUrl} alt={item.name} width={100} height={100} />
              <div>
                <span>{item.name}</span>
                <strong>{item.quantity}x {numberFormatter(item.price)}</strong>
                <button onClick={() => removeItemFromBag(item.id)}>Remover</button>
              </div>
            </BagItem>
          ))}
        </ItemsContainer>
        <BagInformationContainer>
          <QuantityInformation>
            <strong>Quantidade</strong>
            <span>{bagItems.length} {bagItems.length === 1 ? 'item' : 'itens'}</span>
          </QuantityInformation>
          <PriceInformation>
            <strong>Valor total</strong>
            <span>{numberFormatter(totalInBagPrice)}</span>
          </PriceInformation>
        </BagInformationContainer>

        <CheckoutButton
          disabled={bagItems.length === 0 || isCreatingCheckoutSession}
          onClick={finalizeOrder}
        >
          Finalizar compra
        </CheckoutButton>
      </DrawerContainer>
    </Drawer>
  );
}
