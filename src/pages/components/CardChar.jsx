import {
  CardContainer,
  ImageCard,
  TextBody,
  TextCard,
} from "../../styledComponents/StyledComponents";

function CardChar() {
  return (
    <CardContainer>
      <ImageCard src="https://picsum.photos/200/300" alt="image" />
      <TextCard>pj</TextCard>
      <TextBody>
        <TextCard>vivo</TextCard>
        <TextCard>desconocido</TextCard>
      </TextBody>
    </CardContainer>
  );
}

export default CardChar;
