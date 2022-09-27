import { styled } from "../../styles"

export const DrawerContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  height: '100%',
  gap: '1rem',
  padding: '1.5rem',
  background: '$gray800',

  '>strong': {
    fontSize: '$md',
  },
})

export const CloseButton = styled('button', {
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  lineHeight: 0,
  alignSelf: 'flex-end',

  '>svg': {
    color: '$gray300',
  },
})

export const ItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const BagItem = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '>img': {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    width: 100,
    height: 100,
    borderRadius: 6,
    marginRight: '1rem',
  },

  '>div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    '>span': {
      fontSize: '$md',
      color: '$gray300',
    },

    '>strong': {
      fontSize: '$md',
      color: '$gray100',
    },

    '>button': {
      marginTop: '1rem',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      lineHeight: 0,
      textAlign: 'left',
      color: '$green500',
      fontWeight: 'bold',
      fontSize: '$sm',
      transition: 'color 0.2s',

      '&:hover': {
        color: '$green300',
      }
    }
  }
})

export const BagInformationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  margin: '1rem 0'
})

export const QuantityInformation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const PriceInformation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const CheckoutButton = styled('button', {
  width: '100%',
  height: 48,
  borderRadius: 6,
  background: '$green500',
  border: 'none',
  color: '$gray100',
  fontSize: '$md',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background 0.2s ease-in-out',

  '&:disabled': {
    opacity: 0.8,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
  }
})