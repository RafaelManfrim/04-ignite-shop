import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$primary',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 0,
  color: 'white',
  fontSize: '1.2rem',
  cursor: 'pointer',
  '&:hover': {
    filter: 'brightness(0.9)'
  },
})

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Teste</Button>
    </div>
  )
}
