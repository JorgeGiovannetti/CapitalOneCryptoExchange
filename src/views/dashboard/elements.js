import styled from "styled-components";

const MainContainer = styled.div`
  margin-right: 280px;
  padding: 0px 20px;
  padding-bottom: 30px;
  padding-top: 20px;

  ${props => props.theme.media.tablet`
    margin-left: 50px;
  `}
`;

const Row = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${props => props.cols};
  margin-bottom: 10px;
`;

export { MainContainer, Row };
