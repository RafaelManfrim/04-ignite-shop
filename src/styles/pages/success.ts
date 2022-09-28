import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  section: {
    display: "flex",
    gap: '1rem',
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "5rem",
    display: 'block',
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.2s",

    '&:hover': {
      color: "$green300",
    }
  }
})

export const ImageContainer = styled("div", {
  width: '100%',
  maxWidth: 130,
  height: 145,
  marginTop: '4rem',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  padding: '0.25rem',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    objectFit: 'cover',
  }
})