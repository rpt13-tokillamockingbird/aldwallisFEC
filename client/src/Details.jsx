import React from 'react';
import styled from 'styled-components';

const BulletPoints = styled.li`
  font-size: 13px;
  font-family: 'Brandon Text', sans-serif;
  color: rgb(57, 57, 57);
  font-weight: 400;
  line-height: 18.2px;
  text-align: -webkit-match-parent;
  line-height: 1.4;
  padding: 0px;
  height: auto;
  width; auto;
`;

const Header = styled.div`
  font-size: 19px;
  font-family: 'Brandon Text', sans-serif;
  color: rgb(57,57,57);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 26.6px;
  text-size-adjust: 100%;
`;

const Para = styled.p`
  font-size: 13px;
  font-family: 'Brandon Text', sans-serif;
  color: rgb(57, 57, 57);
  font-weight: 400;
  line-height: 18.2px;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const ShipReturn = styled.p`
  font-size: 13px;
  font-family: 'Brandon Text', sans-serif;
  color: rgb(57, 57, 57);
  font-weight: 700;
  line-height: 18.2px;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const UL = styled.ul`
  padding: 0px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 18px;
  margin-right: 18px;
`;



class Details extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='x'>
        <Header>Details & Care</Header>
        <Para>{this.props.data.blurbUnderPrice}</Para>
        <UL>
          <BulletPoints><span>{this.props.data.materials} Upper/{this.props.data.materials} sole</span></BulletPoints>
          <BulletPoints><span>{this.props.data.moreBrand}</span></BulletPoints>
          <BulletPoints><span>{this.props.data.department}</span></BulletPoints>
          <BulletPoints><span>Item #{this.props.data.itemNumber}</span></BulletPoints>
        </UL>
        <ShipReturn>Free Shipping & Returns</ShipReturn>
      </div>
    )
  }
}

// es6 equivalent of export.modules.
export default Details