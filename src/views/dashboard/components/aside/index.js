import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Web3 from "web3";
import {
  Container,
  PriceContainer,
  Icon,
  Divider,
  EthAddress,
  CopyIcon,
  InputContainer
} from "./elements";
import Typography from "blockdemy-ui/typography";
import withUser from "components/providers/withUser";
import Button from "blockdemy-ui/button";
import Loader from "blockdemy-ui/loader";
import Avatar from "blockdemy-ui/avatar";
import { List, ListItem, ListItemText } from "blockdemy-ui/list";
import { toast } from "theme";
import Box from "blockdemy-ui/box";
import Tooltip from "blockdemy-ui/tooltip";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.web3 = new Web3(Web3.givenProvider, null, {});
    this.state = {
      loading: false,
      installOpen: false,
      connected: false
    };
  }

  connect = async () => {
    if (!this.web3.givenProvider) {
      this.setState({ installOpen: true });
    } else {
      try {
        this.setState({ loading: true });
        await window.ethereum.enable();
        const accounts = await this.web3.eth.getAccounts();
        this.setState({
          loading: false,
          connected: true,
          account: accounts[0]
        });
        console.log(accounts);
      } catch (err) {
        toast.info(
          "An error has occurred",
          "You need to connect your wallet to continue"
        );
        this.setState({ loading: false });
      }
    }
  };

  copyIdToClipboard = () => {
    navigator.clipboard.writeText(this.state.account);
  }

  render() {
    const { loading, connected, account } = this.state;
    return (
      <Container>
        <PriceContainer>
          <Typography variant="heading">Total</Typography>
          <Typography variant="d2">$13,532</Typography>
        </PriceContainer>
        {connected ? (
          <InputContainer>
            <EthAddress disabled value={account} />
            <Fragment>
              <Tooltip
                position="bottom"
                tag="Copy to clipboard"
              >
                <Button onClick={this.copyIdToClipboard} size="small" color="lighterGrey" variant="soft" mt={3} fullWidth>
                  <CopyIcon></CopyIcon>
                </Button>
              </Tooltip>

            </Fragment>
          </InputContainer>
        ) : (
            <Button
              variant="soft"
              mx="auto"
              color="primary"
              size="small"
              mt={10}
              onClick={this.connect}
            >
              {loading ? (
                <Loader color="primary" size="15" />
              ) : (
                  <Fragment>
                    <Icon src="/static/images/icons/metamask.svg" /> Connect
              </Fragment>
                )}
            </Button>
          )}
        <Typography mt={60} variant="muted">
          Currencies
        </Typography>
        <Divider />
        {connected ? (
          <List>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/capital-one.png" />
              <ListItemText primary="Capital One" secondary="$130" />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/ethereum.png" />
              <ListItemText primary="Ethereum" secondary="$13,000" />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/ethereum-classic.png" />
              <ListItemText primary="Ethereum Classic" secondary="$0" />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/dai.png" />
              <ListItemText primary="Dai" secondary="$192.0" />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/basic-attention-token.svg" />
              <ListItemText
                primary="Basic Attention Token"
                secondary="$122.2"
              />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/tether.png" />
              <ListItemText primary="Tether" secondary="$0" />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/augur.png" />
              <ListItemText primary="Augur" secondary="$122.2" />
            </ListItem>
          </List>
        ) : (
            <Fragment>
              <List>
                <ListItem clickable>
                  <Avatar src="/static/images/currencies/capital-one.png" />
                  <ListItemText primary="Capital One" secondary="$130" />
                </ListItem>
              </List>
              <Box p={30}>
                <Typography textAlign="center" variant="muted">
                  You need to enable your Ethereum wallet to see your crypto
                  balance
              </Typography>
              </Box>
            </Fragment>
          )}
      </Container>
    );
  }
}

export default withUser(withRouter(Aside));
