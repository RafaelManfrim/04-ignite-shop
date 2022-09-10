import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: '1180px',
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '576px',
  height: 656,
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    fontSize: '$2xl',
    display: 'block',
    marginTop: '1rem',
    color: '$green300',
  },

  p: {
    fontSize: '$md',
    color: '$gray300',
    marginTop: '2.5rem',
    lineHeight: 1.6,
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    color: '$white',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'backgroundColor 0.2s ease-out',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  }
})
