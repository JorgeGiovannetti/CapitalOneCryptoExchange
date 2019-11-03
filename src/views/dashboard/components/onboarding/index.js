import React, { Component } from "react";
import shortId from "shortid";
import { CardBody } from "blockdemy-ui/card";
import Typography from "blockdemy-ui/typography";
import Carousel, { Dots } from "components/templates/carousel";
import { Image, Card } from "./elements";

const steps = [
  {
    title: "Connected with your Capital One accounts",
    subtitle:
      "Buy and sell ethereum tokens, peer to peer without using anything third party service. Just with your well known Capital One bank account.",
    image: "/static/images/onboarding/one.png"
  },
  {
    title: "Easy to trade and connect with markets",
    subtitle:
      "Having your balance available will give you an easy way to connect with crypto markets and start trading secured by our platform.",
    image: "/static/images/onboarding/two.png"
  },
  {
    title: "Trade with confidence and secured by us",
    subtitle:
      "Since we have acces and control of the platform, we warranty that you can trade securely with other Capital One users with an account.",
    image: "/static/images/onboarding/three.png"
  }
];

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0
    };
  }

  handleSlide = slide => this.setState({ slide });

  render() {
    const { slide } = this.state;
    return (
      <Card>
        <CardBody>
          <Carousel
            value={slide}
            slides={steps.map(({ title, subtitle, image }) => (
              <div>
                <Image src={image} key={shortId.generate()} />
                <Typography my={10} weight="bold" fontSize="14px">
                  {title}
                </Typography>
                <Typography variant="muted">{subtitle}</Typography>
              </div>
            ))}
            onChange={this.handleSlide}
            center
            keepDirectionWhenDragging
          />
          <Dots
            value={slide}
            onChange={this.handleSlide}
            number={steps.length}
          />
        </CardBody>
      </Card>
    );
  }
}

export default Onboarding;
