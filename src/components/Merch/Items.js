import { Fragment } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import Button from "../UI/Button";
import imagess from "../images/imageslist/Tshirt.jpg";
import imagesmug from "../images/imageslist/mug.jpg";
import classes from "./itemsList.module.css";
const Items = () =>{
   return (
    <Fragment>
        <Container>
    <Card>
        <Card.Body>
        <Row className={classes.row}>
      <h5>T-Shirt</h5>
       <Col className={classes.col} xs={12} md={6}>
        <img src={imagess} alt="Merchaindise"/>
        <Button />
      </Col>
      
      <h5>Coffee Mug</h5>
      <Col className={classes.col} xs={12} md={6}>
        <img className={classes.img} src={imagesmug} alt="Merchaindise"/>
        <Button /> 
      </Col>
      </Row>
        </Card.Body>
    </Card>
   </Container>
    </Fragment>
       
   )
};
export default Items;