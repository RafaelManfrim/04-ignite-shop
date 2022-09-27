import { useRouter } from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type Item = {
  id: string
  name: string
  price: number
  imageUrl: string
}

type BagItem = Item & {
  quantity: number
}

interface BagContextData {
  isOpen: boolean
  bagItems: BagItem[]
  isCreatingCheckoutSession: boolean
  toggleBag: () => void
  closeBag: () => void
  addItemToBag: (item: Item) => void
  removeItemFromBag: (id: string) => void
  finalizeOrder: () => void
}

const BagContext = createContext({} as BagContextData)

interface BagProviderProps {
  children: ReactNode
}

export function BagProvider({ children }: BagProviderProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const [bagItems, setBagItems] = useState<BagItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const { asPath } = useRouter()

  function addItemToBag(item: Item) {
    const itemExistsInBag = bagItems.find(bagItem => bagItem.id === item.id)

    if (itemExistsInBag) {
      const updatedBagItems = bagItems.map(bagItem => {
        if (bagItem.id === item.id) {
          return {
            ...bagItem,
            quantity: bagItem.quantity + 1,
          }
        }

        return bagItem
      })

      setBagItems(updatedBagItems)
    } else {
      setBagItems([...bagItems, { ...item, quantity: 1 }])
    }
  }

  function removeItemFromBag(id: string) {
    setBagItems(bagItems.filter(item => item.id !== id))
  }

  async function finalizeOrder() {
    // STRIPE LOGIC
    // try {
    //   setIsCreatingCheckoutSession(true)
    //   const response = await axios.post('/api/checkout', {
    //     priceId: product.defaultPriceId
    //   })

    //   const { checkoutUrl } = response.data

    //   window.location.href = checkoutUrl
    // } catch (err) {
    //   alert("Falha ao redirecionar ao checkout!")
    //   setIsCreatingCheckoutSession(false)
    // }

    setBagItems([])
  }

  function toggleBag() {
    setIsOpen((state) => !state)
  }

  function closeBag() {
    setIsOpen(false)
  }

  useEffect(() => {
    const itemsStored = localStorage.getItem('@IgniteShop:bag')

    if (itemsStored) {
      setBagItems(JSON.parse(itemsStored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@IgniteShop:bag', JSON.stringify(bagItems))
  }, [bagItems])

  useEffect(() => {
    closeBag()
  }, [asPath])

  const providerValue = {
    isOpen,
    bagItems,
    isCreatingCheckoutSession,
    toggleBag,
    closeBag,
    addItemToBag,
    removeItemFromBag,
    finalizeOrder,
  }

  return (
    <BagContext.Provider value={providerValue}>
      {children}
    </BagContext.Provider>
  )
}

export function useBag() {
  return useContext(BagContext)
}