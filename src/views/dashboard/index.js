import React, { Component } from "react";
import Web3 from "web3";
import Layout from "components/layout";
import { MainContainer, Row } from "./elements";
import Aside from "./components/aside";
import Onboarding from "./components/onboarding";
import Prices from "./components/prices";
import Trade from "./components/trade";
import MainChart from "./components/main-chart";
import { krakenApi } from "utils/api/axios";
import abi from "./abi.json";
import withUser from "components/providers/withUser";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.web3 = new Web3(Web3.givenProvider, null, {});
    this.state = {
      connected: false,
      ETH: {
        USD: 0,
        growth: 0
      },
      ETC: {
        USD: 0,
        growth: 0
      },
      DAI: {
        USD: 0,
        growth: 0
      },
      BAT: {
        USD: 0,
        growth: 0
      },
      USDT: {
        USD: 0,
        growth: 0
      },
      REP: {
        USD: 0,
        growth: 0
      },
      ETHBalance: 0,
      DAIBalance: 0,
      BATBalance: 0,
      USDTalance: 0,
      REPBalance: 0,
      capitalOneBalance: 0
    };
  }

  componentDidMount = () => {
    this.getCapitalOneBalance();
  };

  getCapitalOneBalance = async () => {
    await this.props.user.getAccounts();
    let total = 0;
    for (let i = 0; i < this.props.user.accounts.length; i++) {
      total += this.props.user.accounts[i].balance;
    }
    this.setState({ capitalOneBalance: total });
  };

  setBalance = async () => {
    const { account } = this.state;
    this.setState({
      ETHBalance: (await this.web3.eth.getBalance(account)) / 10e18
    });

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
  };

  getPrices = async () => {
    const { data } = await krakenApi.get(
      "/Ticker?pair=ETHUSD,ETCUSD,DAIUSD,BATUSD,USDTUSD,REPUSD"
    );
    this.setState({
      ETH: {
        USD: Number(data.result.XETHZUSD.c[0]),
        growth:
          (Number(data.result.XETHZUSD.c[0] / data.result.XETHZUSD.o) - 1) * 100
      },
      ETC: {
        USD: Number(data.result.XETCZUSD.c[0]),
        growth:
          (Number(data.result.XETCZUSD.c[0] / data.result.XETCZUSD.o) - 1) * 100
      },
      DAI: {
        USD: Number(data.result.DAIUSD.c[0]),
        growth:
          (Number(data.result.DAIUSD.c[0] / data.result.DAIUSD.o) - 1) * 100
      },
      BAT: {
        USD: Number(data.result.BATUSD.c[0]),
        growth:
          (Number(data.result.BATUSD.c[0] / data.result.BATUSD.o) - 1) * 100
      },
      USDT: {
        USD: Number(data.result.USDTZUSD.c[0]),
        growth:
          (Number(data.result.USDTZUSD.c[0] / data.result.USDTZUSD.o) - 1) * 100
      },
      REP: {
        USD: Number(data.result.XREPZUSD.c[0]),
        growth:
          (Number(data.result.XREPZUSD.c[0] / data.result.XREPZUSD.o) - 1) * 100
      }
    });
  };

  setConnection = connected => this.setState({ connected });
  setAccount = account => this.setState({ account });

  render() {
    const {
      ETH,
      ETC,
      DAI,
      BAT,
      USDT,
      REP,
      connected,
      ETHBalance,
      DAIBalance,
      BATBalance,
      USDTBalance,
      REPBalance,
      account,
      capitalOneBalance
    } = this.state;
    return (
      <Layout>
        <MainContainer>
          <Aside
            web3={this.web3}
            setConnection={this.setConnection}
            connected={connected}
            setAccount={this.setAccount}
            setBalance={this.setBalance}
            capitalOneBalance={capitalOneBalance}
            ETHBalance={ETHBalance}
            DAIBalance={DAIBalance}
            BATBalance={BATBalance}
            USDTBalance={USDTBalance}
            REPBalance={REPBalance}
            ETH={ETH}
            DAI={DAI}
            ETC={ETC}
            REP={REP}
            BAT={BAT}
            USDT={USDT}
            account={account}
          />
          <Row cols="1fr 3fr">
            <Onboarding />
            <MainChart />
          </Row>
          <Row cols="1fr 1fr">
            <Prices
              ETH={ETH}
              ETC={ETC}
              DAI={DAI}
              REP={REP}
              BAT={BAT}
              USDT={USDT}
              getPrices={this.getPrices}
            />
            <Trade
              web3={this.web3}
              DAIContract={this.DAI}
              connected={connected}
              ETH={ETH}
              DAI={DAI}
              account={account}
            />
          </Row>
        </MainContainer>
      </Layout>
    );
  }
}

export default withUser(Dashboard);
