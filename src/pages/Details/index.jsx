
import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText} from '../../components/ButtonText'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header/>
      <main>
        <Content>

       
      <ButtonText title="Excluir Nota"/>
      <h1> Introdução ao React </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis repellendus nulla dicta temporibus natus blanditiis, esse eum obcaecati deleniti aut consectetur similique sit cum. Explicabo officia id quidem placeat illum?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis repellendus nulla dicta temporibus natus blanditiis, esse eum obcaecati deleniti aut consectetur similique sit cum. Explicabo officia id quidem placeat illum?
              </p>
     <Section title="Links úteis">
      <Links>
        <li><a href="#">https://rocketseat.com.br</a></li>
        <li><a href="#">https://rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>

        </Section>
      {/* <Button title="Entrar" loading/>  */}
      {/* //para outra propriedade não precisa colocar vírgula e quando é booleana é só colocar ela  */}
  
      <Button title="Voltar"/>
      </Content>
      </main>
      </Container>
  );
}

