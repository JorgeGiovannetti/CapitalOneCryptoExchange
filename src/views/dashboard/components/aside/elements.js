import styled from "styled-components";
import Input from "blockdemy-ui/input";
import Button from "blockdemy-ui/button";
import RoundFileCopy from "react-md-icon/dist/RoundFileCopy";

const Container = styled.div`
  width: 300px;
  padding-top: 1rem;
  height: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 1000;
  padding: 20px;
  background: #fff;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  ${props => props.theme.media.tablet`
    width: 50px;
  `}
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`;

const Icon = styled.img`
  margin-right: 15px;
  width: 15px;
  height: 15px;
`;

const Divider = styled.div`
  border: 0.5px solid ${props => props.theme.colors.veryLightGrey};
  margin: 10px 0;
`;

const EthAddress = styled(Input)`
  input {
    padding: 5px;
    font-size: 9px;
    font-color: ${props => props.theme.colors.lightGrey};
    text-align: center;
    border: 0;
  }
`;

const CopyIcon = styled(RoundFileCopy)`
  font-size: 20px;
  margin-right: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    font-size: 15px;
  }
`

const CopyBtn = styled(Button)`
  :hover{
    background-color: lightGrey;
  }
`

export { Container, PriceContainer, Icon, Divider, EthAddress, CopyIcon, InputContainer, CopyBtn };
