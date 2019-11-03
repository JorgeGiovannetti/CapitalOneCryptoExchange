import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  PriceContainer,
  Icon,
  Divider,
  EthAddress,
  CopyIcon,
  InputContainer,
  CopyBtn
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
    this.state = {
      loading: false,
      installOpen: false,
      connected: false,
      capitalOneBalance: 0,
      DAIBalance: 0,
      BATBalance: 0,
      USDTalance: 0,
      REPBalance: 0
    };
  }

  connect = async () => {
    if (!this.props.web3.givenProvider) {
      this.setState({ installOpen: true });
    } else {
      try {
        const { setConnection, setAccount, setBalance } = this.props;
        this.setState({ loading: true });
        await window.ethereum.enable();
        const accounts = await this.props.web3.eth.getAccounts();
        this.setState({
          loading: false
        });

        setConnection(true);
        await setAccount(accounts[0]);
        setBalance();
      } catch (err) {
        toast.info(
          "An error has occurred",
          "You need to connect your wallet to continue"
        );
        this.setState({ loading: false });
      }
    }
  };

  getCapitalOneBalance = () => {
    let total = 0;
    for (let i = 0; i < this.props.user.accounts.length; i++) {
      total += this.props.user.accounts[i].balance;
    }
    console.log(this.props.user.accounts);
    this.setState({ capitalOneBalance: total });
  };

  copyIdToClipboard = () => {
    navigator.clipboard.writeText(this.state.account);
  };

  componentDidMount = async () => {
    await this.getCapitalOneBalance();
  };

  render() {
    const { loading, capitalOneBalance } = this.state;
    const {
      connected,
      ETHBalance,
      DAIBalance,
      BATBalance,
      USDTBalance,
      REPBalance,
      ETH,
      DAI,
      REP,
      BAT,
      USDT,
      account
    } = this.props;

    return (
      <Container>
        <PriceContainer>
          <Typography variant="heading">Total</Typography>
          <Typography variant="d2">$13,532</Typography>
        </PriceContainer>
        {connected ? (
          <InputContainer>
            <EthAddress disabled value={account} />
            <Tooltip position="bottom" tag="Copy to clipboard">
              <CopyBtn
                onClick={this.copyIdToClipboard}
                size="small"
                color="lighterGrey"
                variant="soft"
                mt={3}
                fullWidth
              >
                <CopyIcon></CopyIcon>
              </CopyBtn>
            </Tooltip>
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
              <ListItemText
                primary="Capital One"
                secondary={`$${capitalOneBalance}`}
              />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/ethereum.png" />
              <ListItemText
                primary="Ethereum"
                secondary={`$${ETHBalance.toFixed(2)} ETH - $${(
                  ETHBalance * ETH.USD
                ).toFixed(2)} USD`}
              />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/ethereum-classic.png" />
              <ListItemText
                primary="Ethereum Classic"
                secondary="$0 ETC- $0 USD"
              />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/dai.png" />
              <ListItemText
                primary="Dai"
                secondary={`$${DAIBalance} DAI - $${(
                  DAIBalance * DAI.USD
                ).toFixed(2)} USD`}
              />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/basic-attention-token.svg" />
              <ListItemText
                primary="Basic Attention Token"
                secondary={`$${BATBalance} BAT - $${(
                  BATBalance * BAT.USD
                ).toFixed(2)} USD`}
              />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/tether.png" />
              <ListItemText
                primary="Tether"
                secondary={`$${USDTBalance} USDT - $${(
                  USDTBalance * USDT.USD
                ).toFixed(2)} USD`}
              />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/augur.png" />
              <ListItemText
                primary="Augur"
                secondary={`$${REPBalance} REP - $${(
                  REPBalance * REP.USD
                ).toFixed(2)} USD`}
              />
            </ListItem>
          </List>
        ) : (
          <Fragment>
            <List>
              <ListItem clickable>
                <Avatar src="/static/images/currencies/capital-one.png" />
                <ListItemText
                  primary="Capital One"
                  secondary={`$${capitalOneBalance}`}
                />
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
