import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: 1180,
  padding: '2rem 0',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  div: {
    position: 'relative',


    button: {
      width: 48,
      height: 48,
      borderRadius: 6,
      background: '$gray800',
      border: 'none',
      padding: 12,
      lineHeight: 0,
      cursor: 'pointer',
    },
    span: {
      position: 'absolute',
      top: -8,
      right: -8,
      height: 24,
      width: 24,
      background: '$green500',
      color: '$gray100',
      borderRadius: '50%',
      fontSize: '0.75rem',
      lineHeight: '130%',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
})

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

export const ItemsContainer = styled('div', {})

export const BagItem = styled('div', {})

export const BagInformationContainer = styled('div', {})

export const QuantityInformation = styled('div', {})

export const PriceInformation = styled('div', {})

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

  '&:hover': {
    background: '$green300',
  }
})