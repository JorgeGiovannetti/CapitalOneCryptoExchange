import React, { Component, Fragment } from "react";
import Typography from "blockdemy-ui/typography";
import { Card, CardBody } from "blockdemy-ui/card";
import { List, ListItem, ListItemText } from "blockdemy-ui/list";
import Avatar from "blockdemy-ui/avatar";
import Box from "blockdemy-ui/box";
import Loader, { LoaderContainer } from "blockdemy-ui/loader";
import Pill from "blockdemy-ui/pill";

class Prices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount = async () => {
    const { getPrices } = this.props;
    await getPrices();
    this.setState({ loading: false });
  };

  render() {
    const { ETH, ETC, DAI, BAT, USDT, REP } = this.props;
    const { loading } = this.state;
    return (
      <Fragment>
        <Card>
          <CardBody>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={10}
            >
              <Typography variant="headingTitle">Prices</Typography>
              <Typography variant="muted">USD</Typography>
            </Box>
            {loading ? (
              <LoaderContainer>
                <Loader my={60} color="info" />
              </LoaderContainer>
            ) : (
              <List>
                <ListItem>
                  <Avatar src="/static/images/currencies/ethereum.png" />
                  <ListItemText
                    primary={`$${ETH.USD.toFixed(2).toLocaleString()} USD`}
                    secondary="Ethereum"
                  />
                  <Pill
                    variant="soft"
                    size="small"
                    color={ETH.growth > 0 ? "success" : "danger"}
                  >
                    {ETH.growth.toFixed(2).toLocaleString()}%
                  </Pill>
                  <Typography
                    color={ETH.growth > 0 ? "success" : "danger"}
                    fontSize="8px"
                    ml={5}
                  >
                    last 24 hrs
                  </Typography>
                </ListItem>
                <ListItem>
                  <Avatar src="/static/images/currencies/ethereum-classic.png" />
                  <ListItemText
                    primary={`$${ETC.USD.toFixed(2).toLocaleString()} USD`}
                    secondary="Ethereum Classic"
                  />
                  <Pill
                    variant="soft"
                    size="small"
                    color={ETC.growth > 0 ? "success" : "danger"}
                  >
                    {ETC.growth.toFixed(2).toLocaleString()}%
                  </Pill>
                  <Typography
                    color={ETC.growth > 0 ? "success" : "danger"}
                    fontSize="8px"
                    ml={5}
                  >
                    last 24 hrs
                  </Typography>
                </ListItem>
                <ListItem>
                  <Avatar src="/static/images/currencies/dai.png" />
                  <ListItemText
                    primary={`$${DAI.USD.toFixed(2).toLocaleString()} USD`}
                    secondary="DAI"
                  />
                  <Pill
                    variant="soft"
                    size="small"
                    color={DAI.growth > 0 ? "success" : "danger"}
                  >
                    {DAI.growth.toFixed(2).toLocaleString()}%
                  </Pill>
                  <Typography
                    color={DAI.growth > 0 ? "success" : "danger"}
                    fontSize="8px"
                    ml={5}
                  >
                    last 24 hrs
                  </Typography>
                </ListItem>
                <ListItem>
                  <Avatar src="/static/images/currencies/basic-attention-token.svg" />
                  <ListItemText
                    primary={`$${BAT.USD.toFixed(2).toLocaleString()} USD`}
                    secondary="BAT"
                  />
                  <Pill
                    variant="soft"
                    size="small"
                    color={BAT.growth > 0 ? "success" : "danger"}
                  >
                    {BAT.growth.toFixed(2).toLocaleString()}%
                  </Pill>
                  <Typography
                    color={BAT.growth > 0 ? "success" : "danger"}
                    fontSize="8px"
                    ml={5}
                  >
                    last 24 hrs
                  </Typography>
                </ListItem>
                <ListItem>
                  <Avatar src="/static/images/currencies/tether.png" />
                  <ListItemText
                    primary={`$${USDT.USD.toFixed(2).toLocaleString()} USD`}
                    secondary="USDT"
                  />
                  <Pill
                    variant="soft"
                    size="small"
                    color={USDT.growth > 0 ? "success" : "danger"}
                  >
                    {USDT.growth.toFixed(2).toLocaleString()}%
                  </Pill>
                  <Typography
                    color={USDT.growth > 0 ? "success" : "danger"}
                    fontSize="8px"
                    ml={5}
                  >
                    last 24 hrs
                  </Typography>
                </ListItem>
                <ListItem>
                  <Avatar src="/static/images/currencies/augur.png" />
                  <ListItemText
                    primary={`$${REP.USD.toFixed(2).toLocaleString()} USD`}
                    secondary="Augur"
                  />
                  <Pill
                    variant="soft"
                    size="small"
                    color={REP.growth > 0 ? "success" : "danger"}
                  >
                    {REP.growth.toFixed(2).toLocaleString()}%
                  </Pill>
                  <Typography
                    color={REP.growth > 0 ? "success" : "danger"}
                    fontSize="8px"
                    ml={5}
                  >
                    last 24 hrs
                  </Typography>
                </ListItem>
              </List>
            )}
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

export default Prices;
