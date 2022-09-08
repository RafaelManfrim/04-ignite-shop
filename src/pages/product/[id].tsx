import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Camiseta muito massa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum officiis excepturi pariatur ratione voluptatem hic a fugit, distinctio quisquam aperiam repellendus aliquam voluptatum doloribus optio tempora eligendi error, quibusdam possimus.</p>
        <button>Comprar</button>
      </ProductDetails>
    </ProductContainer>
  )
}