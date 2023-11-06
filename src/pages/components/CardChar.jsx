import {
  CardContainer,
  ImageCard,
  TextBody,
  TextCard,
} from "../../styledComponents/StyledComponents";

// eslint-disable-next-line react/prop-types
function CardChar({image, name, status, location}) {
  return (
    <CardContainer>
      <ImageCard src={image} alt="image" />
      <TextCard>{name}</TextCard>
      <TextBody>
        <TextCard>{status}</TextCard>
        <TextCard>{location}</TextCard>
      </TextBody>
    </CardContainer>
  );
}

export default CardChar;
