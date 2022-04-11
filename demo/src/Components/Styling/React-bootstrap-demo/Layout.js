import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
    return (<>
        <Container>
            <Row>
                <Col className='bg-primary text-white' xs={12} sm={6} md={3}>first Column</Col>
                <Col className='bg-secondary text-white' xs={12} sm={6} md={3}>first Column</Col>
                <Col className='bg-danger text-white' xs={12} sm={6} md={3} >first Column</Col>
                <Col className='bg-danger text-white' xs={12} sm={6} md={3} >first Column</Col>
            </Row>
        </Container>
        <hr/>
        <Container fluid>
            <Row>
                <Col className='bg-primary' xs={12} sm={6} md={3}>first Column</Col>
                <Col className='bg-secondary' xs={12} sm={6} md={3}>first Column</Col>
                <Col className='bg-danger' xs={12} sm={6} md={3}>first Column</Col>
                <Col className='bg-danger' xs={12} sm={6} md={3}>first Column</Col>
            </Row>
        </Container>

    </>);
}

export default Layout;