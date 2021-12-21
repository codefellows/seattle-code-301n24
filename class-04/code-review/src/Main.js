import React from "react";
import HornedBeast from "./HornedBeast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row sm={1} md={2} lg={3} xl={4} >
          {this.props.beastData.map((beastObj, idx) => (
            <HornedBeast beast={beastObj} key={idx} showModal={this.props.showModal}/>
          ))}
        </Row>

        {/* <HornedBeast titleBanana={beastData[0].title} img_url={beastData[0].image_url} descrp={beastData[0].description}/>
        <HornedBeast titleBanana={beastData[1].title} img_url={beastData[1].image_url} descrp={beastData[1].description}/>
        <HornedBeast titleBanana={beastData[2].title} img_url={beastData[2].image_url} descrp={beastData[2].description}/> */}
      </Container>
    );
  }
}

export default Main;
