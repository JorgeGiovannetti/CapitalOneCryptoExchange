import React, { Component } from "react";
import shortId from "shortid";
import { withRouter } from "react-router-dom";
import { Container } from "./elements";
import Typography from "blockdemy-ui/typography";
import withUser from "components/providers/withUser";

class Aside extends Component {
  componentDidMount = () => {
    const {
      user: { getAccounts }
    } = this.props;
    getAccounts();
  };

  render() {
    const {
      user: { accounts }
    } = this.props;
    return (
      <Container>
        {accounts.map(({ balance }) => (
          <Typography key={shortId.generate()} variant="d1">
            ${balance}
          </Typography>
        ))}
      </Container>
    );
  }
}

export default withUser(withRouter(Aside));
