import { Container } from "./styles";

export function Button({title, loading= false,...rest}) {
  return(

  
   <Container type="button"
   disabled= {loading}
   {...rest}>
    {/* deixar outras propriedades não explicitas dentro do rest */}
    {loading ? 'Carregando...': title}
    </Container>
  )
}
