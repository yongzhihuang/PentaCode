import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { flatten, times, range } from 'lodash';
import { StickyContainer, Sticky } from 'react-sticky';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {

    const NUMBER_OF_PARAGRAPHS = 15;
    const paragraphs = flatten(times(NUMBER_OF_PARAGRAPHS, (index) => 
      (<p key={index}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>)
    ));

    const NUMBER_OF_KITTIES = 5;
    const kitties = range(0, NUMBER_OF_KITTIES).map((i) => {
      return (
          <div className="sidebar-kitties" key={i}>
            <StickyContainer style={{zIndex: 2}}>
              <Sticky>
                <img src="http://placekitten.com/g/300/250" />
              </Sticky>
              <div style={{height: "300px"}}></div>
            </StickyContainer>
          </div>
      )
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Grid>
            <Row className="show-grid">
              <Col lg={8}>
                {paragraphs.map(paragraph => paragraph)}
              </Col>

              <Col lg={4}>{kitties}</Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
