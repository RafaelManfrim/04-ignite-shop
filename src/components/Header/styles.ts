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
