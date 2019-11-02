import styled from "styled-components";
import CommonButton from "blockdemy-ui/button";
import Typography from "blockdemy-ui/typography";

const Container = styled.div`
  height: 66px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Routes = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 10px;

  ${props => props.theme.media.tablet`
    display: none;
  `}
`;

const Route = styled(Typography)`
  margin: 0 15px;
  cursor: pointer;

  ${props =>
    props.active &&
    `
    color: ${props.theme.colors.secondary}
  `}

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const MenuButton = styled.button`
  display: none;
  color: ${props => props.theme.colors.default};
  cursor: pointer;
  font-size: 2rem;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  margin-left: 1rem;
  padding: 0;

  ${props => props.theme.media.tablet`
    display: flex;
  `}

  &:focus {
    outline: none;
  }
`;

const Button = styled(CommonButton)`
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 10px;
  padding: 0.425rem 0.85rem;
`;

const LogoContainer = styled.div`
  width: auto;
  height: 100%;
  padding: 10px 0;
  padding-top: 13px;
`;

const Logo = styled.img`
  height: 92%;
`;

export {
  Container,
  Content,
  Routes,
  Route,
  MenuButton,
  Button,
  LogoContainer,
  Logo
};
