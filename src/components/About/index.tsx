import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { StyledDivAbout, StyledSectionAbout } from "./style";

export const About = () => {
  return (
    <StyledDivAbout>
      <Container>
        <Text as="h4" type="heading3" color="grey1">
          Minhas Experiências
        </Text>
        <StyledSectionAbout>
          <Text as="p" type="body1" color="grey2">
            Tenho expertise na biblioteca React e nos frameworks React Native e
            Next.js. Ao longo da minha trajetória, realizei diversos projetos
            Full Stack, utilizando tecnologias como PostgreSQL, Express.js e
            Python (Django). Minha paixão pela tecnologia e pelo desenvolvimento
            de software me impulsiona a sempre buscar novas oportunidades de
            aprendizado e crescimento. Estou constantemente aprimorando minhas
            habilidades e me mantendo atualizado com as últimas tendências do
            setor. Estou pronto para enfrentar novos desafios e contribuir de
            forma significativa em projetos inovadores.
          </Text>
        </StyledSectionAbout>
      </Container>
    </StyledDivAbout>
  );
};
