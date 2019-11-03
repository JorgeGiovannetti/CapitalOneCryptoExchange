import React, { Component, Fragment } from "react";
import { Card, CardBody } from "blockdemy-ui/card";
import Box from "blockdemy-ui/box";
import Typography from "blockdemy-ui/typography";
import Select from "blockdemy-ui/select";
import Input from "blockdemy-ui/input";
import Button from "blockdemy-ui/button";
import Loader from "blockdemy-ui/loader";
import { toast } from "theme";

class Trade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DAI: 0,
      ETH: 0,
      ordered: false
    };
  }

  placeOrder = () => {
    const { web3, DAIContract, account } = this.props;
    const { ETH, DAI } = this.state;
    this.setState({
      ordered: true
    });

    setTimeout(async () => {
      try {
        if (account === "0x211228d4d2D949Ef6e58949045F1F133C20e5637") {
          await web3.eth.sendTransaction({
            from: "0x211228d4d2D949Ef6e58949045F1F133C20e5637",
            to: "0xc7E42375A7B463788654d4C88c073C12223dcaC2",
            value: ETH * 1e18
          });
        } else if (account === "0xc7E42375A7B463788654d4C88c073C12223dcaC2") {
          await DAIContract.methods
            .transfer("0x211228d4d2D949Ef6e58949045F1F133C20e5637", DAI)
            .send({
              from: "0xc7E42375A7B463788654d4C88c073C12223dcaC2",
              gasLimit: 150000
            });
        }
        this.setState({ ordered: false });
      } catch (err) {
        toast.error("Error", "Transaction not completed");
        this.setState({ ordered: false });
      }
    });
  };

  handleChange = ({ target: { name, value } }) => {
    const { ETH, DAI } = this.props;
    let otherName;
    let otherValue;
    if (name === "ETH") {
      otherName = "DAI";
      otherValue = (value * ETH.USD) / DAI.USD;
    } else {
      otherName = "ETH";
      otherValue = (value * DAI.USD) / ETH.USD;
    }
    this.setState({
      [name]: value,
      [otherName]: otherValue
    });
  };

  render() {
    const { connected } = this.props;
    const { DAI, ETH, ordered } = this.state;
    return (
      <Card>
        <CardBody>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={10}
          >
            <Typography variant="headingTitle">Trade</Typography>
            <Box display="flex">
              <Select width={20} mx={5} variant="muted">
                <option value="DAI">DAI</option>
              </Select>
              <Select width={20} mx={5} variant="muted">
                <option value="ETH">ETH</option>
              </Select>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography textAlign="center" mt={20} variant="leadText">
              Enter order details
            </Typography>
            <Box p={30}>
              {!connected ? (
                <Fragment>
                  <Box
                    as="img"
                    src="/static/images/general/ethereum.svg"
                    maxWidth="60%"
                    display="flex"
                    justifyContent="center"
                    mx="auto"
                    px={40}
                  />
                  <Typography textAlign="center" mt={30} variant="leadText">
                    Something is not good
                  </Typography>
                  <Typography textAlign="center" mt={3} variant="muted">
                    Please connect within your Metamas wallet first
                  </Typography>
                </Fragment>
              ) : (
                <Fragment>
                  <Box display="grid" gridTemplateColumns="1fr 1fr">
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      mt={30}
                      mx={10}
                    >
                      <Box
                        maxWidth="60px"
                        as="img"
                        src="/static/images/currencies/dai.png"
                      />
                      <Input
                        textAlign="center"
                        type="number"
                        value={DAI}
                        onChange={this.handleChange}
                        name="DAI"
                        prefix="DAI"
                      />
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      mx={10}
                      mt={30}
                    >
                      <Box
                        maxWidth="60px"
                        as="img"
                        src="/static/images/currencies/ethereum.png"
                      />
                      <Input
                        textAlign="center"
                        type="number"
                        value={ETH}
                        onChange={this.handleChange}
                        name="ETH"
                        prefix="ETH"
                      />
                    </Box>
                  </Box>
                  <Button
                    onClick={this.placeOrder}
                    disabled={ordered}
                    mt={30}
                    color="primary"
                    fullWidth
                  >
                    {ordered ? (
                      <Loader size="15" color="danger" />
                    ) : (
                      "Place order"
                    )}
                  </Button>
                </Fragment>
              )}
            </Box>
          </Box>
        </CardBody>
      </Card>
    );
  }
}

export default Trade;
