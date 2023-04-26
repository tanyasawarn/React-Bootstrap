import { Fragment } from "react";

import { Card, Col, Row, Container } from "react-bootstrap";
import imagess from "./imageslist/imageone.jpg";
import imagestwo from "./imageslist/image2.jpg";
import imagesthree from "./imageslist/imagefive.jpg";
import imagesfour from "./imageslist/imagefour.jpg";
import Button from "../UI/Button";
 import classes from "./imageList.module.css";

const ImageList = () => {
  return (
    <Fragment>
      <Container className={classes.container}>
    <Card>
        <Card.Body>
        <Row className={classes.row}>
       <h5>Album 1</h5>
      <Col className={classes.col} xs={12} md={6}>
        <img src={imagess} alt="Music Album1"/>
        <Button />
        
      </Col>
     
     <h5>Album 2</h5>
      <Col className={classes.col} xs={12} md={6}>
        <img src={imagestwo} alt="Music Album2"/>
        <Button />
      </Col>
      </Row>
      <Row className={classes.row}>
      <h5>Album 3</h5>
       <Col className={classes.col} xs={12} md={6}>
        <img src={imagesthree} alt="Music Album3"/>
        <Button />
      </Col>
      
      <h5>Album 4</h5>
      <Col className={classes.col} xs={12} md={6}>
        <img className={classes.img} src={imagesfour} alt="Music Album4"/>
        <Button /> 
      </Col>
      </Row>
        </Card.Body>
    </Card>
      
      </Container>
    </Fragment>
  );
};

export default ImageList;
