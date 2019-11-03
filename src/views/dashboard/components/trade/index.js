import React, { Component, Fragment } from "react";
import { Card, CardBody } from "blockdemy-ui/card";
import Box from "blockdemy-ui/box";
import Typography from "blockdemy-ui/typography";
import Select from "blockdemy-ui/select";

class Trade extends Component {
  render() {
    const { connected } = this.props;
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
                <Box display="grid" gridTemplateColumns="1fr 1fr">
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    mt={30}
                  >
                    <Box
                      maxWidth="60px"
                      as="img"
                      src="/static/images/currencies/dai.png"
                    />
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    mt={30}
                  >
                    <Box
                      maxWidth="60px"
                      as="img"
                      src="/static/images/currencies/ethereum.png"
                    />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </CardBody>
      </Card>
    );
  }
}

export default Trade;
