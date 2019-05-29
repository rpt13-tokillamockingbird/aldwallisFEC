import React from 'react'
import styled  from 'styled-components';

const BulletPoints = styled.li`
  font-size: 13px;
  font-family: 'Brandon Text', sans-serif;
  color: rgb(57, 57, 57);
  font-weight: 400;
  BulletPointsne-height: 18.2px;
  text-aBulletPointsgn: -webkit-match-parent;
  BulletPointsne-height: 1.4;
  padding: 0px;
`;

const Header = styled.div`
  font-size: 19px;
  font-family: 'Brandon Text', sans-serif;
  color: rgb(57,57,57);
  font-weight: 700;
  text-transform: uppercase;
  BulletPointsne-height: 26.6px;
  text-size-adjust: 100%;
`;

const UL = styled.ul`
  padding: 0px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 18px;
  margin-right: 18px;
`;

class SizeInfo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Header>Size Info</Header>
        <UL>
          <BulletPoints>
            <span>{this.props.size}</span>
          </BulletPoints>
        </UL>
      </div>
    )
  }
}

export default SizeInfo;