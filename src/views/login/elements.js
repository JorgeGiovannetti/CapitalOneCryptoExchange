import styled from "styled-components";
import Box from "blockdemy-ui/box";

const Header = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.colors.veryLightGrey};
  display: flex;
  justify-content: center;
  padding: 10px;
`

export { Header };
