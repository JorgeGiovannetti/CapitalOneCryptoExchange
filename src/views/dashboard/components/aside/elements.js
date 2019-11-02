import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  padding-top: 1rem;
  height: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: #fff;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  ${props => props.theme.media.tablet`
    width: 50px;
  `}
`;

export { Container };
