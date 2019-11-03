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
import abi from "./abi.json";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.web3 = new Web3(Web3.givenProvider, null, {});
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
    if (!this.web3.givenProvider) {
      this.setState({ installOpen: true });
    } else {
      try {
        this.setState({ loading: true });
        await window.ethereum.enable();
        const accounts = await this.web3.eth.getAccounts();
        await this.setState({
          loading: false,
          connected: true,
          account: accounts[0]
        });

        this.setState({
          ETHBalance: await this.web3.eth.getBalance(accounts[0])
        });

        const { account } = this.state;

        this.DAI = new this.web3.eth.Contract(
          abi,
          "0xf4578936f4d766b6626ffd519197cd02affcdde4"
        );

        this.BAT = new this.web3.eth.Contract(
          abi,
          "0x381360180f3da784a32bdf97662a880b5c6bb37a"
        );

        this.USDT = new this.web3.eth.Contract(
          abi,
          "0xd1e2784359613d3245324405c2d977e59f98235c"
        );

        this.REP = new this.web3.eth.Contract(
          abi,
          "0x987285956d76d2a07377ec8966963218837a6bbf"
        );

        this.DAI.methods
          .balanceOf(account)
          .call({ from: account }, (error, result) =>
            this.setState({ DAIBalance: result })
          );
        this.BAT.methods
          .balanceOf(account)
          .call({ from: account }, (error, result) =>
            this.setState({ BATBalance: result })
          );
        this.USDT.methods
          .balanceOf(account)
          .call({ from: account }, (error, result) =>
            this.setState({ USDTBalance: result })
          );
        this.REP.methods
          .balanceOf(account)
          .call({ from: account }, (error, result) =>
            this.setState({ REPBalance: result })
          );
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
    this.setState({ capitalOneBalance: total });
  }

  copyIdToClipboard = () => {
    navigator.clipboard.writeText(this.state.account);
  };

  componentDidMount = async () => {
    await this.getCapitalOneBalance();
  };

  render() {
    const {
      loading,
      connected,
      account,
      capitalOneBalance,
      ETHBalance,
      DAIBalance,
      BATBalance,
      USDTBalance,
      REPBalance
    } = this.state;

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
              <ListItemText primary="Capital One" secondary={`$${capitalOneBalance}`} />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/ethereum.png" />
              <ListItemText primary="Ethereum" secondary={`$${ETHBalance}`} />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/ethereum-classic.png" />
              <ListItemText primary="Ethereum Classic" secondary="$0" />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/dai.png" />
              <ListItemText primary="Dai" secondary={`$${DAIBalance}`} />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/basic-attention-token.svg" />
              <ListItemText
                primary="Basic Attention Token"
                secondary={`$${BATBalance}`}
              />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/tether.png" />
              <ListItemText primary="Tether" secondary={`$${USDTBalance}`} />
            </ListItem>
            <ListItem clickable>
              <Avatar src="/static/images/currencies/augur.png" />
              <ListItemText primary="Augur" secondary={`$${REPBalance}`} />
            </ListItem>
          </List>
        ) : (
            <Fragment>
              <List>
                <ListItem clickable>
                  <Avatar src="/static/images/currencies/capital-one.png" />
                  <ListItemText primary="Capital One" secondary={`$${capitalOneBalance}`} />
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
