import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Details from '../src/Details.jsx';
import SizeInfo from '../src/SizeInfo.jsx';

const SandDPadding = styled.div`
  border-top-color: rgb(227, 227, 227);
  border-top-style: solid;
  border-top-width: 1px;
  padding-top: 32px;
  padding-bottom: 35px;
`;

const SurroundingPadding = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  background-color: rgb(255, 255, 255);
`

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: {}
    }
    this.f = this.f.bind(this);
  }

  componentDidMount() {
    this.f()
  }

  f() {
    let x = (window.location.pathname).split('/')[1];
    fetch(`/hundred${window.location.pathname}`)
      .then(d => d.json())
      .then(d => {

        debugger;
        for (let i = 0; i < d.length; i++) {
          if (Number(d[i].itemNumber) === Number(x)) {
            this.setState({
              record: d[i]
            })
          }
        }
      })
  }

  render() {
    return (
      <SurroundingPadding>
        <SandDPadding>
          <SizeInfo size={this.state.record.sizing} />
          <Details data={this.state.record} />
        </SandDPadding>
      </SurroundingPadding>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('ProductDescription'));