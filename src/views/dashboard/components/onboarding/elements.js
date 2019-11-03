import styled from "styled-components";
import { Card as CommonCard } from "blockdemy-ui/card";

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled(CommonCard)`
  overflow-x: auto;
`;

export { Image, Card };
