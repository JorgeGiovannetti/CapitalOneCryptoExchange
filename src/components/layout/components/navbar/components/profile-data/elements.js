import styled from 'styled-components';
import CommonAvatar from 'blockdemy-ui/avatar';
import RoundKeyboardArrowDown from 'react-md-icon/dist/RoundKeyboardArrowDown';

const Text = styled.div`
  font-size: 0.55rem;
  letter-spacing: 0.2px;
  color: ${props => props.theme.colors.default};
  flex-flow: row wrap;
  align-items: center;
  text-transform: initial;
  text-align: left;
  white-space: nowrap;

  ${props => props.theme.media.phone`
    display: none;
  `}
`;

const Name = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 0.85rem;
  display: inline-flex;
  font-weight: 500;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  ${props => props.theme.media.phone`
    width: 70px;
  `}
`;

const DownIcon = styled(RoundKeyboardArrowDown)`
  font-size: 25px;
  color: ${props => props.theme.colors.default};
  cursor: pointer;
  cursor: pointer;
  flex-shrink: 0;
`;

const Break = styled.div`
  flex-basis: 100%;
  width: 0px;
  height: 0px;
  overflow: hidden;
`;

const Divider = styled.div`
  height: 25px;
  width: 1px;
  background-color: ${props => props.theme.colors.lightGrey};
  margin: auto 20px;

  ${props => props.theme.media.tablet`
    display: none;
  `}
`;

const Avatar = styled(CommonAvatar)`
  margin-right: 10px;

  ${props => props.theme.media.phone`
    margin-right: 0px;
  `}
`;

export { Profile, Name, Text, DownIcon, Break, Divider, Avatar };
