import { Fragment } from 'react';
import './App.css';
import { Container, Navbar } from 'react-bootstrap';
import Header from './components/UI/Header';
import ImageList from './components/images/ImageList';
import HeaderTwo from './components/UI/HeaderTwo';

function App() {
  return (
    
    <Fragment> 
        <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
           <Navbar.Brand href="#">Home</Navbar.Brand>
           <Navbar.Brand href="#">Store</Navbar.Brand>
           <Navbar.Brand href="#">About</Navbar.Brand>
        </Container>
        </Navbar>
        <Header />
        <ImageList />
        <HeaderTwo />
        </Fragment>
  
    
  );
}

export default App;
