import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { StyledDivAbout, StyledSectionAbout } from "./style";

export const About = () => {
  return (
    <StyledDivAbout>
      <Container>
        <Text as="h4" type="heading3" color="grey1">
          Sobre mim
        </Text>
        <StyledSectionAbout>
          <Text as="p" type="body1" color="grey2">
            Desde cedo, em minha infância, tive muito contato com a tecnologia.
            Posso dizer que sou grato por ter crescido em uma época em que a
            tecnologia estava em constante evolução e transformação, e por ter
            tido a oportunidade de acompanhar essa mudança de perto. Eu sempre
            gostei de desafios e de resolver problemas complexos, o que me levou
            a desenvolver habilidades de raciocínio lógico e a querer aprender a
            construir algoritmos que solucionassem diferentes situações de
            maneira mais ágil e eficaz. Sempre fui muito curioso e interessado
            em entender como as coisas funcionam. Quando tive meu primeiro
            contato efetivamente com a programação na Kenzie Academy, fiquei
            fascinado com a capacidade de controlarmos o computador para
            realizar diferentes tarefas e com as inúmeras possibilidades que a
            tecnologia nos proporciona. Desde então, me encontrei na área e
            iniciei juntamente com a Kenzie, uma faculdade de Engenharia de
            Software na FIAP, que certamente fará com que eu me aprofunde ainda
            mais nesse ramo. Possuo um bom conhecimento na área de Front End.
            Nas linguagens HTML, CSS, Javascript e Typescript. Tenho o domínio
            da biblioteca React e da prática de um Web Design Responsivo. Já
            realizei também, projetos utilizando tecnologias do Back End como:
            Banco de dados SQL (PostgreSQL), Express.js, Construção de APIs
            RESTful e Python.
          </Text>
        </StyledSectionAbout>
      </Container>
    </StyledDivAbout>
  );
};
