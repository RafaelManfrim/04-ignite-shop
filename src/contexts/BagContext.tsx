import { useRouter } from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface BagContextData {
  isOpen: boolean
  toggleBag: () => void
  closeBag: () => void
}

const BagContext = createContext({} as BagContextData)

interface BagProviderProps {
  children: ReactNode
}

export function BagProvider({ children }: BagProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { asPath } = useRouter()

  function toggleBag() {
    setIsOpen((state) => !state)
  }

  function closeBag() {
    setIsOpen(false)
  }

  useEffect(() => {
    closeBag()
  }, [asPath])

  return (
    <BagContext.Provider value={{ isOpen, toggleBag, closeBag }}>
      {children}
    </BagContext.Provider>
  )
}

export function useBag() {
  return useContext(BagContext)
}