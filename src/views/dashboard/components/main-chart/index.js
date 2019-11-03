import React, { Component } from "react";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Card, CardBody } from "blockdemy-ui/card";
import Typography from "blockdemy-ui/typography";
import Avatar from "blockdemy-ui/avatar";
import { getTheme } from "theme";
import Box from "blockdemy-ui/box";
import { krakenApi } from "utils/api/axios";

const theme = getTheme();

class MainChart extends Component {
  constructor(props) {
    super(props);
    // Pending to configure
    this.state = {
      loading: true,
      options: {
        legend: {
          display: true
        }
      },
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Trades",
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 4,
            borderColor: theme.colors.primary
          }
        ]
      }
    };
  }

  getTrades = async () => {
    const { data } = this.state;
    const { data: response } = await krakenApi.get("/Spread?pair=ETHUSD");

    const labels = [];
    const dataset = [];

    console.log(response);

    for (let i = 0; i < response.result.kength; i++) {
      labels.push(moment(response.result.XETHZUSD[i][2]).format("LL"));
      dataset.push(Number(response.result.XETHZUSD[i][0]));
    }

    data.labels = labels;
    data.datasets[0].dataset = dataset;

    this.setState({
      data
    });
  };

  componentDidMount = async () => {
    await this.getTrades();
    this.setState({ loading: false });
  };

  render() {
    const { options, data } = this.state;
    return (
      <Card>
        <CardBody>
          <Box my={10} display="flex" alignItems="center">
            <Avatar src="/static/images/currencies/ethereum.png" />
            <Typography variant="headingTitle" mr="auto" ml={10}>
              History of Ethereum
            </Typography>
            <Typography variant="muted">Chart</Typography>
          </Box>
          <Box pt={10} display="flex" alignItems="center">
            <Line options={options} data={data} />
          </Box>
        </CardBody>
      </Card>
    );
  }
}

export default MainChart;
