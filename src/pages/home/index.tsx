// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";
import { About } from "@/components/About";

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Quem Sou Eu ?
            </Text>
            <Text type="body1" color="grey6">
              Sou um jovem desenvolvedor e estudante de Engenharia de Software
              na Faculdade de Informática e Administração Paulista (FIAP). Já
              participei de diversos projetos Full Stack, resolvendo problemas de
              alto nível e desenvolvendo habilidades.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaContent>
              <Text
                as="h3"
                type="heading2"
                color="grey1"
                css={{ marginBottom: "$2" }}
              >
                Projetos
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
