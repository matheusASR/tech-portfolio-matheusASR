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
            Sempre fui muito curioso e interessado em entender como as coisas
            funcionam. Quando tive meu primeiro contato efetivamente com a
            programação, fiquei fascinado com a capacidade de controlarmos o
            computador para realizar diferentes tarefas e com as inúmeras
            possibilidades que a tecnologia nos proporciona. Possuo um bom
            conhecimento na área de Front End. Nas linguagens HTML, CSS,
            Javascript e Typescript. Tenho o domínio da biblioteca React e da
            prática de um Web Design Responsivo. Já realizei também, projetos
            utilizando tecnologias do Back End como: Banco de dados SQL
            (PostgreSQL), Express.js, Construção de APIs RESTful e Python.
          </Text>
        </StyledSectionAbout>
      </Container>
    </StyledDivAbout>
  );
};
