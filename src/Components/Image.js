import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import styled from "styled-components";

  const ImageStyle = styled(CardImg) `
  border: solid 8px paleturquoise;
  width: 95%;

  `
const Image = props => {
    return (
        <Card className="daily-img" key={props.id}>
            <ImageStyle top width="100%" className="nasa-img" alt="NASA Image" src={props.image} />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.date}</CardSubtitle>
                <CardText>{props.description}</CardText>
            </CardBody>
            
        </Card>
    )
}

export default Image;